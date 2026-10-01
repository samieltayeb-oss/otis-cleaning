"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  Compass, 
  ChevronRight,
  Building2
} from "lucide-react";
import { sectorsData } from "@/data/pagesData";
import { OtisMasterFooter } from "@/components/ui/OtisMasterFooter";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { MobileNavDrawer } from "@/components/ui/MobileNavDrawer";

export default function SectorsHubPage() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const sectorsList = Object.values(sectorsData);

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "fr" : "en"));
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-otis-orange selection:text-white">
      {/* Top Floating Navigation HUD */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#050811]/90 backdrop-blur-md border-b border-white/10 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-4">
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
              <span>45.4678° N, 73.6169° W | {lang === "fr" ? "SECTEURS DESSERVIS" : "SECTORS SERVED"}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-slate-300">
            <Link href="/services" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Services" : "Services"}
            </Link>
            <Link href="/sectors" className="text-otis-orange font-bold">
              {lang === "fr" ? "Secteurs" : "Sectors"}
            </Link>
            <Link href="/compliance" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Conformité" : "Compliance"}
            </Link>
            <Link href="/about" className="hover:text-otis-orange transition-colors">
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
            src="/images/otis-hero-about.jpg"
            alt="OTIS Commercial Sectors"
            fill
            className="object-cover object-center brightness-[0.22]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/70 to-[#050811]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-otis-orange/10 border border-otis-orange/30 text-otis-orange text-xs font-mono uppercase tracking-widest mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "SECTEURS D'ACTIVITÉ" : "TARGET COMMERCIAL SECTORS"}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white max-w-3xl leading-[1.1] mb-6">
            {lang === "fr"
              ? "Des protocoles adaptés aux exigences de votre industrie."
              : "Tailored Janitorial Protocols for High-Stakes Environments."}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
            {lang === "fr"
              ? "Chaque milieu exige une rigueur distincte: asepsie médicale en clinique, planchers haute brillance en boutique, respect de la quiétude en copropriété ou désinfection certifiée en milieu scolaire."
              : "Every commercial facility has unique operational constraints. We adapt frequency, chemical chemistry, and keyholder security to your exact facility classification."}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-otis-greenBright" />
              <span>Montreal Healthcare & Clinic Protocols</span>
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-otis-greenBright" />
              <span>Condominium Syndicate Reporting</span>
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-otis-greenBright" />
              <span>Overnight Event Turnarounds</span>
            </span>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsList.map((sector, idx) => {
              const data = lang === "fr" ? sector.fr : sector.en;
              return (
                <article
                  key={sector.slug}
                  className="rounded-3xl border border-white/10 bg-[#070b16] overflow-hidden flex flex-col hover:border-otis-orange/50 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-otis-orange/10"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={data.heroImage}
                      alt={data.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-[#070b16]/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#050811]/80 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-otis-orange font-bold">
                        0{idx + 1} • {data.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-white group-hover:text-otis-orange transition-colors mb-3">
                        {data.title}
                      </h2>
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-6 line-clamp-3">
                        {data.subtitle}
                      </p>

                      <div className="space-y-2 mb-8">
                        {data.scopeItems.slice(0, 3).map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-otis-greenBright shrink-0 mt-0.5" />
                            <span className="truncate">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={`/sectors/${sector.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-otis-orange group-hover:text-white transition-colors"
                      >
                        <span>{lang === "fr" ? "Consulter le secteur" : "View Sector Standards"}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <span className="text-[11px] font-mono text-slate-500">
                        {sector.slug}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sector Audit CTA */}
      <section className="py-20 bg-gradient-to-b from-[#070b16] to-[#050811] text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-xs font-mono uppercase tracking-widest text-otis-orange mb-3">
            {"//"} {lang === "fr" ? "AUDIT SPÉCIFIQUE" : "FACILITY WALKTHROUGH"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            {lang === "fr" ? "Planifiez un audit de vos installations" : "Schedule a facility walkthrough for your sector"}
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            {lang === "fr"
              ? "Nos directeurs d'opérations inspectent vos locaux et définissent un cahier des charges rigoureusement adapté à vos normes sectorielles."
              : "Our operations leads inspect your premises and build an audit-ready maintenance specification matched to your industry benchmarks."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-otis-orange text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-otis-orangeLight transition-all shadow-xl shadow-otis-orange/20"
            >
              <span>{lang === "fr" ? "Demander une visite" : "Book Facility Walkthrough"}</span>
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
