import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Header from "../../components/activity/layout/Header";
import About from "@/components/activity/layout/About";
import Experience from "@/components/activity/layout/Experience";
import Projects from "@/components/activity/layout/Projects";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  // const t = useTranslations("IndexPage");

  return (
    <>
      <Header />
      <About />
      <Projects />
      <Experience />
    </>
  );
}
