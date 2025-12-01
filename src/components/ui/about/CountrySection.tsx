import Image from "next/image";

export default function CountrySection() {
  return (
    <div className="relative flex h-full w-full flex-col p-6 lg:p-10">
      <div className="relative flex-1 min-h-72 sm:min-h-56">
        
        <Image
          src="/images/about/costaRica.svg"
          alt="Map of Costa Rica"
          fill
          className="object-contain"
        />
      </div>

      <div className="block md:hidden mt-4 space-y-2 px-4">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70">
          Based in Costa Rica 🇨🇷
        </p>
        <h3 className="text-2xl font-semibold text-white leading-tight">
          Turning curiosity into <br /> digital craftsmanship.
        </h3>
      </div>

      <div className="hidden md:block absolute bottom-2 xl:bottom-24 left-12 md:left-24 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70">
          Based in Costa Rica 🇨🇷
        </p>
        <h3 className="text-2xl font-semibold text-white leading-tight">
          Turning curiosity into <br /> digital craftsmanship.
        </h3>
      </div>
    </div>
  );
}
