import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/portfolio-motion.css";
import { SiteJsonLd } from "@/components/site-json-ld";
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_TAB_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · ${SITE_TAB_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLMs.txt" }],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: `${SITE_NAME} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@_amadorgabriel_",
    creator: "@_amadorgabriel_",
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        other: {
          "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="author" href="/humans.txt" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-neutral-900`}
        suppressHydrationWarning
      >
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
