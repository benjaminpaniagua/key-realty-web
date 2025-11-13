"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header
      id="home"
      className="min-h-screen h-screen flex flex-col justify-center items-center gap-6 bg-dark-blue [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px]"
    >
      <p className="text-gray font-normal text-base">
        Crafting Clean, Responsive, and Scalable Frontends
      </p>

      <h1 className="text-white font-bold text-7xl leading-tight text-center max-w-5xl">
  Turning Ideas into Interactive{" "}<span className="text-purple">Web Experiences</span>
</h1>

      <p className="text-gray font-normal text-2xl">
        I’m Benjamin Paniagua, a Frontend Developer passionate about design and
        detail.
      </p>

      <button
        className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-light-blue to-blue border-2 border-light-blue text-white text-xl font-semibold flex items-center gap-4 transition-all hover:bg-light-blue hover:border-dark-blue"
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
    </header>
  );
}
