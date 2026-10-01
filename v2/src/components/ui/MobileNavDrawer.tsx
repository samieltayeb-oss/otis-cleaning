"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  MapPin
} from "lucide-react";
import { AccessibilityToolbar } from "./AccessibilityToolbar";

interface MobileNavDrawerProps {
  lang: "en" | "fr";
  onToggleLang: () => void;
  onRequestQuote?: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  lang,
  onToggleLang,
  onRequestQuote,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Hamburger Trigger Button */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white transition-colors shrink-0"
      >
        {isOpen ? <X className="w-5 h-5 text-otis-orange" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Slide-Over Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Slide-Over Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-sm bg-[#060913] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out md:hidden overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <Link href="/" onClick={close} className="relative h-8 w-28">
            <Image
              src="/images/otis-logo.png"
              alt="OTIS Commercial Cleaning"
              fill
              className="object-contain object-left"
            />
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Controls Bar (Language & Accessibility) */}
        <div className="px-6 py-3 bg-white/[0.02] border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
          <AccessibilityToolbar />
          
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold tracking-wider text-slate-200 transition-colors shrink-0"
          >
            <span className={lang === "fr" ? "text-otis-orange font-black" : "text-slate-400"}>FR</span>
            <span className="text-slate-600">/</span>
            <span className={lang === "en" ? "text-otis-orange font-black" : "text-slate-400"}>EN</span>
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-sm">
          {/* Main Navigation Links */}
          <div className="space-y-1">
            <Link
              href="/"
              onClick={close}
              className="flex items-center justify-between py-2 text-slate-200 hover:text-otis-orange font-medium transition-colors"
            >
              <span>{lang === "fr" ? "Accueil" : "Home"}</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </Link>
            <Link
              href="/about"
              onClick={close}
              className="flex items-center justify-between py-2 text-slate-200 hover:text-otis-orange font-medium transition-colors"
            >
              <span>{lang === "fr" ? "À Propos & Équipe" : "Who We Are"}</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </Link>
            <Link
              href="/compliance"
              onClick={close}
              className="flex items-center justify-between py-2 text-slate-200 hover:text-otis-orange font-medium transition-colors"
            >
              <span>{lang === "fr" ? "Gouvernance & Décret" : "Compliance & Decree"}</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </Link>
            <Link
              href="/contact"
              onClick={close}
              className="flex items-center justify-between py-2 text-slate-200 hover:text-otis-orange font-medium transition-colors"
            >
              <span>{lang === "fr" ? "Nous Joindre & Audit" : "Contact & Audit"}</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </Link>
          </div>

          {/* Services Category */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                {lang === "fr" ? "SERVICES COMMERCIAUX" : "COMMERCIAL SERVICES"}
              </span>
              <Link href="/services" onClick={close} className="text-[11px] text-otis-orange hover:underline font-mono">
                {lang === "fr" ? "Voir tout →" : "View all →"}
              </Link>
            </div>
            <div className="space-y-1 text-xs text-slate-300">
              <Link href="/services/commercial-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Entretien Commercial" : "Commercial Cleaning"}
              </Link>
              <Link href="/services/office-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Entretien de Bureaux" : "Office Cleaning"}
              </Link>
              <Link href="/services/floor-maintenance" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Entretien des Planchers" : "Floor Maintenance"}
              </Link>
              <Link href="/services/consumables-restocking" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Gestion des Consommables" : "Consumables Restocking"}
              </Link>
              <Link href="/services/carpet-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Nettoyage de Tapis" : "Carpet Extraction"}
              </Link>
              <Link href="/services/post-renovation" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Après Construction" : "Post-Construction"}
              </Link>
              <Link href="/services/window-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Vitres Intérieures" : "Interior Window Care"}
              </Link>
            </div>
          </div>

          {/* Sectors Category */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                {lang === "fr" ? "SECTEURS CLÉS" : "TARGET SECTORS"}
              </span>
              <Link href="/sectors" onClick={close} className="text-[11px] text-otis-orange hover:underline font-mono">
                {lang === "fr" ? "Voir tout →" : "View all →"}
              </Link>
            </div>
            <div className="space-y-1 text-xs text-slate-300">
              <Link href="/sectors/clinic-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Cliniques Médicales" : "Medical Clinics"}
              </Link>
              <Link href="/sectors/retail-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Commerces & Boutiques" : "Retail & Shops"}
              </Link>
              <Link href="/sectors/condo-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Espaces Communs Copropriété" : "Condo Common Areas"}
              </Link>
              <Link href="/sectors/school-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Écoles & Établissements" : "Schools & Daycares"}
              </Link>
              <Link href="/sectors/event-cleaning" onClick={close} className="block py-1.5 hover:text-white transition-colors">
                • {lang === "fr" ? "Salles d'Événements" : "Event Venues"}
              </Link>
            </div>
          </div>

          {/* Direct Support & Verification */}
          <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs font-mono text-slate-400">
            <a
              href="tel:14389359725"
              className="flex items-center gap-2.5 text-white hover:text-otis-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-otis-greenBright shrink-0" />
              <span>+1 (438) 935-9725</span>
            </a>
            <a
              href="mailto:info@otiscc.ca"
              className="flex items-center gap-2.5 text-slate-300 hover:text-otis-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-otis-orange shrink-0" />
              <span>info@otiscc.ca</span>
            </a>
            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Montreal, QC H4B 2T5</span>
            </div>
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-6 border-t border-white/10 bg-[#04060d] shrink-0">
          <Link
            href="/contact"
            onClick={() => {
              close();
              if (onRequestQuote) onRequestQuote();
            }}
            className="w-full py-3.5 rounded-xl bg-otis-orange hover:bg-otis-orangeHover text-white text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-otis-orange/20"
          >
            <span>{lang === "fr" ? "Demander une Soumission" : "Book Facility Audit"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};
