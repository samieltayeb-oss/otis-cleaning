import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { sectorsData } from "@/data/pagesData";
import { SubpageDetail } from "@/components/ui/SubpageDetail";

interface SectorPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(sectorsData).map(slug => ({
    slug
  }));
}

export function generateMetadata({ params }: SectorPageProps): Metadata {
  const sector = sectorsData[params.slug];
  if (!sector) {
    return {
      title: "Sector Not Found | OTIS Commercial Cleaning",
    };
  }

  return {
    title: sector.en.metaTitle,
    description: sector.en.metaDesc,
    openGraph: {
      title: sector.en.metaTitle,
      description: sector.en.metaDesc,
      images: [sector.en.heroImage],
    },
  };
}

export default function SectorDetailPage({ params }: SectorPageProps) {
  const sector = sectorsData[params.slug];

  if (!sector) {
    notFound();
  }

  // Related sector pages for cross-navigation
  const relatedPages = Object.values(sectorsData)
    .filter(s => s.slug !== params.slug)
    .map(s => ({
      slug: s.slug,
      title: s.en.title,
      href: `/sectors/${s.slug}`,
      image: s.en.heroImage
    }));

  return <SubpageDetail data={sector} relatedPages={relatedPages} />;
}
