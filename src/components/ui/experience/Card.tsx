"use client";

import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  dates?: string;
  image?: string;
  parallaxOffset?: number;
  onHoverChange?: (hovering: boolean) => void;
};

export default function Card({
  title,
  description,
  dates,
  image,
  parallaxOffset = 0,
  onHoverChange,
}: CardProps) {
  return (
    <div
      className="
        group relative
        border border-white/10
        rounded-2xl px-4 py-8
        flex items-center justify-between gap-4
        will-change-transform
        transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)]
      "
      style={{ transform: `translateX(${parallaxOffset}px)` }}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-2xl
          bg-linear-to-br from-purple-500/20 via-sky-500/10 to-transparent
          opacity-0 blur-xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {image && (
        <div className="shrink-0">
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="object-contain w-12 h-12 md:w-20 md:h-20"
          />
        </div>
      )}

      <div className="flex flex-col gap-2 justify-center flex-1">
        <div className="flex justify-between">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {title}
          </h3>

          <p className="text-sm md:text-base text-white/70 leading-tight">
            {dates}
          </p>
        </div>

        <p className="text-sm md:text-base text-white/70 leading-tight">
          {description}
        </p>
      </div>
      
    </div>
  );
}
