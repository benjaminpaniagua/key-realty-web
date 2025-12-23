"use client";

  import { useTranslations } from "next-intl";
  import { useEffect, useRef } from 'react';
  import gsap from 'gsap';
import Button from "../ui/common/Button";

  export default function Header() {
    const t = useTranslations("Header");
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const headerTitles = entry.target.querySelectorAll(".header-title-item");
            
            if (headerTitles.length > 0) {
              gsap.fromTo(
                headerTitles,
                {
                  opacity: 0,
                  y: -50,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  ease: "power2.easeOut",
                  stagger: {
                    amount: 0.3,
                    from: "start",
                  },
                }
              );
            }
          }
        });
      }, observerOptions);

      if (headerRef.current) {
        observer.observe(headerRef.current);
      }

      return () => {
        if (headerRef.current) {
          observer.unobserve(headerRef.current);
        }
      };
    }, []);

    return (
      <header
        ref={headerRef}
        id="home"
        className="min-h-screen h-screen flex flex-col justify-center items-center gap-4 bg-dark-blue bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px] text-center mt-12"
      >

        <p className="header-title-item text-sm md:text-lg uppercase tracking-[0.3em] text-white/90">
          {t("subtitle1")}
        </p>

        <h1 className="header-title-item text-white font-bold text-4xl md:text-6xl leading-tight max-w-5xl">
          {t("name")} <br />
          <span className="text-purple">{t("occupation")}</span>
        </h1>

        <p className="header-title-item text-base md:text-xl font-normal text-white/90 max-w-2xl">
          {t("subtitle2")}
        </p>
        <div className="header-title-item">
          <Button text={t("btnCV")} icon="/images/icons/download.svg" iconAlt="Download icon" pdfUrl={t("pdfUrl")} />
        </div>
      </header>
    );
  }