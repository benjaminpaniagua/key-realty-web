"use client";

export default function Header() {
  return (
    <header
      id="home"
      className="min-h-screen h-screen flex flex-col justify-center items-center gap-6 bg-dark-blue [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px] text-center"
    >

      <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-white/90">
        Modern, Accessible & Scalable Web Solutions
      </p>

      <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight max-w-5xl">
        Benjamin Paniagua <br />
        <span className="text-purple">Frontend Developer</span>
      </h1>

      <p className="text-base md:text-xl font-normal text-white/90 max-w-2xl">
        Passionate about building fast, user-friendly digital experiences. Open to new frontend opportunities.
      </p>
    </header>
  );
}
