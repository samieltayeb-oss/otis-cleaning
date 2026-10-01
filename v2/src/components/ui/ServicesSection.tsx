"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { ContentDictionary } from "@/data/content";

interface ServicesSectionProps {
  content: ContentDictionary;
  onRequestQuote?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  content,
}) => {
  return (
    <section id="services" className="relative py-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-otis-orange uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.services.actNumber}</span>
            <span className="text-slate-600">{"//"}</span>
            <span className="text-slate-400">{content.services.tagline}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white max-w-3xl leading-tight mb-4">
            {content.services.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-light">
            {content.services.subtitle}
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-200 transition-colors shrink-0"
        >
          <span>All 7 Capabilities</span>
          <ChevronRight className="w-4 h-4 text-otis-orange" />
        </Link>
      </div>

      {/* Cinematic Services Spatial Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.services.items.map((svc, idx) => (
          <div
            key={svc.id}
            className="group relative rounded-3xl overflow-hidden bg-obsidian-900/90 border border-white/10 hover:border-otis-orange/50 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-xl"
          >
            {/* Image Header with Cinematic Gradient */}
            <Link href={svc.href} className="relative aspect-[16/10] overflow-hidden block">
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/30 to-transparent" />

              {/* Tag Pills */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                  {svc.tag}
                </span>
                {svc.badge && (
                  <span className="px-3 py-1 rounded-full bg-otis-orangeMuted border border-otis-orange/40 text-[10px] font-mono uppercase tracking-wider text-otis-orange font-bold">
                    {svc.badge}
                  </span>
                )}
              </div>
            </Link>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-otis-orange uppercase tracking-wider mb-2">
                  {svc.subtitle}
                </div>
                <Link href={svc.href} className="block">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 group-hover:text-amber-200 transition-colors">
                    {svc.title}
                  </h3>
                </Link>
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {svc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">0{idx + 1} {"//"} PROTOCOL</span>
                <Link
                  href={svc.href}
                  className="flex items-center gap-1.5 text-xs font-mono font-semibold text-otis-orange group-hover:text-white transition-colors"
                >
                  <span>View Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
