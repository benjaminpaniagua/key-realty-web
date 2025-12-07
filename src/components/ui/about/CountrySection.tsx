import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CountrySection() {

  const t = useTranslations("About.CountrySection");
  
  return (
    <div className="relative flex h-full w-full flex-col p-6 lg:p-10">
      <div className="relative flex-1 flex items-center justify-center min-h-48 sm:min-h-56 md:min-h-72 lg:min-h-80">
        <div className="relative w-[300px] h-[250px] sm:w-[360px] sm:h-[300px] md:w-[470px] md:h-[445px]">
          <Image
            src="/images/about/costaRica.svg"
            alt="Map of Costa Rica"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="block md:hidden space-y-2 px-4 mb-4">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70">
          {t("subtitle1")}
        </p>
        <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight" dangerouslySetInnerHTML={{ __html: t("title") }} />
      </div>

      <div className="hidden md:block absolute bottom-2 md:bottom-16 left-12 md:left-24 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70">
          {t("subtitle1")}
        </p>
        <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight" dangerouslySetInnerHTML={{ __html: t("title") }} />
      </div>
    </div>
  );
}
