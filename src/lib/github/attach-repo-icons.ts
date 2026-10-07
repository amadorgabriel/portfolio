import { resolveRepoRootFaviconUrl } from "./repo-root-favicon";
import type { GitHubRepository } from "./types";

export async function attachRepoIcons(
  repos: GitHubRepository[],
): Promise<GitHubRepository[]> {
  return Promise.all(
    repos.map(async (repo) => ({
      ...repo,
      iconUrl: await resolveRepoRootFaviconUrl(repo.name, repo.defaultBranch),
    })),
  );
}
