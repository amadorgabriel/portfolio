import type { Metadata } from "next";
import { NotFoundPage } from "@/components/portfolio/NotFoundPage";
import { fetchGitHubProfileHeader } from "@/lib/github/user-profile";
import { SITE_TAB_NAME, SITE_URL, ogImage } from "@/lib/site";

const notFoundTitle = `Page not found · ${SITE_TAB_NAME}`;
const notFoundDescription = "The page you requested does not exist on this site.";

export const metadata: Metadata = {
  title: "Page not found",
  description: notFoundDescription,
  robots: { index: false, follow: true },
  openGraph: {
    title: notFoundTitle,
    description: notFoundDescription,
    url: SITE_URL,
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: notFoundTitle,
    description: notFoundDescription,
    images: [ogImage],
  },
};

export default async function NotFound() {
  const profileHeader = await fetchGitHubProfileHeader();
  return <NotFoundPage profileHeader={profileHeader} />;
}
