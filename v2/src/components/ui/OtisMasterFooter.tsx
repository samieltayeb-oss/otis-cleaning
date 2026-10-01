"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

interface OtisMasterFooterProps {
  lang?: "en" | "fr";
}

export const OtisMasterFooter: React.FC<OtisMasterFooterProps> = ({ lang = "en" }) => {
  return (
    <footer className="w-full bg-[#050811] border-t border-white/10 text-slate-300 pt-16 pb-12 px-6 sm:px-12 md:px-20 z-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main 5 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block relative h-10 w-32 mb-4">
              <Image
                src="/images/otis-logo.png"
                alt="OTIS Commercial Cleaning"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mb-6 font-normal">
              {lang === "fr"
                ? "Entretien ménager professionnel pour entreprises et édifices à travers Montréal depuis 2020."
                : "Professional cleaning for businesses and homes across Montreal since 2020."}
            </p>
            <div className="space-y-2 text-xs font-mono">
              <a
                href="tel:+14389359725"
                className="flex items-center gap-2 text-[#ff4b72] hover:text-white transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+1 (438) 935-9725</span>
              </a>
              <a
                href="mailto:info@otiscc.ca"
                className="flex items-center gap-2 text-slate-300 hover:text-otis-orange transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-otis-orange" />
                <span>info@otiscc.ca</span>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              {lang === "fr" ? "ENTREPRISE" : "COMPANY"}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/" className="hover:text-otis-orange hover:underline transition-colors">
                  {lang === "fr" ? "Accueil" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-otis-orange hover:underline transition-colors">
                  {lang === "fr" ? "Qui Sommes-Nous" : "Who We Are"}
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-otis-orange hover:underline transition-colors">
                  {lang === "fr" ? "Réalisations" : "Gallery"}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-otis-orange hover:underline transition-colors">
                  {lang === "fr" ? "Tarification" : "Pricing"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-otis-orange hover:underline transition-colors">
                  {lang === "fr" ? "Nous Joindre" : "Contact Us"}
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="text-otis-orange hover:text-white font-semibold transition-colors flex items-center gap-1"
                >
                  <span>{lang === "fr" ? "Soumission Gratuite →" : "Get a Free Quote →"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial Sectors */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              {lang === "fr" ? "SECTEURS COMMERCIAUX" : "COMMERCIAL SECTORS"}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/sectors/clinic-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Cliniques Médicales" : "Medical Clinics"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/retail-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Commerces & Boutiques" : "Retail & Shops"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/condo-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Espaces Communs Copropriété" : "Condo Common Areas"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/school-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Écoles & Garderies" : "Schools & Daycares"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/event-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Salles d'Événements" : "Event Venues"}
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Grand Ménage Commercial" : "Deep Clean"}
                </Link>
              </li>
              <li>
                <Link href="/services/post-renovation" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Entretien de Transition" : "Move In / Move Out"}
                </Link>
              </li>
              <li>
                <Link href="/services/post-renovation" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Après Construction" : "Post-Construction"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Commercial */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              COMMERCIAL
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/services/commercial-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Entretien Commercial" : "Commercial Cleaning"}
                </Link>
              </li>
              <li>
                <Link href="/services/office-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Entretien de Bureaux" : "Office Cleaning"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/clinic-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Cliniques Médicales" : "Medical Clinics"}
                </Link>
              </li>
              <li>
                <Link href="/services/floor-maintenance" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Entretien des Planchers" : "Floor Maintenance"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/retail-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Commerces de Détail" : "Retail & Stores"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/condo-cleaning" className="underline hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Espaces Communs Copropriété" : "Condo Common Areas"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Certifications & Address */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              {lang === "fr" ? "CERTIFICATIONS" : "CERTIFICATIONS"}
            </div>
            <div className="space-y-1.5 text-xs text-slate-400 font-normal leading-relaxed mb-4">
              <div>
                <Link href="/compliance" className="hover:text-white transition-colors">
                  CPEEP Decree Compliant &amp; Insured $2M
                </Link>
              </div>
              <div>Fully Insured &amp; Bonded</div>
              <div>Conforme CNESST</div>
              <div className="flex items-center gap-1 text-slate-300">
                <span>Proudly Canadian</span>
                <span>🍁</span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-xs text-slate-400 leading-relaxed font-normal flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff4b72] shrink-0 mt-0.5" />
              <div>
                2447 Ave Madison,<br />
                Montreal H4B2T5, QC
              </div>
            </div>
          </div>
        </div>

        {/* Internal Navigation Section */}
        <div className="py-8 border-b border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
            INTERNAL
          </div>
          <div className="flex items-center gap-6 text-xs">
            <Link
              href="/compliance"
              className="text-slate-300 underline hover:text-otis-orange transition-colors"
            >
              Executive Blueprint
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 underline hover:text-otis-orange transition-colors"
            >
              Command Center
            </Link>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div className="sm:flex-1" />
          <div className="text-center text-slate-400">
            © {new Date().getFullYear()} OTIS Maintenance. All rights reserved.
          </div>
          <div className="sm:flex-1 text-center sm:text-right">
            <span>Built by </span>
            <a
              href="https://nexorayyc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              NEXORA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
