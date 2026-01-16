"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { NavBarLink } from "@/types/navbar";
import BtnPrimary from "../ui/common/BtnPrimary";
import BtnSecondary from "../ui/common/BtnSecondary";

export default function NavBar() {
  const t = useTranslations("NavBar"), tCommon = useTranslations("Common");
  const navLinks: NavBarLink[] = t.raw("links");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-12 w-full bg-transparent backdrop-blur-xs py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/logo/logo2.png" 
              alt="Key Realty" 
              height={45} 
              width={90}
              priority
            />
          </Link>

          {/* desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-white hover:text-slate-200 transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* right side items */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <BtnPrimary 
                label={tCommon("signUp")}
                className="hidden lg:flex"
              />
              <BtnSecondary 
                label={tCommon("login")}
                className="hidden lg:flex"
              />
            </div>
            
            {/* hamburger menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
  className={`
    overflow-hidden transition-all duration-300 ease-out lg:hidden
    ${isOpen 
      ? "max-h-96 opacity-100 pointer-events-auto" 
      : "max-h-0 opacity-0 pointer-events-none"
    }
  `}
>

          <div className="pb-4 lg:hidden flex flex-col gap-4 mt-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="block px-4 text-white/80 hover:text-white transition-colors text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* mobile-only language switcher and sign up */}
            <div className="flex flex-col gap-3 px-4 border-t border-white/10 pt-4">
              <BtnPrimary 
                label={tCommon("signUp")}
              />
              <BtnSecondary 
                label={tCommon("login")}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}