import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/data/pagesData";
import { SubpageDetail } from "@/components/ui/SubpageDetail";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({
    slug
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData[params.slug];
  if (!service) {
    return {
      title: "Service Not Found | OTIS Commercial Cleaning",
    };
  }

  return {
    title: service.en.metaTitle,
    description: service.en.metaDesc,
    openGraph: {
      title: service.en.metaTitle,
      description: service.en.metaDesc,
      images: [service.en.heroImage],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  // Related pages for cross-navigation
  const relatedPages = Object.values(servicesData)
    .filter(s => s.slug !== params.slug)
    .map(s => ({
      slug: s.slug,
      title: s.en.title,
      href: `/services/${s.slug}`,
      image: s.en.heroImage
    }));

  return <SubpageDetail data={service} relatedPages={relatedPages} />;
}
