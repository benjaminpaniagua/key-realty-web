import Image from "next/image";

export default function CountrySection() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="relative flex-1 min-h-72 sm:min-h-56">
        <Image
          src="/images/about/costaRica.svg"
          alt="Map of Costa Rica"
          fill
          className="object-contain"
        />
      </div>

      <div className="block md:hidden mt-4 space-y-2 px-4">
        <h2 className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
          Based in Costa Rica 🇨🇷
        </h2>
        <p className="text-lg font-semibold leading-snug text-slate-50">
          Turning curiosity into <br /> digital craftsmanship.
        </p>
      </div>

      <div className="hidden md:block absolute bottom-2 xl:bottom-4 left-12 space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
          Based in Costa Rica 🇨🇷
        </p>
        <p className="text-2xl font-semibold leading-snug text-slate-50">
          Turning curiosity into <br /> digital craftsmanship.
        </p>
      </div>
    </div>
  );
}
