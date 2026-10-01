"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, Send, CheckCircle2 } from "lucide-react";
import { ContentDictionary } from "@/data/content";
import { OtisMasterFooter } from "@/components/ui/OtisMasterFooter";

interface ClosingCTASectionProps {
  content: ContentDictionary;
  onReturnToTop: () => void;
}

export const ClosingCTASection: React.FC<ClosingCTASectionProps> = ({
  content,
  onReturnToTop,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [facilityType, setFacilityType] = useState("Corporate Office");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-10">
      <div className="rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-white/15 p-8 sm:p-14 lg:p-20 shadow-2xl relative">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-otis-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-otis-greenBright/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative h-12 w-40 mb-2">
              <Image
                src="/images/otis-logo.png"
                alt="OTIS Commercial Cleaning"
                fill
                className="object-contain object-left"
              />
            </div>

            <div className="text-xs font-mono text-otis-orange uppercase tracking-widest">
              {content.cta.tagline}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-display text-white leading-tight">
              {content.cta.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {content.cta.subtitle}
            </p>

            <div className="space-y-3 pt-6 border-t border-white/10 text-xs sm:text-sm font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-otis-orange shrink-0" />
                <span>{content.cta.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-otis-greenBright shrink-0" />
                <a href="tel:14389359725" className="hover:text-white transition-colors">
                  +1 (438) 935-9725 (24/7 Dispatch)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-otis-orange shrink-0" />
                <a href="mailto:info@otiscc.ca" className="hover:text-white transition-colors">
                  info@otiscc.ca
                </a>
              </div>
            </div>
          </div>

          {/* Right Direct Proposal Request Form */}
          <div className="lg:col-span-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-otis-greenBright animate-bounce" />
                <h3 className="text-2xl font-bold font-display text-white">Facility Audit Scheduled</h3>
                <p className="text-sm text-slate-300 font-mono max-w-sm">
                  An OTIS technical supervisor will reach out within 2 hours to confirm your facility walkthrough time.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Request an On-Site Audit
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  Complimentary walkthrough & fixed-rate commercial proposal.
                </p>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Facility Category
                  </label>
                  <select
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-otis-orange transition-colors"
                  >
                    <option value="Corporate Office">Corporate Office / Commercial Suite</option>
                    <option value="Medical Clinic">Medical / Dental Clinic</option>
                    <option value="Retail Boutique">Commercial Retail / Showroom</option>
                    <option value="Condo Common Area">Condominium Common Elements</option>
                    <option value="Post-Renovation">Post-Construction / Turnover</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="manager@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-otis-orange transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Direct Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="(514) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-otis-orange transition-colors placeholder:text-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-otis-orange hover:bg-otis-orangeHover text-white font-semibold text-sm tracking-wide shadow-xl shadow-otis-orange/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
                >
                  <span>{content.cta.btnQuote}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Return to Top Button */}
        <div className="mt-12 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onReturnToTop}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Exact Vercel Master Footer */}
      <div className="mt-16">
        <OtisMasterFooter />
      </div>
    </section>
  );
};
