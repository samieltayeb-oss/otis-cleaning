"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/hooks/useLenis";
import dynamic from "next/dynamic";
import { NavigationHUD } from "@/components/ui/NavigationHUD";
import { HeroSection } from "@/components/ui/HeroSection";
import { TransformationSection } from "@/components/ui/TransformationSection";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { EnvironmentsSection } from "@/components/ui/EnvironmentsSection";
import { TrustSection } from "@/components/ui/TrustSection";
import { ClosingCTASection } from "@/components/ui/ClosingCTASection";
import { contentEN, contentFR } from "@/data/content";

// Dynamically load WebGL Canvas with SSR disabled
const ExperienceCanvas = dynamic(
  () => import("@/components/canvas/ExperienceCanvas").then((mod) => mod.ExperienceCanvas),
  { ssr: false }
);

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const transformWrapperRef = useRef<HTMLDivElement>(null);
  const servicesWrapperRef = useRef<HTMLDivElement>(null);
  const envWrapperRef = useRef<HTMLDivElement>(null);
  const trustWrapperRef = useRef<HTMLDivElement>(null);
  const ctaWrapperRef = useRef<HTMLDivElement>(null);

  const lenisRef = useLenis();
  const currentContent = lang === "fr" ? contentFR : contentEN;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Master ScrollTrigger tracking overall progress across the narrative
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: prefersReducedMotion ? false : 1.2,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      if (!prefersReducedMotion) {
        // Hero typography dissolves as user enters Act 01
        if (heroWrapperRef.current) {
          gsap.to(heroWrapperRef.current, {
            scrollTrigger: {
              trigger: heroWrapperRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            y: -120,
            opacity: 0,
            scale: 0.95,
            filter: "blur(8px)",
            ease: "none",
          });
        }

        // Staggered reveals for each narrative section
        const sections = [
          transformWrapperRef.current,
          servicesWrapperRef.current,
          envWrapperRef.current,
          trustWrapperRef.current,
          ctaWrapperRef.current,
        ];

        sections.forEach((sec) => {
          if (!sec) return;
          gsap.fromTo(
            sec,
            {
              opacity: 0.25,
              y: 60,
            },
            {
              scrollTrigger: {
                trigger: sec,
                start: "top 85%",
                end: "top 40%",
                scrub: true,
              },
              opacity: 1,
              y: 0,
              ease: "none",
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleExploreClick = () => {
    if (transformWrapperRef.current) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(transformWrapperRef.current, { offset: -60, duration: 1.5 });
      } else {
        transformWrapperRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleRequestQuoteClick = () => {
    if (ctaWrapperRef.current) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(ctaWrapperRef.current, { offset: -40, duration: 1.8 });
      } else {
        ctaWrapperRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleReturnToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 2.0 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main ref={containerRef} className="relative w-full min-h-[500vh] bg-[#050811] text-slate-100 selection:bg-otis-orange/30 selection:text-amber-200">
      {/* 35mm Analog Clean Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Cinematic Vignette Overlay */}
      <div className="vignette-overlay" aria-hidden="true" />

      {/* Fixed Fullscreen WebGL Canvas (Three.js + GLSL Transitions) */}
      <ExperienceCanvas progress={scrollProgress} />

      {/* Precision Navigation HUD with Live Telemetry */}
      <NavigationHUD
        scrollProgress={scrollProgress}
        lang={lang}
        onToggleLang={() => setLang(lang === "en" ? "fr" : "en")}
        content={currentContent}
        onRequestQuote={handleRequestQuoteClick}
      />

      {/* ACT 00: Flagship Commercial Cleaning Hero */}
      <div ref={heroWrapperRef} className="relative z-10">
        <HeroSection
          content={currentContent}
          onExploreClick={handleExploreClick}
          onRequestQuote={handleRequestQuoteClick}
        />
      </div>

      {/* ACT 01: The Transformation (Authentic Substrate Truth) */}
      <div ref={transformWrapperRef} className="relative z-10">
        <TransformationSection content={currentContent} />
      </div>

      {/* ACT 02: Capabilities (The 6 Verified Facilities Services) */}
      <div ref={servicesWrapperRef} className="relative z-10">
        <ServicesSection
          content={currentContent}
          onRequestQuote={handleRequestQuoteClick}
        />
      </div>

      {/* ACT 03: Environments (Commercial Sectors & Protocols) */}
      <div ref={envWrapperRef} className="relative z-10">
        <EnvironmentsSection content={currentContent} />
      </div>

      {/* ACT 04: Governance & Legal Protection (CPEEP / CNESST / $2M Insurance) */}
      <div ref={trustWrapperRef} className="relative z-10">
        <TrustSection content={currentContent} />
      </div>

      {/* ACT 05: Closing & Proposal Activation */}
      <div ref={ctaWrapperRef} className="relative z-10">
        <ClosingCTASection
          content={currentContent}
          onReturnToTop={handleReturnToTop}
        />
      </div>
    </main>
  );
}
