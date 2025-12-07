import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CodeSection() {
  const t = useTranslations("About.CodeSection");
  return (
    <section className="relative w-full h-full flex flex-col lg:flex-row items-start lg:items-center justify-between p-6">
      <div className="max-w-3xl lg:max-w-xl flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3em] text-white/90">
          {t("subtitle1")}
        </p>

        <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight md:leading-[1.2]">
          {t("title")}
        </h3>
      </div>

      <div className="flex justify-center lg:justify-end w-full">
        <div
          className="
            relative 
            w-full 
            h-[250px]
            md:w-[650px] 
            md:h-[400px] 
            overflow-hidden
            rounded-2xl
            mt-12 lg:mt-0
            backdrop-blur-lg
            border border-white/10
            lg:left-12
          "
        >
          <Image
            src="/images/about/code.svg"
            alt="Code illustration"
            fill
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
