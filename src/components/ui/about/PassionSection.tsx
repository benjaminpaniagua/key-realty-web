import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PassionSection() {
  const t = useTranslations("About.PassionSection");

  return (
    <div className="relative flex h-full flex-col px-6 pt-6 sm:px-7 lg:px-8 sm:pt-7 lg:pt-8">
      <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight">
        {t("title")}
      </h3>
      <div className="mt-auto flex items-center justify-center">
        <Image
          src="/images/about/input.svg"
          alt="Input devices illustration"
          width={100}
          height={80}
          className="object-contain w-[400px] md:w-[500px] h-auto"
        />
      </div>
    </div>
  );
}
