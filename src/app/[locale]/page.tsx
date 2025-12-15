import Header from "@/components/activity/Header";
import About from "@/components/activity/About";
import Projects from "@/components/activity/Projects";
import Experience from "@/components/activity/Experience";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  // const t = useTranslations("IndexPage");

  return (
    <main className="px-4 sm:px-6 lg:px-8 font-inter">
      <Header />
      <About />
      <Projects />
      <Experience />
    </main>
  );
}
