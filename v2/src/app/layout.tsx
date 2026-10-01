import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.otiscc.ca"),
  title: "OTIS — Commercial Cleaning & Facilities Maintenance Montreal",
  description: "Enterprise commercial janitorial, hard floor care, and facility maintenance across Greater Montreal. Fully compliant with Quebec CPEEP decree, $2,000,000 insured, CNESST registered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050811] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <body
        className={`${inter.variable} ${syne.variable} font-sans bg-[#050811] text-slate-100 antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
