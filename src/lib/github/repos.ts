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

export async function fetchPinnedRepositories(): Promise<GitHubRepository[]> {
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

    if (!response.ok) return [];

    const payload = (await response.json()) as {
      data?: {
        user?: {
          pinnedItems?: { nodes?: GraphqlPinnedNode[] };
        };
      };
    };

    const nodes = payload.data?.user?.pinnedItems?.nodes ?? [];
    return attachRepoIcons(nodes.map(mapGraphqlRepo));
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
