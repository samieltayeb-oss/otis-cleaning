"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Phone, 
  ArrowRight, 
  Compass, 
  Award
} from "lucide-react";
import { aboutData } from "@/data/pagesData";
import { OtisMasterFooter } from "@/components/ui/OtisMasterFooter";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { MobileNavDrawer } from "@/components/ui/MobileNavDrawer";

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const content = lang === "fr" ? aboutData.fr : aboutData.en;

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "fr" : "en"));
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-otis-orange selection:text-white">
      {/* Top Floating Navigation HUD */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#050811]/90 backdrop-blur-md border-b border-white/10 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between gap-4">
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

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-wider text-slate-400">
              <Compass className="w-3.5 h-3.5 text-otis-orange animate-spin" style={{ animationDuration: "12s" }} />
              <span>45.4678° N, 73.6169° W | {lang === "fr" ? "HISTORIQUE ET VALEURS" : "STANDARDS & HISTORY"}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-slate-300">
            <Link href="/services" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Services" : "Services"}
            </Link>
            <Link href="/sectors" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Secteurs" : "Sectors"}
            </Link>
            <Link href="/compliance" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Conformité" : "Compliance"}
            </Link>
            <Link href="/about" className="text-otis-orange font-bold">
              {lang === "fr" ? "À Propos" : "About"}
            </Link>
            <Link href="/contact" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Contact & Audit" : "Contact & Audit"}
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Accessibility Toolbar */}
            <div className="hidden md:inline-flex shrink-0">
              <AccessibilityToolbar />
            </div>

            <button
              onClick={toggleLang}
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
              <span>(438) 935-9725</span>
            </a>

            {/* Direct Phone Dispatch (Tablet/Mobile: Clean Icon-Only Circle) */}
            <a
              href="tel:14389359725"
              title="Call (438) 935-9725"
              aria-label="Call (438) 935-9725"
              className="inline-flex xl:hidden items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-otis-greenBright hover:text-white shrink-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
            </a>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-otis-orange text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-otis-orangeLight transition-all shadow-lg shadow-otis-orange/20 shrink-0 whitespace-nowrap"
            >
              <span>{lang === "fr" ? "Devis" : "Audit"}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>

            <MobileNavDrawer
              lang={lang}
              onToggleLang={toggleLang}
            />
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={content.heroImage}
            alt="OTIS Operations Walkthrough"
            fill
            className="object-cover object-center brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/70 to-[#050811]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-otis-orange/10 border border-otis-orange/30 text-otis-orange text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-3xl leading-[1.1] mb-6">
            {content.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
            {content.subtitle}
          </p>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-light font-mono text-otis-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 border-b border-white/10 bg-[#070b16]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-mono uppercase tracking-widest text-otis-orange mb-3">
                {"//"} {content.narrativeHeading}
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-6">
                {lang === "fr" ? "L'entretien d'immeubles abordé comme un système" : "Janitorial maintenance approached as an engineered system"}
              </h2>
              <p className="text-base text-slate-300 font-light leading-relaxed mb-6">
                {content.narrative}
              </p>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-3 text-sm font-semibold text-white mb-1">
                  <Award className="w-5 h-5 text-otis-greenBright" />
                  <span>{lang === "fr" ? "Fondé et géré à Montréal" : "Founded and Operated in Montreal"}</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  2447 Avenue Madison, Montreal, QC H4B 2T5 • {lang === "fr" ? "Ligne directe:" : "Direct dispatch:"} (438) 935-9725
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/otis-facility-audit.jpg"
                  alt="OTIS Facility Inspection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#050811]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
                  <span className="text-otis-orange font-bold">MONTREAL FACILITY AUDIT:</span> Regular supervisor walk-throughs guarantee consistent standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Values */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-otis-orange mb-3">
              {"//"} {lang === "fr" ? "NOS ENGAGEMENTS OPÉRATIONNELS" : "CORE PRINCIPLES"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              {lang === "fr" ? "Ce qui nous distingue sur le terrain" : "Why facility managers partner with OTIS"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#070b16] border border-white/10 hover:border-otis-orange/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-otis-orange/10 border border-otis-orange/20 flex items-center justify-center text-xs font-mono font-bold text-otis-orange mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-b from-[#070b16] to-[#050811] text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            {lang === "fr" ? "Rencontrez notre équipe lors d'un audit de vos locaux" : "Meet our operations lead on-site"}
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            {lang === "fr"
              ? "Nous examinons vos espaces et rédigeons une proposition d'entretien conforme au Décret sous 24 heures."
              : "We inspect your facility and deliver an audit-ready, decree-compliant proposal within 24 hours."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-otis-orange text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-otis-orangeLight transition-all shadow-xl shadow-otis-orange/20"
            >
              <span>{lang === "fr" ? "Planifier la visite" : "Book On-Site Audit"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:14389359725"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-otis-greenBright" />
              <span>(438) 935-9725</span>
            </a>
          </div>
        </div>
      </section>

      {/* Exact Vercel Master Footer */}
      <OtisMasterFooter lang={lang} />
    </div>
  );
}
