"use client";

import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useTransition, useState, useEffect } from "react";
import { locales, labels, type Locale } from "@/i18n/config";
import { Globe, Check } from "lucide-react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLocale = (params?.locale as Locale) || locales[0];

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      const newPathname = pathname.replace(
        `/${currentLocale}`,
        `/${nextLocale}`,
      );
      router.push(newPathname);
    });
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <button
        disabled
        className="flex items-center space-x-1 px-2 py-1 rounded-[4px] text-slate-600 opacity-70"
        aria-label="Change language"
        aria-expanded="false"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{labels[currentLocale]}</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center space-x-1 px-2 py-1 rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200 transition-colors cursor-pointer"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{labels[currentLocale]}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
            role="menu"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors cursor-pointer ${
                  locale === currentLocale
                    ? "text-yellow-600 font-medium"
                    : "text-slate-700"
                }`}
                disabled={isPending}
                role="menuitem"
              >
                <span>{labels[locale]}</span>
                {locale === currentLocale && <Check size={16} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
