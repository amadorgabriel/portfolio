const FETCH_TIMEOUT_MS = 6000;

function parseIconHref(html: string, base: URL): string | null {
  const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
  for (const tag of linkTags) {
    const rel = tag.match(/\brel=["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? "";
    if (!rel.includes("icon")) continue;
    const href = tag.match(/\bhref=["']([^"']+)["']/i)?.[1];
    if (href) return new URL(href, base).href;
  }

  for (const tag of linkTags) {
    const rel = tag.match(/\brel=["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? "";
    if (!rel.includes("apple-touch-icon")) continue;
    const href = tag.match(/\bhref=["']([^"']+)["']/i)?.[1];
    if (href) return new URL(href, base).href;
  }

  return null;
}

export async function resolveSiteFavicon(pageUrl: URL): Promise<string> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const response = await fetch(pageUrl.href, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; PortfolioFavicon/1.0; +https://amadorgabriel.vercel.app)",
        Accept: "text/html,application/xhtml+xml",
      },
    });
    clearTimeout(timeout);

    if (response.ok) {
      const html = await response.text();
      const parsed = parseIconHref(html, pageUrl);
      if (parsed) return parsed;
    }
  } catch {
    /* try origin fallback */
  }

  return new URL("/favicon.ico", pageUrl.origin).href;
}
