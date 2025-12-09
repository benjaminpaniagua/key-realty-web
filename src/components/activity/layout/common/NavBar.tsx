"use client";

import { useRouter } from "next/navigation";
import { NavBarItems } from "@/types/navbar";

type NavBarProps = {
  items: NavBarItems[];
  className?: string;
};

export default function NavBar({ items, className }: NavBarProps) {
  const router = useRouter();

  return (
    <div
      className={`flex justify-center py-8 ${className} absolute top-0 left-0 right-0 z-50`}
    >
      <nav className="bg-dark-blue/70 px-8 py-4 rounded-lg backdrop-blur-lg border border-white/10">
        <ul className="flex items-center gap-12">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative group text-white hover:text-white/80 cursor-pointer"
            >
              <button
                type="button"
                onClick={() => {
                  if (item.id === "home") {
                    const el = document.getElementById("home");
                    if (!el) {
                      router.push("/");
                      return;
                    }
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                  }

                  const el = document.getElementById(item.id);

                  if (!el) {
                    router.push(`/#${item.id}`);
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
                }}
                className="bg-transparent text-inherit p-0"
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </button>
              <span
                className="
                  absolute left-1/2 -bottom-[6px] h-[3px] w-[3px] rounded-full bg-white opacity-0 transition-all *:duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-[3px] -translate-x-1/2"
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
