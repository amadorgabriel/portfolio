export const GITHUB_USERNAME = "amadorgabriel";

const REVALIDATE_SECONDS = 3600;

export function githubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "amadorgabriel-portfolio",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

export function githubFetch(
  url: string,
  init?: RequestInit & { next?: { revalidate?: number } },
) {
  return fetch(url, {
    ...init,
    headers: { ...githubHeaders(), ...init?.headers },
    next: { revalidate: REVALIDATE_SECONDS, ...init?.next },
  });
}
