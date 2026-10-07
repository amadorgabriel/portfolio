export type Locale = (typeof locales)[number];

export const locales = ["en-US", "pt-BR"] as const;
export const defaultLocale: Locale = "en-US";

export const localePrefix = "always" as const;

export const labels: Record<Locale, string> = {
  "en-US": "English",
  "pt-BR": "Português",
};
