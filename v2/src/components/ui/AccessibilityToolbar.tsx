"use client";

import React, { useState, useEffect } from "react";

export const AccessibilityToolbar: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(0); // -1: small, 0: default, 1: large, 2: extra-large

  useEffect(() => {
    try {
      const savedHC = localStorage.getItem("otis_high_contrast");
      if (savedHC === "true") {
        document.documentElement.classList.add("high-contrast");
        setIsHighContrast(true);
      }
      const savedScale = parseInt(localStorage.getItem("otis_font_scale") || "0", 10);
      setFontScale(savedScale);
      applyScaleClasses(savedScale);
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  const applyScaleClasses = (scale: number) => {
    document.documentElement.classList.remove("font-scale-minus", "font-scale-1", "font-scale-2");
    if (scale === -1) document.documentElement.classList.add("font-scale-minus");
    if (scale === 1) document.documentElement.classList.add("font-scale-1");
    if (scale === 2) document.documentElement.classList.add("font-scale-2");
  };

  const handleAdjust = (delta: number) => {
    const next = Math.max(-1, Math.min(2, fontScale + delta));
    setFontScale(next);
    applyScaleClasses(next);
    try {
      localStorage.setItem("otis_font_scale", next.toString());
    } catch {}
  };

  const handleToggleContrast = () => {
    const next = !isHighContrast;
    setIsHighContrast(next);
    if (next) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
    try {
      localStorage.setItem("otis_high_contrast", next ? "true" : "false");
    } catch {}
  };

  return (
    <div
      role="region"
      aria-label="Accessibility controls"
      className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 rounded-full px-3 py-1 text-xs text-white font-sans transition-all select-none shadow-sm shrink-0 whitespace-nowrap"
    >
      <button
        type="button"
        onClick={() => handleAdjust(-1)}
        title="Decrease text size"
        aria-label="Decrease text size"
        className="font-bold px-1 hover:text-otis-orange transition-colors"
      >
        A-
      </button>

      <button
        type="button"
        onClick={() => handleAdjust(1)}
        title="Increase text size"
        aria-label="Increase text size"
        className="font-bold px-1 hover:text-otis-orange transition-colors"
      >
        A+
      </button>

      <button
        type="button"
        onClick={handleToggleContrast}
        title="Toggle high contrast mode"
        aria-label="Toggle high contrast mode"
        aria-pressed={isHighContrast}
        className={`inline-flex items-center gap-1.5 font-bold px-1.5 py-0.5 rounded-full transition-colors ${
          isHighContrast
            ? "bg-otis-orange text-white"
            : "text-white/90 hover:text-white"
        }`}
      >
        <svg
          className="w-3.5 h-3.5 fill-current shrink-0"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14v12c3.31 0 6-2.69 6-6s-2.69-6-6-6z" />
        </svg>
        <span className="text-[11px] font-bold">Contrast</span>
      </button>
    </div>
  );
};
