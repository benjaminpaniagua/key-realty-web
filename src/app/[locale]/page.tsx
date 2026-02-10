"use client";

import { useRef } from "react";
import About from "@/components/activity/About";
import Header from "@/components/activity/Header";
import PropertyShowCase from "@/components/activity/PropertyShowCase";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  const propertyShowCaseRef = useRef<HTMLDivElement>(null);


  // const t = useTranslations("IndexPage");

  return (
    <main className="font-poppins bg-off-white flex flex-col gap-20">
      <Header/>
      <div className="max-w-[1440px] mx-auto">
        <PropertyShowCase />
        <About />
      </div>
    </main>
  );
}
