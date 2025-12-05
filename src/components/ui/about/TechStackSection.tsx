"use client";

import { useState } from "react";

type StackColumnProps = {
  items: string[];
  delay?: number;
  direction?: "up" | "down";
  side: "left" | "right";
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
};
const LEFT_STACK_ITEMS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "ReactJS",
  "NextJS",
  "Vite",
  "Redux",
  "API",
  "Axios",
  "ChartJS",
  "Laravel",
  "ASP .NET",
  "SQL",
  "Oracle",
];

const RIGHT_STACK_ITEMS = [
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
  "WordPress",
  "Linux",
  "Windows",
  "macOS",
  "Figma",
  "Scrum",
  "Kanban",
  "Jira",
  "Notion",
];

const createLoopItems = (items: string[]) =>
  Array.from({ length: 3 }, () => items).flat();

function StackColumn({
  items,
  delay = 0,
  direction = "up",
  side,
  hoveredCard,
  setHoveredCard,
}: StackColumnProps) {
  const loopItems = createLoopItems(items);

  const animationClass =
    direction === "down"
      ? "[animation:stackMarqueeDown_22s_linear_infinite]"
      : "[animation:stackMarqueeUp_22s_linear_infinite]";

  return (
    <div className="relative h-[304px] w-[140px] overflow-hidden">
      <div
        className={`
          flex flex-col gap-2
          ${animationClass}
          group-hover:[animation-play-state:paused]
        `}
        style={{ animationDelay: `${delay}s` }}
      >
        {loopItems.map((item, idx) => {
          const id = `${side}-${idx}`;
          const isActive = hoveredCard === id;
          const someoneHovered = hoveredCard !== null;

          return (
            <div
              key={id}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                w-[140px] h-[70px]
                flex items-center justify-center
                rounded-xl
                bg-dark
                text-sm font-semibold text-white
                backdrop-blur-xl
                transition-all duration-300 ease-out
                ${
                  someoneHovered
                    ? isActive
                      ? "opacity-100"
                      : "opacity-20"
                    : "opacity-100"
                }
              `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const sectionDim = hoveredCard !== null;

  return (
    <section
      className={`
        relative h-[300px] overflow-hidden rounded-3xl
        px-6 py-6 lg:px-10 lg:py-8
        flex items-center
        transition-all duration-500
        ${sectionDim ? "bg-blue/10" : "bg-transparent"}
        group
      `}
    >
      <div
        className={`
          relative z-10 flex flex-col justify-center gap-2
          transition-all duration-500
          ${sectionDim ? "opacity-40" : "opacity-100"}
        `}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/70">
          Always learning.
        </p>
        <h3 className="text-2xl font-semibold text-white leading-tight">
          My tech stack
        </h3>
      </div>

      {/* Sliders derecha */}
      <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2 z-0">
        <StackColumn
          items={LEFT_STACK_ITEMS}
          direction="up"
          side="left"
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
        />
        <StackColumn
          items={RIGHT_STACK_ITEMS}
          direction="down"
          side="right"
          delay={-11}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
        />
      </div>

      <style>{`
        @keyframes stackMarqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333333%); }
        }

        @keyframes stackMarqueeDown {
          0% { transform: translateY(-33.333333%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
