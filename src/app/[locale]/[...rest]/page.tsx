
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-dark-blue">
      <div className="text-center space-y-8 max-w-2xl">
        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-bold text-purple">404</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-off-white">
            {t("title")}
          </h2>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-off-white/70 leading-relaxed">
          {t("description")}
        </p>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue/10 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 relative z-10">
          <Link
            href="/"
            className="group px-8 py-4 rounded-2xl bg-linear-to-r from-light-blue to-blue border-2 border-light-blue text-off-white text-base md:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-light-blue hover:border-dark-blue"
          >
            <span className="transition-transform group-hover:-translate-x-1">{t("goBackHome")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
