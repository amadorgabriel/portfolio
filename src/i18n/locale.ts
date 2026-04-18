"use server";

import { cookies, headers } from "next/headers";
import { Locale, defaultLocale, locales } from "./config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale(): Promise<Locale> {
  const headersList = await headers();
  const cookiesList = await cookies();

  const cookieLocale = cookiesList.get(COOKIE_NAME)?.value as Locale;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = headersList.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")[0]
      .split(";")[0]
      .trim() as Locale;

    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }

    const lang = preferredLocale.split("-")[0];
    const matchedLocale = locales.find((l) => l.startsWith(lang));
    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookiesList = await cookies();
  cookiesList.set(COOKIE_NAME, locale);
}
