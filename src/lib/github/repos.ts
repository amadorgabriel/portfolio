import { attachRepoIcons } from "./attach-repo-icons";
import { githubFetch, GITHUB_USERNAME } from "./client";
import type { GitHubRepository } from "./types";

type GraphqlPinnedNode = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  pushedAt: string;
  defaultBranchRef: { name: string } | null;
  primaryLanguage: { name: string; color: string | null } | null;
};

type SearchRepoItem = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
  language: string | null;
  default_branch?: string;
};

function mapGraphqlRepo(node: GraphqlPinnedNode): GitHubRepository {
  return {
    id: node.id,
    name: node.name,
    description: node.description,
    htmlUrl: node.url,
    homepageUrl: node.homepageUrl,
    pushedAt: node.pushedAt,
    languageName: node.primaryLanguage?.name ?? null,
    languageColor: node.primaryLanguage?.color ?? null,
    defaultBranch: node.defaultBranchRef?.name ?? "main",
    iconUrl: null,
  };
}

function mapSearchRepo(item: SearchRepoItem): GitHubRepository {
  return {
    id: String(item.id),
    name: item.name,
    description: item.description,
    htmlUrl: item.html_url,
    homepageUrl: item.homepage || null,
    pushedAt: item.pushed_at,
    languageName: item.language,
    languageColor: null,
    defaultBranch: item.default_branch ?? "main",
    iconUrl: null,
  };
}

const PROFILE_HEADERS = {
  Accept: "text/html",
  "User-Agent": "amadorgabriel-portfolio",
};

type ProfilePin = {
  id: string;
  name: string;
  description: string | null;
  htmlUrl: string;
  languageName: string | null;
  languageColor: string | null;
};

function decodeHtmlText(value: string): string {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function parsePinnedProfileHtml(
  html: string,
  owner: string = GITHUB_USERNAME,
): ProfilePin[] {
  const pins: ProfilePin[] = [];
  const seen = new Set<string>();

  for (const part of html.split("js-pinned-item-list-item").slice(1)) {
    const href = part.match(
      new RegExp(`href="/${owner}/([^"/?#]+)"`),
    );
    if (!href) continue;

    const name = decodeURIComponent(href[1]);
    if (seen.has(name)) continue;
    seen.add(name);

    const hrefAt = part.indexOf(href[0]);
    const tagStart = part.lastIndexOf("<a", hrefAt);
    const tagEnd = part.indexOf(">", hrefAt);
    const anchor =
      tagStart >= 0 && tagEnd > tagStart ? part.slice(tagStart, tagEnd) : "";
    const id = anchor.match(/\bid="(\d+)"/)?.[1] ?? name;

    const description = decodeHtmlText(
      part.match(/pinned-item-desc[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? "",
    );
    const languageName =
      part.match(/itemprop="programmingLanguage">([^<]+)/)?.[1]?.trim() ??
      null;
    const languageColor =
      part.match(/background-color:\s*(#[0-9a-fA-F]{3,8})/)?.[1] ?? null;

    pins.push({
      id,
      name,
      description: description || null,
      htmlUrl: `https://github.com/${owner}/${name}`,
      languageName,
      languageColor,
    });
  }

  return pins;
}

async function fetchPinnedFromGraphql(): Promise<GitHubRepository[] | null> {
  if (!process.env.GITHUB_TOKEN) return null;

  const query = `
    query ($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              pushedAt
              defaultBranchRef {
                name
              }
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await githubFetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
    });
    if (!response.ok) return null;

    const payload = (await response.json()) as {
      data?: {
        user?: {
          pinnedItems?: { nodes?: Array<GraphqlPinnedNode | null> };
        } | null;
      };
    };
    const user = payload.data?.user;
    if (!user) return null;

    return (user.pinnedItems?.nodes ?? [])
      .filter((node): node is GraphqlPinnedNode => Boolean(node?.name && node.url))
      .map(mapGraphqlRepo);
  } catch {
    return null;
  }
}

async function fetchLatestCommitDate(name: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://github.com/${GITHUB_USERNAME}/${encodeURIComponent(name)}/commits.atom`,
      {
        headers: {
          Accept: "application/atom+xml",
          "User-Agent": PROFILE_HEADERS["User-Agent"],
        },
        next: { revalidate: 3600 },
      },
    );
    if (!response.ok) return null;
    const xml = await response.text();
    return xml.match(/<updated>([^<]+)<\/updated>/)?.[1]?.trim() ?? null;
  } catch {
    return null;
  }
}

async function fetchPinnedFromProfile(): Promise<GitHubRepository[]> {
  let html: string;
  try {
    const response = await fetch(`https://github.com/${GITHUB_USERNAME}`, {
      headers: PROFILE_HEADERS,
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    html = await response.text();
  } catch {
    return [];
  }

  const pins = parsePinnedProfileHtml(html);
  return Promise.all(
    pins.map(async (pin) => {
      try {
        const response = await githubFetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${encodeURIComponent(pin.name)}`,
        );
        if (response.ok) {
          const details = (await response.json()) as SearchRepoItem;
          return {
            ...mapSearchRepo(details),
            description: details.description ?? pin.description,
            languageName: details.language ?? pin.languageName,
            languageColor: pin.languageColor,
          };
        }
      } catch {
        // The public profile card and commit feed still identify the repo.
      }

      return {
        id: pin.id,
        name: pin.name,
        description: pin.description,
        htmlUrl: pin.htmlUrl,
        homepageUrl: null,
        pushedAt: (await fetchLatestCommitDate(pin.name)) ?? "",
        languageName: pin.languageName,
        languageColor: pin.languageColor,
        defaultBranch: "main",
        iconUrl: null,
      };
    }),
  );
}

/** GraphQL needs a token. Without one, pins come from the public profile. */
export async function fetchPinnedRepositories(): Promise<GitHubRepository[]> {
  try {
    const repos =
      (await fetchPinnedFromGraphql()) ?? (await fetchPinnedFromProfile());
    return attachRepoIcons(repos);
  } catch {
    return [];
  }
}

export async function fetchPortfolioTopicRepositories(): Promise<
  GitHubRepository[]
> {
  const q = `user:${GITHUB_USERNAME} topic:portfolio`;

  try {
    const response = await githubFetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=updated&per_page=30`,
    );

    if (!response.ok) return [];

    const payload = (await response.json()) as { items?: SearchRepoItem[] };
    const repos = (payload.items ?? []).map(mapSearchRepo);

    return attachRepoIcons(repos);
  } catch {
    return [];
  }
}

export async function fetchPortfolioProjects(): Promise<GitHubRepository[]> {
  return fetchPortfolioTopicRepositories();
}

export function repoYear(isoDate: string) {
  return isoDate.slice(0, 4);
}
