"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">
        {t("title")}
      </h2>
      <p className="text-slate-600 mb-8 text-center max-w-md">
        {t("description")}
      </p>
      <Link
        href={`/${locale}`}
        className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
