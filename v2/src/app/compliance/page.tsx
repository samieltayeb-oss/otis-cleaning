"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileCheck2, 
  AlertTriangle, 
  Phone, 
  ArrowRight, 
  Compass, 
  Check, 
  Lock
} from "lucide-react";
import { complianceData } from "@/data/pagesData";
import { OtisMasterFooter } from "@/components/ui/OtisMasterFooter";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { MobileNavDrawer } from "@/components/ui/MobileNavDrawer";

export default function CompliancePage() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [requestedPacket, setRequestedPacket] = useState(false);
  const [email, setEmail] = useState("");

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "fr" : "en"));
  };

  const content = lang === "fr" ? complianceData.fr : complianceData.en;

  const handlePacketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestedPacket(true);
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
              <span>45.4678° N, 73.6169° W | {lang === "fr" ? "CONFORMITÉ QUÉBEC" : "QUEBEC COMPLIANCE"}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-slate-300">
            <Link href="/services" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Services" : "Services"}
            </Link>
            <Link href="/sectors" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Secteurs" : "Sectors"}
            </Link>
            <Link href="/compliance" className="text-otis-orange font-bold">
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
            src={content.heroImage}
            alt="OTIS Compliance & Governance"
            fill
            className="object-cover object-center brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/70 to-[#050811]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-otis-greenBright/10 border border-otis-greenBright/30 text-otis-greenBright text-xs font-mono uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{content.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-3xl leading-[1.1] mb-6">
            {content.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
            {content.subtitle}
          </p>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 max-w-3xl mb-8">
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {content.overview}
            </p>
          </div>

          {/* Legal Joint Liability Alert */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 max-w-3xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200/90 leading-relaxed font-light">
              {lang === "fr"
                ? "Avertissement juridique: Au Québec, en vertu de l'article 39 de la Loi sur les décrets de convention collective, le propriétaire ou locataire principal peut être tenu solidairement responsable des salaires impayés si le sous-traitant d'entretien enfreint le Décret CPEEP."
                : "Legal Note: Under Section 39 of the Quebec Act respecting collective agreement decrees, building owners and prime tenants may be held jointly and solidarily liable for unpaid decree wages if an unregulated cleaning contractor underbids statutory minimums."}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Governance */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-otis-orange mb-3">
              {"//"} {lang === "fr" ? "LES 4 PILIERS DE NOTRE GOUVERNANCE" : "THE 4 GOVERNANCE PILLARS"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              {lang === "fr" ? "Protection absolue de votre responsabilité" : "Zero-compromise operational compliance"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#070b16] border border-white/10 hover:border-otis-orange/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-otis-orange/10 border border-otis-orange/20 flex items-center justify-center text-xs font-mono font-bold text-otis-orange mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-otis-orange mb-4">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2 mb-8">
                    {pillar.bulletPoints.map((bp, bidx) => (
                      <div key={bidx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-otis-greenBright shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <Lock className="w-3 h-3 text-otis-greenBright" />
                  <span>Audit-Verified by Management</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Packet Instant Request */}
      <section className="py-24 bg-gradient-to-b from-[#070b16] to-[#050811] text-center border-b border-white/10">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-otis-greenBright/10 border border-otis-greenBright/30 text-otis-greenBright text-xs font-mono uppercase tracking-widest mb-4">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "DOSSIER D'ATTESTATIONS OFFICIEL" : "OFFICIAL PROCUREMENT DOSSIER"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            {content.auditHeading}
          </h2>
          <p className="text-sm text-slate-300 font-light mb-8 leading-relaxed">
            {content.auditDesc}
          </p>

          {requestedPacket ? (
            <div className="p-8 rounded-2xl bg-otis-greenBright/10 border border-otis-greenBright/30 text-center animate-fade-in">
              <Check className="w-8 h-8 text-otis-greenBright mx-auto mb-3" />
              <h3 className="text-base font-mono font-bold text-white mb-2">
                {lang === "fr" ? "Dossier en Cours d'Acheminement" : "Compliance Packet En Route"}
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                {lang === "fr"
                  ? `Notre bureau de conformité a expédié le dossier à l'adresse ${email}.`
                  : `Our compliance department has dispatched the full PDF packet to ${email}.`}
              </p>
              <span className="text-[11px] font-mono text-slate-500">Attestations CPEEP, CNESST &amp; Police d&apos;Assurance 2 M$</span>
            </div>
          ) : (
            <form onSubmit={handlePacketSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={lang === "fr" ? "Votre courriel d'entreprise..." : "corporate.email@company.ca"}
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-otis-orange text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-otis-orangeLight transition-all shadow-xl shadow-otis-orange/20 shrink-0 flex items-center justify-center gap-2"
              >
                <span>{content.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Exact Vercel Master Footer */}
      <OtisMasterFooter lang={lang} />
    </div>
  );
}
