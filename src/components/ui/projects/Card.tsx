"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TECHNOLOGIES } from "@/data/technologies";
import type { TechnologyId } from "@/types/technology";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  link_url?: string;
  technologies: TechnologyId[];
  parallaxOffset?: number;
  onHoverChange?: (hovering: boolean) => void;
};

function useMaxVisibleTechnologies() {
  const [maxVisible, setMaxVisible] = useState(() => {
    if (typeof window === "undefined") return 3;

    const w = window.innerWidth;
    if (w < 768) return 2;
    if (w < 1024) return 2;
    if (w < 1280) return 3;
    return 5;
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      let next = 5;

      if (w < 768) next = 2;
      else if (w < 1280) next = 3;

      setMaxVisible((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return maxVisible;
}

export default function Card({
  title,
  description,
  image,
  link_url,
  technologies,
  parallaxOffset = 0,
  onHoverChange,
}: CardProps) {
  const techToShow = TECHNOLOGIES.filter((t) => technologies.includes(t.id));
  const [showHidden, setShowHidden] = useState(false);

  const MAX_VISIBLE = useMaxVisibleTechnologies();

  const visibleTech = techToShow.slice(0, MAX_VISIBLE);
  const hiddenTech = techToShow.slice(MAX_VISIBLE);
  const hiddenCount = hiddenTech.length;

  return (
    <div
      className="
        group relative
        border border-white/10
        rounded-2xl p-6
        flex flex-col justify-between gap-4 h-full
        will-change-transform
        transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)]
        hover:shadow-[0_15px_50px_rgba(15,23,42,0.7)]
      "
      style={{ transform: `translateX(${parallaxOffset}px)` }}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-2xl
          bg-gradient-to-br from-purple-500/20 via-sky-500/10 to-transparent
          opacity-0 blur-xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {image && (
        <div className="relative w-full mt-1 flex justify-center items-center">
          <div
            className="
              relative
              w-[640px] h-[360px]
              max-w-full
              mx-auto
              rounded-3xl
              overflow-hidden
              bg-black/5
              transform translate-y-3
              transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)]
              group-hover:translate-y-0
            "
          >
            <Image
              src={image.startsWith("/") ? image : `/${image}`}
              alt={title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 640px, 100vw"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>

      <div className="flex items-center justify-between mt-4 w-full">
        <div className="relative flex items-center gap-4 flex-wrap">
          {visibleTech.map((tech) => (
            <div
              key={tech.id}
              className="
                flex h-12 w-12 items-center justify-center 
                rounded-full bg-dark-blue border border-white/20 
                shadow-[0_0_10px_rgba(0,0,0,0.5)]
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <Image
                src={tech.iconSrc}
                alt={tech.label}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
          ))}

          {hiddenCount > 0 && (
            <div
              className="relative z-20"
              onMouseEnter={() => setShowHidden(true)}
              onMouseLeave={() => setShowHidden(false)}
            >
              <button
                type="button"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-full bg-dark-blue border border-dashed border-white/40
                  text-sm font-semibold text-white
                  shadow-[0_0_10px_rgba(0,0,0,0.5)]
                  transition-all duration-300
                  hover:scale-105 hover:bg-dark-blue/80
                "
              >
                +{hiddenCount}
              </button>

              <div
                className={`
                  pointer-events-none
                  absolute left-1/2 bottom-[125%]
                  -translate-x-1/2
                  flex items-center gap-3
                  rounded-2xl border border-white/15
                  bg-[#020617]/95
                  px-4 py-3
                  shadow-[0_18px_45px_rgba(15,23,42,0.9)]
                  backdrop-blur-xl
                  transition-all duration-250
                  ${
                    showHidden
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 translate-y-2 scale-95"
                  }
                `}
              >
                {hiddenTech.map((tech, index) => (
                  <div
                    key={tech.id}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full bg-dark-blue border border-white/20
                      shadow-[0_0_10px_rgba(0,0,0,0.4)]
                      transition-all duration-300
                    "
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <Image
                      src={tech.iconSrc}
                      alt={tech.label}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {link_url && (
          <a
            href={link_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm text-purple whitespace-nowrap flex items-center gap-2 font-medium
              transition-transform duration-300
              group-hover:-translate-x-1 hover:underline
            "
          >
            Visit website{" "}
            <Image
              src="/images/icons/arrowPurple.svg"
              alt="Arrow"
              width={8}
              height={8}
              className="object-contain"
            />
          </a>
        )}
      </div>
    </div>
  );
}
