import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Header from "../../components/ui/layout/Header";
import About from "@/components/ui/layout/About";
import Experience from "@/components/ui/layout/Experience";
import Contact from "@/components/ui/layout/Contact";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  // const t = useTranslations("IndexPage");

  return (
    <>
      <Header />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
