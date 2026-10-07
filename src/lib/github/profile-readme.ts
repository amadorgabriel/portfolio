import { githubFetch, GITHUB_USERNAME } from "./client";

type ReadmeResponse = {
  content?: string;
  encoding?: string;
};

export function markdownToAboutParagraphs(markdown: string): string[] {
  const cleaned = markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/^#+\s/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "");

  return cleaned
    .split(/\n\s*\n/)
    .map((block) => block.replace(/\s+/g, " ").trim())
    .filter((block) => block.length > 0);
}

async function fetchProfileReadmeRaw(): Promise<string | null> {
  try {
    const response = await githubFetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_USERNAME}/readme`,
      { headers: { Accept: "application/vnd.github.raw" } },
    );

    if (response.ok) {
      const text = await response.text();
      if (text.trim()) return text;
    }

    const fallback = await githubFetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_USERNAME}/readme`,
    );
    if (!fallback.ok) return null;

    const payload = (await fallback.json()) as ReadmeResponse;
    if (!payload.content) return null;

    return Buffer.from(payload.content, "base64").toString("utf-8");
  } catch {
    return null;
  }
}

export async function fetchProfileReadmeMarkdown(): Promise<string | null> {
  const raw = await fetchProfileReadmeRaw();
  return raw?.trim() ? raw : null;
}

export async function fetchProfileReadmeParagraphs(): Promise<string[]> {
  const raw = await fetchProfileReadmeRaw();
  if (!raw) return [];
  return markdownToAboutParagraphs(raw);
}
