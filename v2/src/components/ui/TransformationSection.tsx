"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Layers, Award } from "lucide-react";
import { ContentDictionary } from "@/data/content";

interface TransformationSectionProps {
  content: ContentDictionary;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ content }) => {
  return (
    <section id="transformation" className="relative py-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-otis-orange uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>{content.transformation.actNumber}</span>
          <span className="text-slate-600">{"//"}</span>
          <span className="text-slate-400">{content.transformation.tagline}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white max-w-3xl leading-tight">
          {content.transformation.title}
        </h2>
      </div>

      {/* Grid: Narrative Column + Authentic Photographic Evidence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {content.transformation.paragraph}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-otis-orange mb-1">
                {content.transformation.metric1Val}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {content.transformation.metric1Lbl}
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-otis-greenBright mb-1">
                {content.transformation.metric2Val}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {content.transformation.metric2Lbl}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
            <Award className="w-5 h-5 text-otis-orange shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              All commercial hard floors undergo pH-neutralized residue extraction and diamond polymer finishing to resist sub-zero winter calcium tracking.
            </p>
          </div>
        </div>

        {/* Right Authentic Photographic Transformation Card */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-obsidian-900 shadow-2xl p-2 sm:p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Before State */}
              <div className="relative group rounded-2xl overflow-hidden aspect-[4/5] bg-black/60 border border-white/5">
                <Image
                  src="/images/real_floor_dirty_1789881645030.jpg"
                  alt="Commercial floor prior to restoration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-red-500/30 text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">
                  Raw State: Salt Degradation
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-400">
                  Heavy winter calcium build-up, dull surface glaze, scuffed perimeter.
                </div>
              </div>

              {/* After State */}
              <div className="relative group rounded-2xl overflow-hidden aspect-[4/5] bg-black/60 border border-white/5">
                <Image
                  src="/images/real_floor_clean_1789881653699.jpg"
                  alt="Commercial floor post machine restoration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-otis-greenBright/30 text-[10px] font-mono text-otis-greenBright font-bold uppercase tracking-wider">
                  Restored: Diamond Gloss
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-300">
                  Full chemical strip, neutral wash, 4-coat polymer seal applied.
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-3">
              <Sparkles className="w-4 h-4 text-otis-orange" />
              <span>Authentic unedited photographic documentation from Montreal client facilities.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
