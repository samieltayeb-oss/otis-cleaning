"use client";

import React from "react";
import { Shield, FileCheck2, Scale, KeyRound, Check } from "lucide-react";
import { ContentDictionary } from "@/data/content";

interface TrustSectionProps {
  content: ContentDictionary;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ content }) => {
  return (
    <section id="compliance" className="relative py-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2 text-xs font-mono text-otis-orange uppercase tracking-widest mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>{content.trust.actNumber}</span>
          <span className="text-slate-600">{"//"}</span>
          <span className="text-slate-400">{content.trust.tagline}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white max-w-3xl leading-tight mb-4">
          {content.trust.title}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-light">
          {content.trust.subtitle}
        </p>
      </div>

      {/* 4 Pillars of Legal Compliance & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pillar 1: CPEEP Parity */}
        <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900 border border-white/10 hover:border-otis-orange/40 transition-colors shadow-2xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-otis-orangeMuted border border-otis-orange/30 flex items-center justify-center text-otis-orange mb-6">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
              {content.trust.cpeepTitle}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {content.trust.cpeepDesc}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-otis-orange">
            <Check className="w-4 h-4" />
            <span>Guaranteed Statutory Protection</span>
          </div>
        </div>

        {/* Pillar 2: CNESST */}
        <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900 border border-white/10 hover:border-otis-greenBright/40 transition-colors shadow-2xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-otis-greenMuted border border-otis-greenBright/30 flex items-center justify-center text-otis-greenBright mb-6">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
              {content.trust.cnesstTitle}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {content.trust.cnesstDesc}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-otis-greenBright">
            <Check className="w-4 h-4" />
            <span>Zero Work-Safety Liability Exposure</span>
          </div>
        </div>

        {/* Pillar 3: Insurance */}
        <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900 border border-white/10 hover:border-white/25 transition-colors shadow-2xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
              {content.trust.insuranceTitle}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {content.trust.insuranceDesc}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-300">
            <Check className="w-4 h-4 text-otis-greenBright" />
            <span>Direct COI Provided Upon Contract</span>
          </div>
        </div>

        {/* Pillar 4: Security */}
        <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900 border border-white/10 hover:border-white/25 transition-colors shadow-2xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
              {content.trust.securityTitle}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {content.trust.securityDesc}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-300">
            <Check className="w-4 h-4 text-otis-greenBright" />
            <span>24-Hour Supervisor Remediation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
