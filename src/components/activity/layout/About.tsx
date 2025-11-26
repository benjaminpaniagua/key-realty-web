import CodeSection from "@/components/ui/about/CodeSection";
import CountrySection from "@/components/ui/about/CountrySection";
import EmailSection from "@/components/ui/about/EmailSection";
import PassionSection from "@/components/ui/about/PassionSection";
import SocialMediaSection from "@/components/ui/about/SocialMediaSection";
import TechStackSection from "@/components/ui/about/TechStackSection";
import { ABOUT_CARDS, AboutCardVariant } from "@/types/about";
import React from "react";

function renderCardContent(variant: AboutCardVariant) {
  switch (variant) {
    case "location":
      return <CountrySection />;
    case "social":
      return <SocialMediaSection />;
    case "stack":
      return <TechStackSection />;
    case "passion":
      return <PassionSection />;
    case "contact":
      return <EmailSection />;
    case "code":
      return <CodeSection />;
    default:
      return null;
  }
}

export default function About() {
  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-dark-blue">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:auto-rows-[minmax(180px,1fr)]">
          {ABOUT_CARDS.map((card) => (
            <article
              key={card.id}
              className={`
                relative overflow-hidden rounded-3xl
                border border-white/5
                bg-slate-900/60
                shadow-[0_0_60px_rgba(15,23,42,0.6)]
                backdrop-blur-xl
                ${card.layout}
              `}
            >
              {/* pequeña rejilla de fondo como en el diseño */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.3),transparent_55%)] opacity-60" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

              {/* CONTENIDO REAL */}
              <div className="relative h-full">
                {renderCardContent(card.variant)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
