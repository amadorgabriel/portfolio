import type { Metadata } from "next";
import { NotFoundPage } from "@/components/portfolio/NotFoundPage";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist on this site.",
  robots: { index: false, follow: true },
  openGraph: {
    title: `Page not found · ${SITE_NAME}`,
    url: `${SITE_URL}/404`,
    type: "website",
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
