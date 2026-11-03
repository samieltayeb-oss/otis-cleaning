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
  metadataBase: new URL("https://otiscc.ca"),
  title: "OTIS — Commercial Cleaning & Facilities Maintenance Montreal",
  description: "Enterprise commercial janitorial, hard floor care, and facility maintenance across Greater Montreal. Fully compliant with Quebec CPEEP decree, $2,000,000 insured, CNESST registered.",
  openGraph: {
    title: "OTIS — Commercial Cleaning & Facilities Maintenance Montreal",
    description: "Enterprise commercial janitorial, hard floor care, and facility maintenance across Greater Montreal. Fully compliant with Quebec CPEEP decree, $2,000,000 insured, CNESST registered.",
    url: "https://otiscc.ca",
    siteName: "OTIS Commercial Cleaning",
    images: [
      {
        url: "/images/otis-hero-commercial-cleaning.jpg",
        width: 1200,
        height: 630,
        alt: "OTIS Commercial Cleaning Montreal",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OTIS — Commercial Cleaning & Facilities Maintenance Montreal",
    description: "Enterprise commercial janitorial, hard floor care, and facility maintenance across Greater Montreal.",
    images: ["/images/otis-hero-commercial-cleaning.jpg"],
  },
  alternates: {
    canonical: "https://otiscc.ca",
    languages: {
      "en-CA": "https://otiscc.ca",
      "fr-CA": "https://otiscc.ca/fr/",
      "x-default": "https://otiscc.ca",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "CleaningService"],
      "@id": "https://otiscc.ca/#organization",
      "name": "OTIS Commercial Cleaning",
      "legalName": "Entretien Ménager OTIS Inc.",
      "url": "https://otiscc.ca/",
      "logo": "https://otiscc.ca/images/otis-logo.png",
      "image": "https://otiscc.ca/images/otis-hero-commercial-cleaning.jpg",
      "telephone": "+1-438-935-9725",
      "email": "info@otiscc.ca",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2447 Avenue Madison",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "postalCode": "H4B 2T5",
        "addressCountry": "CA",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.4678,
        "longitude": -73.6169,
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Montreal" },
        { "@type": "AdministrativeArea", "name": "Westmount" },
        { "@type": "AdministrativeArea", "name": "Notre-Dame-de-Grâce (NDG)" },
        { "@type": "AdministrativeArea", "name": "Saint-Laurent" },
        { "@type": "AdministrativeArea", "name": "West Island" },
        { "@type": "AdministrativeArea", "name": "Laval" },
        { "@type": "AdministrativeArea", "name": "Longueuil" },
      ],
      "priceRange": "$$",
      "currenciesAccepted": "CAD",
      "paymentAccepted": "Cash, Credit Card, Electronic Transfer, Invoice",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "knowsAbout": [
        "Commercial Janitorial Services",
        "Corporate Office Cleaning",
        "Commercial Floor Stripping & Waxing",
        "Machine Auto-Scrubbing",
        "Quebec CPEEP Decree Compliance",
        "Medical & Dental Clinic Sanitization",
        "Post-Construction Cleaning",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://otiscc.ca/#website",
      "url": "https://otiscc.ca/",
      "name": "OTIS Commercial Cleaning",
      "publisher": { "@id": "https://otiscc.ca/#organization" },
      "inLanguage": ["en-CA", "fr-CA"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050811] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} font-sans bg-[#050811] text-slate-100 antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
