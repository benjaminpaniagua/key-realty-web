import About from "@/components/activity/About";
import Header from "@/components/activity/Header";
import PropertyShowCase from "@/components/activity/PropertyShowCase";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  // const t = useTranslations("IndexPage");

  return (
    <main className="font-poppins bg-off-white flex flex-col gap-20">
      <Header />
      <PropertyShowCase />
      <About />
    </main>
  );
}
