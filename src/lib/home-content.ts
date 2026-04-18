import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import type { HomeContent } from "@/types/home-content";
import homeEnUS from "../../public/assets/content/home/en-US.json";
import homePtBR from "../../public/assets/content/home/pt-BR.json";

const byLocale: Record<Locale, HomeContent> = {
  "pt-BR": homePtBR as HomeContent,
  "en-US": homeEnUS as HomeContent,
};

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getHomeContent(locale: string): HomeContent {
  return byLocale[isLocale(locale) ? locale : defaultLocale];
}
