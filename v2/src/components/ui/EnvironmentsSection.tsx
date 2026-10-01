"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building, MapPin, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { ContentDictionary } from "@/data/content";

interface EnvironmentsSectionProps {
  content: ContentDictionary;
}

export const EnvironmentsSection: React.FC<EnvironmentsSectionProps> = ({ content }) => {
  return (
    <section id="environments" className="relative py-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-otis-greenBright uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>{content.environments.actNumber}</span>
            <span className="text-slate-600">{"//"}</span>
            <span className="text-slate-400">{content.environments.tagline}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white max-w-3xl leading-tight mb-4">
            {content.environments.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-light">
            {content.environments.subtitle}
          </p>
        </div>

        <Link
          href="/sectors"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-200 transition-colors shrink-0"
        >
          <span>All 5 Commercial Sectors</span>
          <ChevronRight className="w-4 h-4 text-otis-greenBright" />
        </Link>
      </div>

      {/* Environments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {content.environments.items.map((env) => (
          <div
            key={env.id}
            className="group relative rounded-3xl overflow-hidden bg-obsidian-900 border border-white/10 hover:border-otis-greenBright/50 transition-all duration-500 flex flex-col justify-between shadow-2xl"
          >
            <Link href={env.href} className="relative aspect-[16/9] overflow-hidden block">
              <Image
                src={env.image}
                alt={env.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/40 to-transparent" />

              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                <MapPin className="w-3 h-3 text-otis-orange" />
                <span>{env.scope}</span>
              </div>
            </Link>

            <div className="p-6 sm:p-8">
              <Link href={env.href} className="block">
                <h3 className="text-2xl font-bold font-display text-white mb-6 group-hover:text-emerald-300 transition-colors">
                  {env.title}
                </h3>
              </Link>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-6">
                {env.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-300">
                    <CheckCircle className="w-4 h-4 text-otis-greenBright shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">SECTOR BENCHMARK</span>
                <Link
                  href={env.href}
                  className="flex items-center gap-1.5 text-xs font-mono font-semibold text-otis-greenBright group-hover:text-white transition-colors"
                >
                  <span>Explore Sector</span>
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
