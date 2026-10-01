"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Check
} from "lucide-react";
import { contactData } from "@/data/pagesData";
import { OtisMasterFooter } from "@/components/ui/OtisMasterFooter";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { MobileNavDrawer } from "@/components/ui/MobileNavDrawer";

export default function ContactPage() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "commercial-cleaning",
    sqft: "",
    frequency: "daily",
    message: ""
  });

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "fr" : "en"));
  };

  const content = lang === "fr" ? contactData.fr : contactData.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <span>45.4678° N, 73.6169° W | {lang === "fr" ? "RÉPARTITION MONTRÉAL" : "MONTREAL DISPATCH"}</span>
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
            <Link href="/about" className="hover:text-otis-orange transition-colors">
              {lang === "fr" ? "À Propos" : "About"}
            </Link>
            <Link href="/contact" className="text-otis-orange font-bold">
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

            <MobileNavDrawer
              lang={lang}
              onToggleLang={toggleLang}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info & Territory */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-otis-orange/10 border border-otis-orange/30 text-otis-orange text-xs font-mono uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{content.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-xl leading-[1.1] mb-6">
                {content.title}
              </h1>

              <p className="text-base text-slate-300 font-light leading-relaxed mb-10">
                {content.subtitle}
              </p>

              {/* Direct Coordinates Details */}
              <div className="space-y-6 mb-10">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-otis-orange/10 border border-otis-orange/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-otis-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      {lang === "fr" ? "Ligne de Répartition Directe" : "Direct Commercial Dispatch"}
                    </div>
                    <a href="tel:14389359725" className="text-lg font-mono font-bold text-white hover:text-otis-orange transition-colors">
                      {content.dispatchPhone}
                    </a>
                    <p className="text-[11px] font-mono text-slate-400 mt-1">
                      {lang === "fr" ? "Interventions d'urgence 24/7 pour nos clients sous contrat" : "24/7 Emergency dispatch for active contracted properties"}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-otis-orange/10 border border-otis-orange/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-otis-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      {lang === "fr" ? "Bureau Administratif & Dépôt" : "Operational Headquarters"}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {content.address}
                    </div>
                    <p className="text-[11px] font-mono text-slate-400 mt-1">
                      Grand Montréal, Québec, Canada
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-otis-orange/10 border border-otis-orange/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-otis-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      {lang === "fr" ? "Heures d'Opération" : "Operating Hours"}
                    </div>
                    <div className="text-xs font-mono text-slate-300">
                      {content.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Clusters Map Badges */}
              <div className="p-6 rounded-2xl bg-[#070b16] border border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  {lang === "fr" ? "Zones d'Intervention Rapide" : "Montreal Route Clusters"}
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Downtown / Centre-Ville</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Old Montreal / Vieux-Port</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Westmount & NDG</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Mile End / Plateau</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Ville Saint-Laurent</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">West Island (Pointe-Claire, DDO)</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Laval & Rive-Sud</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Proposal & Walkthrough Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#070b16] border border-white/10 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-light text-white mb-2">
                    {lang === "fr" ? "Formulaire de Visite Technique" : "Commercial Walkthrough Specification"}
                  </h2>
                  <p className="text-xs font-mono text-slate-400">
                    {lang === "fr"
                      ? "Remplissez ce formulaire pour recevoir un devis conforme au Décret sous 24 heures."
                      : "Complete this specification to receive an audit-ready, decree-compliant quote within 24 hours."}
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-otis-greenBright/10 border border-otis-greenBright/30 text-center animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-otis-greenBright/20 text-otis-greenBright flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-mono font-bold text-white mb-2">
                      {lang === "fr" ? "Visite Technique Programmée" : "Walkthrough Booking Received"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                      {lang === "fr"
                        ? "Merci! Un superviseur des opérations d'OTIS examinera vos exigences et vous contactera dans les 2 heures ouvrables."
                        : "Thank you! An OTIS operations supervisor will review your facility parameters and contact you within 2 business hours."}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Phone className="w-3.5 h-3.5 text-otis-orange" />
                      <span>(438) 935-9725</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                          {lang === "fr" ? "Nom & Titre *" : "Contact Name & Title *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Marc Tremblay, Property Mgr"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                          {lang === "fr" ? "Nom de l'Entreprise / Immeuble *" : "Company / Facility Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={e => setForm({ ...form, company: e.target.value })}
                          placeholder="e.g. Complexe Desjardins"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                          {lang === "fr" ? "Courriel Professionnel *" : "Corporate Email *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="facility@company.ca"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                          {lang === "fr" ? "Numéro de Téléphone *" : "Phone Number *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="(514) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        {lang === "fr" ? "Adresse des Locaux à Nettoyer" : "Facility Address (Montreal Area)"}
                      </label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={e => setForm({ ...form, address: e.target.value })}
                        placeholder="e.g. 1000 Rue De La Gauchetière O, Montréal"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                          {lang === "fr" ? "Service Requis" : "Service Category"}
                        </label>
                        <select
                          value={form.serviceType}
                          onChange={e => setForm({ ...form, serviceType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                        >
                          <option value="commercial-cleaning">Commercial Janitorial</option>
                          <option value="office-cleaning">Office Cleaning</option>
                          <option value="floor-maintenance">Floor Auto-Scrub / Wax</option>
                          <option value="carpet-cleaning">Carpet Extraction</option>
                          <option value="clinic-cleaning">Clinic / Healthcare</option>
                          <option value="retail-cleaning">Retail Boutique</option>
                          <option value="condo-cleaning">Condo Common Area</option>
                          <option value="post-renovation">Post-Renovation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                          {lang === "fr" ? "Superficie (pi²)" : "Square Footage"}
                        </label>
                        <select
                          value={form.sqft}
                          onChange={e => setForm({ ...form, sqft: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                        >
                          <option value="">Select sq ft</option>
                          <option value="under-3000">{"< 3,000 sq ft"}</option>
                          <option value="3000-7500">3,000 - 7,500 sq ft</option>
                          <option value="7500-15000">7,500 - 15,000 sq ft</option>
                          <option value="15000-30000">15,000 - 30,000 sq ft</option>
                          <option value="over-30000">{"> 30,000 sq ft"}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                          {lang === "fr" ? "Fréquence" : "Frequency"}
                        </label>
                        <select
                          value={form.frequency}
                          onChange={e => setForm({ ...form, frequency: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                        >
                          <option value="daily">5x - 7x Days / Week</option>
                          <option value="3x-weekly">3x Days / Week</option>
                          <option value="2x-weekly">2x Days / Week</option>
                          <option value="weekly">1x Day / Week</option>
                          <option value="periodic">Periodic / One-Time</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        {lang === "fr" ? "Notes d'Accès & Contraintes" : "Access Hours & Special Instructions"}
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder={
                          lang === "fr"
                            ? "Précisez vos heures d'accès, types de sols particuliers, date de début souhaitée..."
                            : "Specify preferred shift timing (after-hours/evening), floor types, anticipated start date..."
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-otis-orange transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-otis-orange text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-otis-orangeLight transition-all shadow-xl shadow-otis-orange/20 flex items-center justify-center gap-2 mt-4"
                    >
                      <span>{lang === "fr" ? "Planifier la Visite Technique" : "Book Facility Walkthrough"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-otis-greenBright" />
                        <span>Quebec CPEEP Decree Parity</span>
                      </span>
                      <span>$2,000,000 Liability Insured</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Exact Vercel Master Footer */}
      <OtisMasterFooter lang={lang} />
    </div>
  );
}
