import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const allowPublic = { allow: "/", disallow: ["/api/"] as string[] };

  return {
    rules: [
      { userAgent: "*", ...allowPublic },
      { userAgent: "Twitterbot", ...allowPublic },
      { userAgent: "facebookexternalhit", ...allowPublic },
      { userAgent: "Facebot", ...allowPublic },
      { userAgent: "WhatsApp", ...allowPublic },
      { userAgent: "GPTBot", ...allowPublic },
      { userAgent: "ChatGPT-User", ...allowPublic },
      { userAgent: "Google-Extended", ...allowPublic },
      { userAgent: "ClaudeBot", ...allowPublic },
      { userAgent: "Claude-Web", ...allowPublic },
      { userAgent: "PerplexityBot", ...allowPublic },
      { userAgent: "Applebot-Extended", ...allowPublic },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
