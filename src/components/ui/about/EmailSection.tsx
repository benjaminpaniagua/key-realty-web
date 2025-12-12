"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const EMAIL = "benjamin.paniaguar12@gmail.com";

export default function EmailSection() {
  const t = useTranslations("About.EmailSection");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="flex h-full flex-col justify-center p-6 lg:p-10 gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-xs uppercase tracking-[0.25em] text-white/90">
          {t("title")}
        </h3>
        <p className="text-lg md:text-2xl font-semibold text-white leading-tight">
          {t("subtitle1")}
        </p>
      </div>

      <button
        onClick={handleCopy}
        className={`w-full rounded-xl px-8 py-4 text-sm
          text-white transition font-medium flex items-center justify-center gap-2
          ${copied ? "bg-green-700/90 cursor-not-allowed" : "bg-dark-blue hover:bg-dark-blue/70 text-white cursor-pointer"}
        `}
      >
        {!copied && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z" />
          </svg>
        )}
        {copied ? t("button.emailCopied") : t("button.copy")}
      </button>
    </div>
  );
}
