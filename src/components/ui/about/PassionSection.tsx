import Image from "next/image";

export default function PassionSection() {
  return (
    <div className="relative flex h-full flex-col px-6 pt-6 sm:px-7 lg:px-8 sm:pt-7 lg:pt-8">
      <h3 className="text-2xl font-semibold text-white leading-tight">
        Developer with a strong passion for building modern, scalable
        applications
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
