"use client";

import { useEffect, useMemo, useState, type TouchEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Card from "@/components/ui/projects/Card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { CardItem } from "@/types/cardProjects";

const AUTOPLAY_DELAY = 10000;
const SWIPE_THRESHOLD = 50;

function useItemsPerSlide() {
  const [items, setItems] = useState(1);
  useEffect(() => {
    const check = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setItems(2);
      } else {
        setItems(1);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return items;
}

function chunkCards(cards: CardItem[], size: number): CardItem[][] {
  const result: CardItem[][] = [];
  if (size <= 0) return [cards];

  for (let i = 0; i < cards.length; i += size) {
    result.push(cards.slice(i, i + size));
  }
  return result;
}

export default function Projects() {
  const t = useTranslations("Projects");
  const cards = t.raw("cards") as CardItem[];
  const itemsPerSlide = useItemsPerSlide();
  const slides = useMemo<CardItem[][]>(
    () => chunkCards(cards, itemsPerSlide),
    [itemsPerSlide, cards]
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const totalSlides = slides.length;

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused, autoplayKey]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(true);
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
    setIsPaused(false);
    setAutoplayKey((prev) => prev + 1);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseStartX(e.clientX);
    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseStartX === null) return;

    const deltaX = e.clientX - mouseStartX;
    setDragOffset(deltaX);

    if (Math.abs(deltaX) > 5) setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (dragOffset > SWIPE_THRESHOLD) goToPrev();
      else if (dragOffset < -SWIPE_THRESHOLD) goToNext();
    }

    setMouseStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(false);
    setAutoplayKey((prev) => prev + 1);
  };

  const parallaxOffset = dragOffset * 0.12;

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
      <div className="mx-auto max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          {t("title")}{" "}
          <span className="text-purple">{t("titleHighlight")}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative mt-12 md:mt-24"
        >
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
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              draggable={false}
            >
              {slides.map((slideCards, slideIndex) => (
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0 }}
                  animate={slideIndex === currentSlide ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`shrink-0 w-full min-w-full py-2 px-[.15rem] ${
                    slideCards.length === 1
                      ? "flex justify-center items-center"
                      : "grid grid-cols-1 md:grid-cols-2 gap-4"
                  } transition-opacity duration-500 ${
                    slideIndex === currentSlide
                      ? "opacity-100"
                      : "opacity-0 md:opacity-0 pointer-events-none"
                  }`}
                >
                  {slideCards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={slideIndex === currentSlide ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className={
                        slideCards.length === 1
                          ? "w-full max-w-full"
                          : index === 1
                          ? "hidden md:block"
                          : "block"
                      }
                    >
                      <Card
                        {...card}
                        technologies={card.technologies || []}
                        parallaxOffset={
                          slideIndex === currentSlide ? parallaxOffset : 0
                        }
                        onHoverChange={(hovering) => setIsPaused(hovering)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="mt-12 flex items-center justify-center gap-3"
          >
            {getVisibleDots().map((dotIndex) => (
              <motion.button
                key={dotIndex}
                type="button"
                onClick={() => {
                  setCurrentSlide(dotIndex);
                  setAutoplayKey((prev) => prev + 1);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIndex === currentSlide
                    ? "w-8 bg-purple animate-pulse"
                    : "w-3 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
