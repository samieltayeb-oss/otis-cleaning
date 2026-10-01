"use client";

import React from "react";
import { ArrowDown, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";
import { ContentDictionary } from "@/data/content";

interface HeroSectionProps {
  content: ContentDictionary;
  onExploreClick: () => void;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  content,
  onExploreClick,
  onRequestQuote,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-10">
      {/* Top Header Badge */}
      <div className="pt-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-otis-orangeMuted border border-otis-orange/30 text-otis-orange text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-otis-orange animate-ping" />
          <span>{content.hero.badge}</span>
        </div>
      </div>

      {/* Hero Narrative Core */}
      <div className="my-auto py-12 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.04] mb-8">
          <span>{content.hero.titlePrimary}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-otis-orange via-amber-400 to-otis-greenBright">
            {content.hero.titleAccent}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10 text-balance">
          {content.hero.subtitle}
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={onRequestQuote}
            className="px-8 py-4 rounded-full bg-otis-orange hover:bg-otis-orangeHover text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-otis-orange/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <span>{content.hero.ctaPrimary}</span>
            <Building2 className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreClick}
            className="px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-sm font-medium transition-all hover:border-white/20 flex items-center gap-2"
          >
            <span>{content.hero.ctaSecondary}</span>
            <ArrowDown className="w-4 h-4 text-slate-400 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom Institutional Signals */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex flex-wrap items-center gap-6 md:gap-10 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-otis-greenBright" />
            <span>{content.hero.statDecree}</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-otis-greenBright" />
            <span>{content.hero.statInsurance}</span>
          </div>

          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-otis-orange" />
            <span>{content.hero.statCoverage}</span>
          </div>
        </div>

        <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase flex items-center gap-2">
          <span>{content.hero.scrollHint}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
        </div>
      </div>
    </section>
  );
};
