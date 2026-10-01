"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

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
                ? "Entretien commercial et maintenance d'installations à travers le Grand Montréal. Conforme au Décret CPEEP et assuré 2 M$."
                : "Enterprise commercial janitorial, floor restoration, and facility maintenance across Greater Montreal. Decree-compliant and $2M insured."}
            </p>
            <div className="space-y-2 text-xs font-mono">
              <a
                href="tel:14389359725"
                className="flex items-center gap-2 text-otis-greenBright hover:text-white transition-colors font-medium"
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

          {/* Column 2: Company Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              {lang === "fr" ? "ENTREPRISE" : "COMPANY"}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Accueil" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "À Propos & Équipe" : "Who We Are"}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Nos Services" : "Cleaning Services"}
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Secteurs d'Activité" : "Commercial Sectors"}
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Conformité & Décret" : "Compliance & Decree"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Nous Joindre" : "Contact & Audit"}
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="text-otis-orange hover:text-white font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{lang === "fr" ? "Demander un Devis →" : "Book Facility Walkthrough →"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial Services (All 7 Verified Verticals) */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              {lang === "fr" ? "SERVICES COMMERCIAUX" : "CLEANING CAPABILITIES"}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/services/commercial-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Entretien Commercial Régulier" : "Commercial Janitorial"}
                </Link>
              </li>
              <li>
                <Link href="/services/office-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Entretien de Bureaux" : "Corporate Office Cleaning"}
                </Link>
              </li>
              <li>
                <Link href="/services/floor-maintenance" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Décapage & Cirage de Sols" : "Floor Strip & Wax"}
                </Link>
              </li>
              <li>
                <Link href="/services/consumables-restocking" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Gestion des Consommables" : "Consumables Restocking"}
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Nettoyage Tapis par Extraction" : "Commercial Carpet Extraction"}
                </Link>
              </li>
              <li>
                <Link href="/services/post-renovation" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Ménage Après Construction" : "Post-Construction Turnover"}
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Lavage de Vitres Intérieures" : "Interior Window Care"}
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="text-otis-orange hover:text-white font-mono text-[11px] transition-colors">
                  {lang === "fr" ? "Voir les 7 protocoles →" : "View all 7 protocols →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Commercial Sectors (All 5 Target Sectors) */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              {lang === "fr" ? "SECTEURS D'ACTIVITÉ" : "TARGET SECTORS"}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/sectors/clinic-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Cliniques Médicales & Dentaires" : "Medical & Dental Clinics"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/retail-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Commerces & Boutiques" : "Retail Boutiques & Showrooms"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/condo-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Espaces Communs Copropriété" : "Condo Common Elements"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/school-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Écoles & Garderies" : "Schools & Educational Facilities"}
                </Link>
              </li>
              <li>
                <Link href="/sectors/event-cleaning" className="hover:text-otis-orange transition-colors">
                  {lang === "fr" ? "Salles d'Événements" : "Commercial Event Venues"}
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/sectors" className="text-otis-orange hover:text-white font-mono text-[11px] transition-colors">
                  {lang === "fr" ? "Voir tous les secteurs →" : "View all 5 sectors →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Certifications & Institutional Trust */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              {lang === "fr" ? "CONFORMITÉ INSTITUTIONNELLE" : "INSTITUTIONAL TRUST"}
            </div>
            <div className="space-y-2 text-xs text-slate-400 font-normal leading-relaxed mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-otis-greenBright shrink-0" />
                <Link href="/compliance" className="hover:text-white transition-colors">
                  {lang === "fr" ? "Décret CPEEP & Assuré 2 M$" : "CPEEP Decree Parity & $2M Insured"}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-otis-greenBright shrink-0" />
                <span>{lang === "fr" ? "Conforme CNESST & Cautionné" : "CNESST Compliant & Bonded"}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-otis-orange" />
                <span>{lang === "fr" ? "Garantie Correctrice 24H" : "24-Hour Rectification Guarantee"}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 pt-1">
                <span>Proudly Montreal, QC</span>
                <span>🍁</span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-xs text-slate-400 leading-relaxed font-mono flex items-start gap-2">
              <MapPin className="w-4 h-4 text-otis-orange shrink-0 mt-0.5" />
              <div>
                2447 Ave Madison<br />
                Montreal, QC H4B 2T5
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/compliance" className="hover:text-white transition-colors">
              {lang === "fr" ? "Conformité Légale" : "Legal Compliance"}
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              {lang === "fr" ? "Planifier un Audit" : "Schedule Audit"}
            </Link>
          </div>

          <div className="text-center text-slate-400">
            © {new Date().getFullYear()} OTIS Commercial Cleaning. {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </div>

          <div className="text-center sm:text-right">
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
