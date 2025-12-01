// src/components/sections/Projects.tsx
"use client";

import {
  useEffect,
  useMemo,
  useState,
  type TouchEvent,
} from "react";
import Card from "@/components/ui/projects/Card";
import { CARDS } from "@/data/cards";
import type { CardItem } from "@/types/card";

const AUTOPLAY_DELAY = 8000;
const SWIPE_THRESHOLD = 50;
const ITEMS_PER_SLIDE = 2;

// Divide el array en chunks de 2 cards por slide
function chunkCards(cards: CardItem[], size: number): CardItem[][] {
  const result: CardItem[][] = [];
  if (size <= 0) return [cards];

  for (let i = 0; i < cards.length; i += size) {
    result.push(cards.slice(i, i + size));
  }
  return result;
}

export default function Projects() {
  const slides = useMemo<CardItem[][]>(
    () => chunkCards(CARDS, ITEMS_PER_SLIDE),
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // 👈 controla pausa

  const totalSlides = slides.length;

  // 🔁 Autoplay (solo se detiene si isPaused === true)
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  // Swipe táctil
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(true); // pausa mientras arrastras
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const deltaX = e.touches[0].clientX - touchStartX;
    setDragOffset(deltaX);

    if (Math.abs(deltaX) > 5) setIsDragging(true);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      if (dragOffset > SWIPE_THRESHOLD) goToPrev();
      else if (dragOffset < -SWIPE_THRESHOLD) goToNext();
    }

    setTouchStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(false); // al soltar, vuelve autoplay
  };

  // Parallax (máximo ~12px)
  const parallaxOffset = dragOffset * 0.12;

  // Máximo 5 dots visibles
  const getVisibleDots = () => {
    const maxDots = 5;
    const total = slides.length;

    if (total <= maxDots) return [...Array(total).keys()];

    let start = currentSlide - Math.floor(maxDots / 2);
    let end = currentSlide + Math.floor(maxDots / 2);

    if (start < 0) {
      end += -start;
      start = 0;
    } else if (end >= total) {
      start -= end - total + 1;
      end = total - 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h2>

        <div className="relative mt-12 md:mt-24">
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isDragging
                  ? ""
                  : "transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
              }`}
              style={{
                transform: `translateX(calc(-${
                  currentSlide * 100
                }% + ${dragOffset}px))`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {slides.map((slideCards, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`shrink-0 w-full min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ${
                    slideIndex === currentSlide
                      ? "opacity-100"
                      : "opacity-0 md:opacity-60 pointer-events-none"
                  }`}
                >
                  {slideCards.map((card, index) => (
                    <div
                      key={card.id}
                      className={index === 1 ? "hidden md:block" : "block"}
                    >
                      <Card
                        {...card}
                        parallaxOffset={
                          slideIndex === currentSlide ? parallaxOffset : 0
                        }
                        // 👇 cuando haces hover en una card, se pausa
                        onHoverChange={(hovering) => setIsPaused(hovering)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots (máximo 5) */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {getVisibleDots().map((dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => setCurrentSlide(dotIndex)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIndex === currentSlide
                    ? "w-8 bg-purple animate-pulse"
                    : "w-3 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
