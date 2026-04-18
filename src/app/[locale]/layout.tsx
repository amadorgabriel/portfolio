import React from "react";
import { Download } from "lucide-react";
import { Inter } from "next/font/google";
import { getTranslations } from "next-intl/server";
import "../globals.css";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const tJsonLd = await getTranslations({ locale, namespace: "jsonLd" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "frontend developer",
      "desenvolvedor frontend",
      "react",
      "typescript",
      "nextjs",
      "javascript",
      "web developer",
      "desenvolvedor web",
      "gabriel amador",
    ],
    authors: [{ name: "Gabriel Rodrigues Amador" }],
    creator: "Gabriel Rodrigues Amador",
    publisher: "Gabriel Rodrigues Amador",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
      url: "https://amadorgabriel.vercel.app",
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      siteName: "Gabriel Rodrigues Amador - Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("openGraphTitle"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("openGraphTitle"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: "https://amadorgabriel.vercel.app",
      languages: {
        "en-US": "https://amadorgabriel.vercel.app/en-US",
        "pt-BR": "https://amadorgabriel.vercel.app/pt-BR",
      },
    },
    other: {
      "json-ld": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Gabriel Rodrigues Amador",
        jobTitle: tJsonLd("jobTitle"),
        description: tJsonLd("description"),
        url: "https://amadorgabriel.vercel.app",
        sameAs: [
          "https://github.com/amadorgabriel",
          "https://www.linkedin.com/in/gabriel-rodrigues-amador/",
          "https://www.goodreads.com/user/show/131404275-gabriel-amador",
        ],
        knowsAbout: [
          "React",
          "TypeScript",
          "Next.js",
          "JavaScript",
          "Node.js",
          "Frontend Development",
          "Web Development",
        ],
        alumniOf: tJsonLd("jobTitle"),
        workLocation: tJsonLd("workLocation"),
      }),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "actions" });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#eab308" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} relative antialiased w-screen border-t-3 border-t-yellow-500 overflow-x-hidden`}
        suppressHydrationWarning
      >
        <div className="absolute top-6 right-10 md:right-28 flex items-center space-x-2 z-50">
          <LocaleSwitcher />
          {locale === "pt-BR" && (
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center font-semibold py-1 px-4 rounded-[4px] text-yellow-500 hover:bg-yellow-50"
              rel="noreferrer"
            >
              <Download size={18} className="mr-2" />
              {t("downloadPDF")}
            </a>
          )}
        </div>

        <main className="w-full flex justify-center mb-8">{children}</main>
      </body>
    </html>
  );
}
