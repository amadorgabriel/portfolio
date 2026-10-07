export function faviconApiUrl(pageUrl: string) {
  return `/api/favicon?${new URLSearchParams({ url: pageUrl }).toString()}`;
}

export function googleFaviconUrl(pageUrl: string, size = 128) {
  const host = new URL(pageUrl).hostname;
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${size}`;
}
