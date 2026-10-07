import { GITHUB_USERNAME } from "./client";

const ROOT_FAVICON_FILES = [
  "favicon.ico",
  "favicon.png",
  "favicon.jpg",
  "favicon.jpeg",
] as const;

const CHECK_TIMEOUT_MS = 4000;

async function existsOnRawBranch(
  owner: string,
  repo: string,
  branch: string,
  file: string,
): Promise<boolean> {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file}`;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), CHECK_TIMEOUT_MS);
    let response = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      next: { revalidate: 3600 },
    });
    if (!response.ok && (response.status === 405 || response.status === 501)) {
      response = await fetch(url, {
        method: "GET",
        signal: controller.signal,
        next: { revalidate: 3600 },
      });
    }
    clearTimeout(timeout);
    return response.ok;
  } catch {
    return false;
  }
}

export async function resolveRepoRootFaviconUrl(
  repoName: string,
  defaultBranch: string,
  owner: string = GITHUB_USERNAME,
): Promise<string | null> {
  const branch = defaultBranch || "main";

  for (const file of ROOT_FAVICON_FILES) {
    const found = await existsOnRawBranch(owner, repoName, branch, file);
    if (found) {
      return `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/${file}`;
    }
  }

  return null;
}
