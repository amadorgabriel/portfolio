import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix } from "./i18n/config";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const localePattern = new RegExp(`^/(${locales.join("|")})(?:/.*)?$`);
  const match = pathname.match(localePattern);

  if (match) {
    const locale = match[1];
    const rest = pathname.replace(`/${locale}`, "");

    if (rest && rest !== "/") {
      return Response.redirect(new URL(`/${locale}`, request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*$).*)"],
};
