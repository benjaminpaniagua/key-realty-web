"use client";

import { useTranslations } from "next-intl";
import Button from '../../ui/common/Button';

export default function Header() {

    const t = useTranslations("Header");


  return (
    <header
      id="home"
      className="min-h-screen h-screen flex flex-col justify-center items-center gap-4 bg-dark-blue [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px] text-center mt-12"
    >

      <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-white/90">
        {t("subtitle1")}
      </p>

      <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight max-w-5xl">
        {t("name")} <br />
        <span className="text-purple">{t("occupation")}</span>
      </h1>

      <p className="text-base md:text-xl font-normal text-white/90 max-w-2xl">
        {t("subtitle2")}
      </p>
      <Button text={t("btnCV")} icon="/images/icons/download.svg" iconAlt="Download icon" pdfUrl={t("pdfUrl")} />
    </header>
  );
}
