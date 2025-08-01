import type React from "react";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Gabriel Rodrigues Amador - Desenvolvedor Frontend | React, TypeScript, Next.js",
  description:
    "Desenvolvedor Frontend especializado em React, TypeScript e Next.js. Experiência em desenvolvimento de aplicações escaláveis, otimização de performance e boas práticas de código.",
  keywords: [
    "desenvolvedor frontend",
    "react",
    "typescript",
    "nextjs",
    "javascript",
    "desenvolvedor web",
    "gabriel amador",
  ],
  authors: [{ name: "Gabriel Rodrigues Amador" }],
  creator: "Gabriel Rodrigues Amador",
  publisher: "Gabriel Rodrigues Amador",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://amadorgabriel.vercel.app",
    title: "Gabriel Rodrigues Amador - Desenvolvedor Frontend",
    description:
      "Desenvolvedor Frontend especializado em React, TypeScript e Next.js. Experiência em desenvolvimento de aplicações escaláveis e performáticas.",
    siteName: "Gabriel Rodrigues Amador - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Rodrigues Amador - Desenvolvedor Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Rodrigues Amador - Desenvolvedor Frontend",
    description:
      "Desenvolvedor Frontend especializado em React, TypeScript e Next.js",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://amadorgabriel.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#eab308" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} relative antialiased w-screen border-t-3 border-t-yellow-500 overflow-x-hidden`}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          className="absolute flex items-center top-6 right-10 md:right-28  font-semibold py-1 px-4 rounded-[4px] text-yellow-500 hover:bg-yellow-50"
          rel="noreferrer"
        >
          <Download size={18} className="mr-2" />
          Baixar como PDF
        </a>

        <main className="w-full flex justify-center mb-8">{children}</main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gabriel Rodrigues Amador",
              jobTitle: "Desenvolvedor Frontend",
              description:
                "Desenvolvedor Frontend especializado em React, TypeScript e Next.js",
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
              alumniOf: "Desenvolvedor Frontend",
              workLocation: "Brasil",
            }),
          }}
        />
      </body>
    </html>
  );
}
