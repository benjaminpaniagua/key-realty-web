"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavBarItems } from "@/types/navbar";
import LanguageSwitcher from "./LanguageSwitcher";

type NavBarProps = {
  items: NavBarItems[];
  className?: string;
};

export default function NavBar({ items, className }: NavBarProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleNavigation = (item: NavBarItems) => {
    if (item.id === "home") {
      const el = document.getElementById("home");
      if (!el) {
        router.push("/");
        setIsOpen(false);
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    const el = document.getElementById(item.id);

    if (!el) {
      router.push(`/#${item.id}`);
      setIsOpen(false);
      return;
    }

    const nav = document.querySelector("nav");
    const offset = nav ? (nav as HTMLElement).offsetHeight : 80;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset -
      8;
    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  useEffect(() => {
    const onHashChange = () => setIsOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!isOpen) return;
      const navEl = navRef.current;
      if (navEl && !navEl.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [isOpen]);

  return (
    <div
      className={`flex justify-center py-4 md:py-8 font-inter ${className} fixed md:absolute top-0 left-0 right-0 z-50`}
    >
      <nav ref={navRef} className="bg-dark-blue/70 px-6 md:px-8 py-3 md:py-4 rounded-lg backdrop-blur-lg border border-white/10 w-[95%] md:w-auto mx-auto md:mx-0 shadow-lg">
        <div className="flex items-center justify-between md:justify-start gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple transition-all duration-300 p-2 -ml-2 flex items-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="relative flex flex-col items-center justify-center w-6 h-6">
              <span
                className={`block absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${isOpen ? 'translate-y-0 -rotate-45' : '-translate-y-2'}`}
                style={{ transformOrigin: "center" }}
              />
              <span
                className={`block absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${isOpen ? 'translate-y-0 rotate-45' : 'translate-y-2'}`}
                style={{ transformOrigin: "center" }}
              />
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {items.map((item) => (
              <li
                key={item.id}
                className="relative group text-white hover:text-white/80 cursor-pointer transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => handleNavigation(item)}
                  className="bg-transparent text-inherit p-0 text-sm lg:text-base font-medium"
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </button>
                <span
                  className="
                    absolute left-1/2 -bottom-1.5 h-1 w-1 rounded-full bg-purple opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 group-hover:translate-y-1 -translate-x-1/2"
                ></span>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>

          <div className="md:hidden ml-auto">
            <LanguageSwitcher />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-200">
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.id} className="text-white/80 hover:text-white cursor-pointer transition-colors duration-300">
                  <button
                    type="button"
                    onClick={() => handleNavigation(item)}
                    className="bg-transparent text-inherit p-2 px-0 w-full text-left text-sm font-medium hover:translate-x-1 transition-transform duration-300"
                    aria-label={`Go to ${item.label}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
