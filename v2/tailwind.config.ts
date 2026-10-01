import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Syne", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        obsidian: {
          950: "#050811",
          900: "#090E1A",
          850: "#0E1526",
          800: "#141D33",
        },
        otis: {
          orange: "#F7941D",
          orangeHover: "#EA580C",
          orangeMuted: "rgba(247, 148, 29, 0.15)",
          green: "#1E7B34",
          greenBright: "#22C55E",
          greenMuted: "rgba(34, 197, 94, 0.15)",
        },
        surface: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          800: "#1E293B",
          900: "#0F172A",
        }
      },
      letterSpacing: {
        monumental: "0.22em",
        epic: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
