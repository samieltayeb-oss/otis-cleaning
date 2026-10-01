"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, Compass } from "lucide-react";
import { ContentDictionary } from "@/data/content";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { MobileNavDrawer } from "@/components/ui/MobileNavDrawer";

interface NavigationHUDProps {
  scrollProgress: number;
  lang: "en" | "fr";
  onToggleLang: () => void;
  content: ContentDictionary;
  onRequestQuote: () => void;
}

export const NavigationHUD: React.FC<NavigationHUDProps> = ({
  scrollProgress,
  lang,
  onToggleLang,
  content,
  onRequestQuote,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Fixed Floating HUD */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#050811]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between gap-4">
          {/* Brand Logo & Coordinates */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-9 w-28 sm:w-32 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/otis-logo.png"
                  alt="OTIS Commercial Cleaning"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Live Operational Coordinates Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-wider text-slate-400">
              <Compass className="w-3.5 h-3.5 text-otis-orange animate-spin" style={{ animationDuration: "12s" }} />
              <span>{content.nav.telemetry}</span>
            </div>
          </div>

          {/* Center Navigation Links (Multi-Page Semantic Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-slate-300">
            <Link href="/services" className="hover:text-otis-orange transition-colors">
              {content.nav.services}
            </Link>
            <Link href="/sectors" className="hover:text-otis-orange transition-colors">
              {content.nav.environments}
            </Link>
            <Link href="/compliance" className="hover:text-otis-orange transition-colors">
              {content.nav.compliance}
            </Link>
            <Link href="/about" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "À Propos" : "About"}
            </Link>
            <Link href="/contact" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Contact" : "Contact"}
            </Link>
          </nav>

          {/* Right Action Hub */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Accessibility Toolbar */}
            <div className="hidden md:inline-flex shrink-0">
              <AccessibilityToolbar />
            </div>

            {/* Language Switcher Pill */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold tracking-wider text-slate-200 transition-colors shrink-0 whitespace-nowrap"
              aria-label="Toggle language"
            >
              <span className={lang === "fr" ? "text-otis-orange font-black" : "text-slate-400"}>FR</span>
              <span className="text-slate-600">/</span>
              <span className={lang === "en" ? "text-otis-orange font-black" : "text-slate-400"}>EN</span>
            </button>

            {/* Direct Phone Dispatch (Desktop: Full Pill with number) */}
            <a
              href="tel:14389359725"
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-otis-greenBright shrink-0" />
              <span>{content.nav.callNow}</span>
            </a>

            {/* Direct Phone Dispatch (Tablet/Mobile: Clean Icon-Only Circle) */}
            <a
              href="tel:14389359725"
              title={content.nav.callNow}
              aria-label={content.nav.callNow}
              className="inline-flex xl:hidden items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-otis-greenBright hover:text-white shrink-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
            </a>

            {/* Request Proposal CTA (Desktop / Tablet) */}
            <button
              onClick={onRequestQuote}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-otis-orange hover:bg-otis-orangeHover text-white text-xs font-semibold tracking-wide shadow-lg shadow-otis-orange/20 transition-all hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap"
            >
              <span>{content.nav.requestQuote}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Mobile Drawer Navigation (Hamburger menu for mobile) */}
            <MobileNavDrawer
              lang={lang}
              onToggleLang={onToggleLang}
              onRequestQuote={onRequestQuote}
            />
          </div>
        </div>

        {/* Global Progress Track */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-otis-orange via-amber-400 to-otis-greenBright transition-all duration-75"
            style={{ width: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%` }}
          />
        </div>
      </header>
    </>
  );
};
