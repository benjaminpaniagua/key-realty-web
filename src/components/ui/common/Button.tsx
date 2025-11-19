import Image from "next/image";

export default function Button() {
  return (
    <button
        className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-light-blue to-blue border-2 border-light-blue text-white text-base md:text-lg font-semibold flex items-center justify-center gap-4 transition-all hover:bg-light-blue hover:border-dark-blue w-full sm:w-fit mx-auto
  "
        type="button"
      >
        See my work
        <Image
          src="/images/icons/arrow.svg"
          alt="arrow icon"
          width={12}
          height={12}
          className="w-3 h-3 transition-transform group-hover:translate-x-1"
        />
      </button>
  )
}
