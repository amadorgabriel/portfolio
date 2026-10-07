import { NextResponse } from "next/server";
import { resolveSiteFavicon } from "@/lib/resolve-site-favicon";

export async function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("url");
  if (!raw) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let pageUrl: URL;
  try {
    pageUrl = new URL(raw);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!["http:", "https:"].includes(pageUrl.protocol)) {
    return NextResponse.json({ error: "Invalid protocol" }, { status: 400 });
  }

  const iconUrl = await resolveSiteFavicon(pageUrl);
  return NextResponse.redirect(iconUrl, 307);
}
