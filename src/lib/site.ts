export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amadorgabriel.vercel.app";

export const SITE_NAME = "Gabriel Rodrigues Amador";

export const SITE_TAB_NAME = "Gabriel Rodrigues";

export const SITE_ROLE = "Fullstack Engineer ReactJs .NET";

export const SITE_TITLE = `${SITE_TAB_NAME} · ${SITE_ROLE}`;

export const SITE_DESCRIPTION =
  "Frontend and fullstack engineer in São Paulo, Brazil. I build scalable web products with React, TypeScript, and Next.js. Portfolio, experience, and selected open-source work.";

export const SITE_OG_DESCRIPTION =
  "Frontend & fullstack engineer specializing in React, TypeScript, and Next.js. Based in São Paulo, Brazil.";

export const SITE_KEYWORDS = [
  "Gabriel Rodrigues Amador",
  "Gabriel Amador",
  "frontend developer",
  "fullstack engineer",
  "React developer",
  "TypeScript",
  "Next.js",
  "São Paulo",
  "Brazil",
  "web developer",
  "software engineer",
];

export const OG_IMAGE_PATH = "/og-image.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_TYPE = "image/png";
export const OG_IMAGE_ALT = `${SITE_NAME} · Software Engineer`;

export const OG_LOGO_PATH = "/profile.png";

/** Absolute HTTPS image. WhatsApp and X ignore relative og:image / twitter:image. */
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const ogImage = {
  url: OG_IMAGE_URL,
  secureUrl: OG_IMAGE_URL,
  type: OG_IMAGE_TYPE,
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: OG_IMAGE_ALT,
};
