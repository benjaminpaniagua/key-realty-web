"use client";

import Button from "@/components/ui/common/Button";

export default function Header() {
  return (
    <header
      id="home"
      className="min-h-screen h-screen flex flex-col justify-center items-center gap-6 bg-dark-blue [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px] text-center"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-white/90">
        Crafting Clean, Responsive, and Scalable Frontends
      </p>

      <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight max-w-5xl">
        Turning Ideas into Interactive{" "}
        <span className="text-purple">Web Experiences</span>
      </h1>

      <p className="text-gray font-normal text-base md:text-2xl">
        I’m Benjamin Paniagua, a Frontend Developer passionate about design and
        detail.
      </p>
      <Button />
    </header>
  );
}
