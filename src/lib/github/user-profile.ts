import { profile as fallbackProfile } from "@/lib/portfolio-data";
import { githubFetch, GITHUB_USERNAME } from "./client";

/** GitHub organization link shown as `@handle` in the profile headline. */
export type ProfileCompany = {
  handle: string;
  url: string;
};

export type ProfileHeader = {
  name: string;
  bio: string | null;
  location: string | null;
  company: ProfileCompany | null;
};

type GitHubUser = {
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  login: string;
};

/** Alphanumeric, single internal hyphens, 1–39 chars. */
const GITHUB_SLUG =
  /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;

function trimmedOrNull(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function isGitHubSlug(slug: string): boolean {
  return GITHUB_SLUG.test(slug);
}

function toCompany(slug: string): ProfileCompany {
  return {
    handle: `@${slug}`,
    url: `https://github.com/${encodeURIComponent(slug)}`,
  };
}

/** First `@slug` in the company field, or a lone slug shown as `@slug`. */
export function resolveGitHubCompany(
  company: string | null | undefined,
): ProfileCompany | null {
  const trimmed = trimmedOrNull(company);
  if (!trimmed) return null;

  const tokens = trimmed.split(/\s+/);
  for (const token of tokens) {
    const exact = token.match(/^@([A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?)$/);
    if (exact && isGitHubSlug(exact[1])) return toCompany(exact[1]);
  }

  const embedded = trimmed.match(
    /@([A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?)/,
  );
  if (embedded && isGitHubSlug(embedded[1])) return toCompany(embedded[1]);

  if (tokens.length === 1) {
    const slug = tokens[0].replace(/^@+/, "");
    if (isGitHubSlug(slug)) return toCompany(slug);
  }

  return null;
}

export const staticProfileHeader: ProfileHeader = {
  name: fallbackProfile.displayName,
  bio: fallbackProfile.role,
  location: fallbackProfile.location,
  company: null,
};

export async function fetchGitHubProfileHeader(): Promise<ProfileHeader> {
  try {
    const response = await githubFetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
    );
    if (!response.ok) return staticProfileHeader;

    const user = (await response.json()) as GitHubUser;
    return {
      name:
        trimmedOrNull(user.name) ||
        trimmedOrNull(user.login) ||
        fallbackProfile.displayName,
      bio: trimmedOrNull(user.bio),
      location: trimmedOrNull(user.location),
      company: resolveGitHubCompany(user.company),
    };
  } catch {
    return staticProfileHeader;
  }
}
