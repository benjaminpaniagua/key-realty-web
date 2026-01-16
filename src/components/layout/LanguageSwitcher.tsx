"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");
  const [showLanguages, setShowLanguages] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const knownLocales = ["en", "es"];
  const parts = pathname.split("/").filter(Boolean);
  const currentLocale = knownLocales.includes(parts[0]) ? parts[0] : "en";

  const locales = [
    { code: "en", flagCode: "us" },
    { code: "es", flagCode: "cr" },
  ];

  const buildNewPath = (newLocale: string) => {
    const pathParts = pathname.split("/");
    if (knownLocales.includes(pathParts[1])) {
      pathParts[1] = newLocale;
      return pathParts.join("/") || `/${newLocale}`;
    } else {
      return `/${newLocale}${pathname === "/" ? "" : pathname}`;
    }
  };

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = buildNewPath(newLocale);
    router.push(newPathname);
    setShowLanguages(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowLanguages(false);
      }
    }

    if (showLanguages) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showLanguages]);

  useEffect(() => {
    const onScroll = () => {
      if (showLanguages) setShowLanguages(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showLanguages]);

  useEffect(() => {
    const onHash = () => setShowLanguages(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowLanguages(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setShowLanguages((s) => !s)}
        className="text-off-white hover:text-off-white/80 cursor-pointer transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-secondary/10"
        aria-label={t("label")}
        aria-expanded={showLanguages}
      >
        <span className={`fi fi-${locales.find(l => l.code === currentLocale)?.flagCode} text-2xl`} />
        <span className={`transition-transform duration-300 text-xs font-medium ${showLanguages ? "rotate-180" : ""}`}>▼</span>
      </button>

      <div
        className={`absolute top-full mt-2 right-0 border rounded-lg backdrop-blur-md overflow-hidden z-50 shadow-xl shadow-black/30 transform origin-top transition-all duration-200 min-w-max ${
          showLanguages ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: 'var(--color-navy)' }}
      >
        {locales.map((locale) => (
          <button
            key={locale.code}
            type="button"
            onClick={() => handleLanguageChange(locale.code)}
            className={`w-full text-left px-5 py-3 text-sm transition-all duration-200 flex items-center gap-3 border-l-3 ${
              currentLocale === locale.code
                ? "border-l-off-white text-off-white font-semibold"
                : "border-l-transparent text-off-white/80 hover:text-off-white hover:bg-dark/15"
            }`}
          >
            <span className={`fi fi-${locale.flagCode} text-lg`} />
            <span>{locale.code === "en" ? t("english") : t("spanish")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
