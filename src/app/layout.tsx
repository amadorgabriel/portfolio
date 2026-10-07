import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/portfolio-motion.css";
import { LINKEDIN_PROFILE_URL } from "@/lib/profile-links";
import messages from "@/messages/en-US.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const meta = messages.metadata;
const jsonLd = messages.jsonLd;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "frontend developer",
    "react",
    "typescript",
    "nextjs",
    "javascript",
    "web developer",
    "gabriel amador",
  ],
  authors: [{ name: "Gabriel Rodrigues Amador" }],
  creator: "Gabriel Rodrigues Amador",
  publisher: "Gabriel Rodrigues Amador",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amadorgabriel.vercel.app",
    title: meta.openGraphTitle,
    description: meta.openGraphDescription,
    siteName: "Gabriel Rodrigues Amador - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: meta.openGraphTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.openGraphTitle,
    description: meta.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://amadorgabriel.vercel.app",
  },
  other: {
    "json-ld": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gabriel Rodrigues Amador",
      jobTitle: jsonLd.jobTitle,
      description: jsonLd.description,
      url: "https://amadorgabriel.vercel.app",
      sameAs: ["https://github.com/amadorgabriel", LINKEDIN_PROFILE_URL],
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "Node.js",
        "Frontend Development",
        "Web Development",
      ],
      alumniOf: jsonLd.jobTitle,
      workLocation: jsonLd.workLocation,
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-neutral-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
