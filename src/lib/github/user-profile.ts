import { profile as fallbackProfile } from "@/lib/portfolio-data";
import { githubFetch, GITHUB_USERNAME } from "./client";

export type ProfileHeader = {
  name: string;
  subtitle: string;
};

type GitHubUser = {
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  login: string;
};

function cleanCompany(company: string | null): string | null {
  if (!company?.trim()) return null;
  return company.replace(/^@/, "").trim();
}

export function formatProfileSubtitle(
  bio: string | null,
  company: string | null,
  location: string | null,
): string {
  const cleanedCompany = cleanCompany(company);
  const parts: string[] = [];

  if (bio?.trim() && cleanedCompany) {
    parts.push(`${bio.trim()} at ${cleanedCompany}`);
  } else if (bio?.trim()) {
    parts.push(bio.trim());
  } else if (cleanedCompany) {
    parts.push(cleanedCompany);
  }

  const main = parts.join("");
  const loc = location?.trim();

  if (main && loc) return `${main} · ${loc}`;
  if (loc) return loc;
  if (main) return main;

  return `${fallbackProfile.role} · ${fallbackProfile.location}`;
}

export async function fetchGitHubProfileHeader(): Promise<ProfileHeader> {
  try {
    const response = await githubFetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
    );
    if (!response.ok) {
      return {
        name: fallbackProfile.name,
        subtitle: `${fallbackProfile.role} · ${fallbackProfile.location}`,
      };
    }

    const user = (await response.json()) as GitHubUser;
    return {
      name: user.name?.trim() || user.login || fallbackProfile.name,
      subtitle: formatProfileSubtitle(user.bio, user.company, user.location),
    };
  } catch {
    return {
      name: fallbackProfile.name,
      subtitle: `${fallbackProfile.role} · ${fallbackProfile.location}`,
    };
  }
}
