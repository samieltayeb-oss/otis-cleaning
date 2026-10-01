"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Phone, 
  ArrowRight, 
  ChevronDown, 
  Compass, 
  Sparkles,
  MapPin,
  Check
} from "lucide-react";
import { SubpageData } from "@/data/pagesData";
import { OtisMasterFooter } from "@/components/ui/OtisMasterFooter";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { MobileNavDrawer } from "@/components/ui/MobileNavDrawer";

interface SubpageDetailProps {
  data: SubpageData;
  relatedPages?: { slug: string; title: string; href: string; image: string }[];
}

export const SubpageDetail: React.FC<SubpageDetailProps> = ({ data, relatedPages = [] }) => {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    facilityType: "",
    sqft: "",
    notes: ""
  });

  const content = lang === "fr" ? data.fr : data.en;

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "fr" : "en"));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-otis-orange selection:text-white">
      {/* Top Floating Navigation HUD */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#050811]/90 backdrop-blur-md border-b border-white/10 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between gap-4">
          {/* Logo & Live Coordinates */}
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
              <span>45.4678° N, 73.6169° W | {lang === "fr" ? "MONTRÉAL EN SERVICE" : "MONTREAL ACTIVE"}</span>
            </div>
          </div>

          {/* Navigation Links */}
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
            <Link href="/about" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "À Propos" : "About"}
            </Link>
            <Link href="/contact" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Contact & Audit" : "Contact & Audit"}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Accessibility Toolbar */}
            <div className="hidden md:inline-flex shrink-0">
              <AccessibilityToolbar />
            </div>

            {/* Language Switcher */}
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

            {/* CTA Button (Desktop / Tablet) */}
            <a
              href="#proposal-form"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-otis-orange text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-otis-orangeLight transition-all shadow-lg shadow-otis-orange/20 shrink-0 whitespace-nowrap"
            >
              <span>{lang === "fr" ? "Devis" : "Audit"}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>

            {/* Mobile Drawer Navigation (Hamburger menu for mobile) */}
            <MobileNavDrawer
              lang={lang}
              onToggleLang={toggleLang}
            />
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden border-b border-white/10">
        {/* Background Image with Left-Third Safe Zone Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={content.heroImage}
            alt={content.title}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay engineered for left-third typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050811] via-[#050811]/85 to-[#050811]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>
            <span>/</span>
            <Link 
              href={data.category === "service" ? "/services" : "/sectors"}
              className="hover:text-otis-orange transition-colors"
            >
              {data.category === "service" 
                ? (lang === "fr" ? "Services" : "Services") 
                : (lang === "fr" ? "Secteurs" : "Sectors")}
            </Link>
            <span>/</span>
            <span className="text-otis-orange truncate max-w-xs">{content.title}</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-otis-orange/10 border border-otis-orange/30 text-otis-orange text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-3xl leading-[1.1] mb-6">
            {content.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
            {content.subtitle}
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#proposal-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-otis-orange text-white text-sm font-mono font-bold uppercase tracking-wider hover:bg-otis-orangeLight transition-all shadow-xl shadow-otis-orange/30 text-center"
            >
              <span>{lang === "fr" ? "Réserver un audit sur place" : "Schedule Facility Walkthrough"}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="tel:14389359725"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-slate-200 transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-otis-greenBright shrink-0" />
              <span>(438) 935-9725</span>
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-slate-400 pt-2 sm:pt-0 sm:pl-2">
              <ShieldCheck className="w-4 h-4 text-otis-greenBright shrink-0" />
              <span>{lang === "fr" ? "Conforme Décret CPEEP • Assuré 2 M$" : "CPEEP Decree Parity • $2M Insured"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Overview & Guarantees */}
      <section className="py-20 border-b border-white/10 bg-[#070b16]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono uppercase tracking-widest text-otis-orange mb-3">
                {"//"} {lang === "fr" ? "MÉTHODOLOGIE D'ENTRETIEN" : "OPERATIONAL PROTOCOL"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-6">
                {lang === "fr" ? "Rigueur d'exécution & standards institutionnels" : "Engineered execution and institutional discipline"}
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-light mb-8">
                {content.overview}
              </p>

              {/* 24-Hour Cure Guarantee Callout Box */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-otis-orange/10 border border-otis-orange/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-otis-orange" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white mb-1">
                      {lang === "fr" ? "Garantie Correctrice 24 Heures" : "OTIS 24-Hour Cure Guarantee"}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang === "fr"
                        ? "Tout manquement signalé fait l'objet d'un déplacement immédiat d'un superviseur sur vos lieux dans les 24 heures pour rectifier la situation sans frais supplémentaires."
                        : "Every inspection deficiency is backed by our direct supervisor dispatch. Report any variance and a senior team lead will rectify it on-site within 24 hours at zero charge."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <FileText className="w-4 h-4 text-otis-orange" />
                <span>{content.specsHeading}</span>
              </div>
              <div className="space-y-4">
                {content.specs.map((spec, i) => (
                  <div key={i} className="pb-3 border-b border-white/5 flex flex-col gap-1">
                    <span className="text-xs font-mono uppercase text-slate-400">{spec.label}</span>
                    <span className="text-sm font-medium text-slate-100">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-otis-orange" />
                  <span>Grand Montréal</span>
                </span>
                <span className="text-otis-greenBright font-bold">CNESST Good Standing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Operating Scope (Detailed Grid) */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-otis-orange mb-3">
              {"//"} {lang === "fr" ? "CAHIER DES CHARGES DÉTAILLÉ" : "SYSTEMATIC DELIVERABLES"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
              {content.scopeHeading}
            </h2>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              {lang === "fr"
                ? "Chaque intervention respecte des points de contrôle stricts consignés dans notre journal d'entretien numérique."
                : "Every shift follows our structured quality protocol logged into our encrypted operational ledger."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.scopeItems.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-otis-orange/40 hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-otis-orange/10 border border-otis-orange/20 flex items-center justify-center text-xs font-mono font-bold text-otis-orange">
                    0{idx + 1}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-otis-greenBright opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Accordion) */}
      <section className="py-20 border-b border-white/10 bg-[#070b16]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-otis-orange mb-3">
              {"//"} {lang === "fr" ? "QUESTIONS FRÉQUENTES" : "FREQUENTLY ASKED QUESTIONS"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              {lang === "fr" ? "Tout ce que vous devez savoir" : "Commercial Clarifications & Protocols"}
            </h2>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm sm:text-base font-medium text-slate-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-otis-orange shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages Cross-Link Hub */}
      {relatedPages.length > 0 && (
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                  {"//"} {lang === "fr" ? "SERVICES COMPLÉMENTAIRES" : "RELATED CAPABILITIES"}
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white">
                  {lang === "fr" ? "Explorez nos expertises complémentaires" : "Complementary Facilities Operations"}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.slice(0, 3).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#070b16] hover:border-otis-orange/50 transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-white group-hover:text-otis-orange transition-colors">
                      {item.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-otis-orange group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interactive Facility Proposal Booking Section */}
      <section id="proposal-form" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#070b16] to-[#050811]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-otis-orange/10 border border-otis-orange/20 text-otis-orange text-xs font-mono uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === "fr" ? "PROPOSITION SOUS 24 HEURES" : "24-HOUR DETAILED PROPOSAL"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white mb-3">
                {lang === "fr" ? "Réserver une Visite Technique sur Place" : "Request an On-Site Facility Audit"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                {lang === "fr"
                  ? "Nous nous déplaçons directement à vos locaux pour évaluer les superficies, les types de sols et vos contraintes horaires."
                  : "We conduct an in-person walkthrough of your commercial premises in Greater Montreal to establish an audit-ready specification."}
              </p>
            </div>

            {quoteSuccess ? (
              <div className="p-8 rounded-2xl bg-otis-greenBright/10 border border-otis-greenBright/30 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-otis-greenBright/20 text-otis-greenBright flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-mono font-bold text-white mb-2">
                  {lang === "fr" ? "Demande d'Audit Enregistrée" : "Facility Audit Request Confirmed"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                  {lang === "fr"
                    ? "Notre équipe d'opérations montréalaises a reçu vos détails. Un superviseur vous contactera dans les 2 heures ouvrables."
                    : "Our Montreal operations team has received your submission. A supervisor will reach out within 2 business hours to coordinate access."}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-otis-orange" />
                  <span>{lang === "fr" ? "Ligne directe urgente:" : "Urgent dispatch line:"} (438) 935-9725</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {lang === "fr" ? "Nom complet *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder={lang === "fr" ? "ex: Marc Tremblay" : "e.g. David Vance"}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {lang === "fr" ? "Entreprise / Immeuble *" : "Company / Facility *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={e => setFormState({ ...formState, company: e.target.value })}
                      placeholder={lang === "fr" ? "ex: Tour Deloitte / Clinique Santé" : "e.g. Place Ville Marie Suite 1400"}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {lang === "fr" ? "Courriel corporatif *" : "Corporate Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="manager@company.ca"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {lang === "fr" ? "Téléphone direct *" : "Direct Phone *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="(514) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {lang === "fr" ? "Superficie approximative (pi²)" : "Approx. Area (sq ft)"}
                    </label>
                    <select
                      value={formState.sqft}
                      onChange={e => setFormState({ ...formState, sqft: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-base sm:text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                    >
                      <option value="">{lang === "fr" ? "Sélectionner la superficie" : "Select square footage"}</option>
                      <option value="under-3000">{"< 3,000 sq ft"}</option>
                      <option value="3000-10000">3,000 - 10,000 sq ft</option>
                      <option value="10000-25000">10,000 - 25,000 sq ft</option>
                      <option value="over-25000">{"> 25,000 sq ft"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {lang === "fr" ? "Fréquence souhaitée" : "Desired Cleaning Cadence"}
                    </label>
                    <select
                      value={formState.facilityType}
                      onChange={e => setFormState({ ...formState, facilityType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-base sm:text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                    >
                      <option value="">{lang === "fr" ? "Sélectionner la fréquence" : "Select frequency"}</option>
                      <option value="daily">5x - 7x / week (Daily Maintenance)</option>
                      <option value="biweekly">2x - 3x / week (Standard Commercial)</option>
                      <option value="weekly">1x / week (Light Commercial)</option>
                      <option value="one-time">One-Time Deep Clean / Post-Reno</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    {lang === "fr" ? "Exigences particulières ou remarques" : "Specific Requirements or Security Access Notes"}
                  </label>
                  <textarea
                    rows={3}
                    value={formState.notes}
                    onChange={e => setFormState({ ...formState, notes: e.target.value })}
                    placeholder={
                      lang === "fr"
                        ? "Horaires d'accès souhaités, clés/puces, traitement particulier des sols..."
                        : "Keycard access, preferred after-hours entry, sensitive flooring..."
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-base sm:text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-otis-orange text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-otis-orangeLight transition-all shadow-xl shadow-otis-orange/20 flex items-center justify-center gap-2 mt-4"
                >
                  <span>{lang === "fr" ? "Transmettre la demande d'audit" : "Request Free Facility Audit"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] font-mono text-center text-slate-500 mt-2">
                  {lang === "fr"
                    ? "Réponse garantie sous 2 heures • Proposition conforme au Décret CPEEP • Zéro engagement"
                    : "Guaranteed 2-hour response • Decree-compliant pricing • Zero obligation"}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Exact Vercel Master Footer */}
      <OtisMasterFooter lang={lang} />
    </div>
  );
};
