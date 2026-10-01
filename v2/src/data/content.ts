export interface ServiceItem {
  id: string;
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  badge?: string;
}

export interface EnvironmentItem {
  id: string;
  slug: string;
  href: string;
  title: string;
  scope: string;
  image: string;
  specs: string[];
}

export interface ContentDictionary {
  nav: {
    services: string;
    transformation: string;
    environments: string;
    compliance: string;
    contact: string;
    requestQuote: string;
    callNow: string;
    telemetry: string;
  };
  hero: {
    badge: string;
    titlePrimary: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    phoneLabel: string;
    scrollHint: string;
    statDecree: string;
    statInsurance: string;
    statCoverage: string;
  };
  transformation: {
    actNumber: string;
    tagline: string;
    title: string;
    paragraph: string;
    metric1Val: string;
    metric1Lbl: string;
    metric2Val: string;
    metric2Lbl: string;
  };
  services: {
    actNumber: string;
    tagline: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  environments: {
    actNumber: string;
    tagline: string;
    title: string;
    subtitle: string;
    items: EnvironmentItem[];
  };
  trust: {
    actNumber: string;
    tagline: string;
    title: string;
    subtitle: string;
    cpeepTitle: string;
    cpeepDesc: string;
    cnesstTitle: string;
    cnesstDesc: string;
    insuranceTitle: string;
    insuranceDesc: string;
    securityTitle: string;
    securityDesc: string;
  };
  cta: {
    tagline: string;
    title: string;
    subtitle: string;
    btnQuote: string;
    btnPhone: string;
    address: string;
    hours: string;
    dispatchNote: string;
  };
}

export const contentEN: ContentDictionary = {
  nav: {
    services: "Services",
    transformation: "Transformation",
    environments: "Sectors",
    compliance: "Compliance",
    contact: "Contact",
    requestQuote: "Request Proposal",
    callNow: "+1 (438) 935-9725",
    telemetry: "MONTREAL HQ // 45.4678° N",
  },
  hero: {
    badge: "Enterprise Facilities Maintenance",
    titlePrimary: "Architectural Precision.",
    titleAccent: "Commercial Care.",
    subtitle: "High-standard janitorial care, hard floor stripping & waxing, and facility maintenance for Montreal's premier commercial and clinical properties.",
    ctaPrimary: "Request Facility Audit",
    ctaSecondary: "Explore Operations",
    phoneLabel: "24/7 Commercial Dispatch",
    scrollHint: "Scroll to initiate transformation",
    statDecree: "CPEEP Statutory Parity",
    statInsurance: "$2M General Liability",
    statCoverage: "Greater Montreal Coverage",
  },
  transformation: {
    actNumber: "ACT 01 — THE RESTORATION",
    tagline: "Uncompromising Surface Truth",
    title: "Where Standard Clean Ends, Architectural Restoration Begins.",
    paragraph: "Commercial facilities in Montreal face aggressive calcium chloride salt tracking, high foot-traffic wear, and heavy biological loads. We restore surfaces down to their true architectural substrate rather than masking residue with scented surfactants.",
    metric1Val: "100%",
    metric1Lbl: "CPEEP Parity Compliance",
    metric2Val: "$2M",
    metric2Lbl: "Commercial Liability Shield",
  },
  services: {
    actNumber: "ACT 02 — CAPABILITIES",
    tagline: "Scope of Facilities Maintenance",
    title: "Six Core Pillars of Enterprise Care.",
    subtitle: "Systematic, audit-ready facilities management engineered for commercial leases, medical clinics, and corporate headquarters.",
    items: [
      {
        id: "janitorial",
        slug: "commercial-cleaning",
        href: "/services/commercial-cleaning",
        title: "Janitorial & Facilities Care",
        subtitle: "Daily & Scheduled Maintenance",
        description: "Comprehensive hygiene, contact point disinfection, restroom descaling, and waste management for corporate offices and healthcare suites.",
        tag: "Core Service",
        image: "/images/otis-hero-commercial-cleaning.jpg",
      },
      {
        id: "restock",
        slug: "consumables-restocking",
        href: "/services/consumables-restocking",
        title: "Consumables Restocking",
        subtitle: "Automated Supply Chain",
        description: "Zero-friction inventory replenishment of rolled towels, toilet tissue, foaming soaps, and touchless sanitizers.",
        tag: "Daily Operations",
        image: "/images/otis-hero-consumables.jpg",
      },
      {
        id: "floors",
        slug: "floor-maintenance",
        href: "/services/floor-maintenance",
        title: "Stripping, Waxing & Floor Scrubbing",
        subtitle: "Substrate Protection",
        description: "Deep chemical wax stripping, multi-coat polymer finish application, and restorative machine floor scrubbing.",
        tag: "Hard Floor Care",
        badge: "Specialized Service",
        image: "/images/otis-hero-floor-maintenance.jpg",
      },
      {
        id: "carpet",
        slug: "carpet-cleaning",
        href: "/services/carpet-cleaning",
        title: "Carpet Cleaning & Extraction",
        subtitle: "Hot Water Machine Injection",
        description: "Deep fiber soil release, high-traffic walkway salt neutralization, and anti-microbial deodorizing.",
        tag: "Textile Care",
        image: "/images/otis-hero-carpet.jpg",
      },
      {
        id: "postreno",
        slug: "post-renovation",
        href: "/services/post-renovation",
        title: "Post-Renovation Cleaning",
        subtitle: "Turnover & Handover Delivery",
        description: "Multi-stage drywall dust extraction, overspray removal, and white-glove readiness for commercial tenants and homes.",
        tag: "Turnover Specialist",
        image: "/images/otis-hero-post-renovation.jpg",
      },
      {
        id: "windows",
        slug: "window-cleaning",
        href: "/services/window-cleaning",
        title: "Cleaning of Window Interiors",
        subtitle: "Architectural Glazing",
        description: "Streak-free squeegee care for interior glass facades, conference partitions, sidelights, and perimeter sills.",
        tag: "Interior Detailing",
        image: "/images/otis-hero-windows.jpg",
      },
    ],
  },
  environments: {
    actNumber: "ACT 03 — ENVIRONMENTS",
    tagline: "Operational Footprint",
    title: "Engineered for Montreal's Critical Facilities.",
    subtitle: "Every facility type requires a distinct operational playbook and strict chemical compliance.",
    items: [
      {
        id: "corporate",
        slug: "office-cleaning",
        href: "/services/office-cleaning",
        title: "Corporate Offices & Tech Hubs",
        scope: "Downtown, Westmount & Mile End",
        image: "/images/otis-hero-office-cleaning.jpg",
        specs: ["Evening & Weekend Shifts", "Dedicated Keyholder Protocol", "HEPA Filtration Vacuums"],
      },
      {
        id: "medical",
        slug: "clinic-cleaning",
        href: "/sectors/clinic-cleaning",
        title: "Medical & Dental Clinics",
        scope: "NDG, West Island & Saint-Laurent",
        image: "/images/otis-hero-clinic-cleaning.jpg",
        specs: ["Hospital-Grade Sanitizers", "Operator Cross-Contamination Ban", "Sterilization Protocols"],
      },
      {
        id: "retail",
        slug: "retail-cleaning",
        href: "/sectors/retail-cleaning",
        title: "Commercial Retail & Boutiques",
        scope: "High-Traffic Corridors & Lobbies",
        image: "/images/otis-hero-retail.jpg",
        specs: ["Daily High-Luster Floor Care", "Perimeter Glass Polishing", "Pre-Opening Readiness"],
      },
      {
        id: "condo",
        slug: "condo-cleaning",
        href: "/sectors/condo-cleaning",
        title: "Condo Common Elements & Atriums",
        scope: "Laval & South Shore Portfolios",
        image: "/images/otis-hero-condo.jpg",
        specs: ["Winter Salt Extraction", "Elevator Stainless Detailing", "Scheduled Resident Care"],
      },
    ],
  },
  trust: {
    actNumber: "ACT 04 — GOVERNANCE",
    tagline: "Risk Mitigation & Legal Security",
    title: "100% Shielded Behind Quebec Legal Compliance.",
    subtitle: "Subcontracting facilities care without verified decree compliance exposes building owners to joint legal liability.",
    cpeepTitle: "Quebec CPEEP Decree Parity",
    cpeepDesc: "Full statutory wage compliance with the Comité paritaire de l'entretien d'édifices publics, shielding property management from Article 14 liability.",
    cnesstTitle: "CNESST Good Standing",
    cnesstDesc: "Zero-exception occupational safety certification, active injury liability coverage, and rigorous WHMIS/SIMDUT chemical protocols.",
    insuranceTitle: "$2,000,000 Commercial Liability",
    insuranceDesc: "Comprehensive property damage and general liability coverage underwritten for corporate towers and medical complexes.",
    securityTitle: "Strict Keyholder & Access Security",
    securityDesc: "GPS-verified clock-in, bonded senior operatives, and transparent 24-hour supervisor remediation guarantee.",
  },
  cta: {
    tagline: "Immediate Commercial Activation",
    title: "Elevate Your Facility Standard Today.",
    subtitle: "Schedule an on-site facility audit with an OTIS technical supervisor. Receive a detailed, route-clustered maintenance proposal within 24 hours.",
    btnQuote: "Request Commercial Proposal",
    btnPhone: "Call Commercial Dispatch",
    address: "2447 Avenue Madison, Montreal, QC H4B 2T5",
    hours: "24/7 Commercial Dispatch & Facility Maintenance",
    dispatchNote: "Servicing Greater Montreal, NDG, Westmount, Downtown, Saint-Laurent, West Island, Laval & South Shore.",
  },
};

export const contentFR: ContentDictionary = {
  nav: {
    services: "Services",
    transformation: "Transformation",
    environments: "Secteurs",
    compliance: "Conformité",
    contact: "Contact",
    requestQuote: "Demander une soumission",
    callNow: "+1 (438) 935-9725",
    telemetry: "SIÈGE MONTRÉAL // 45.4678° N",
  },
  hero: {
    badge: "Entretien d'Édifices & Nettoyage Commercial",
    titlePrimary: "Précision Architecturale.",
    titleAccent: "Rigueur Commerciale.",
    subtitle: "Entretien ménager commercial d'élite, décapage et cirage de planchers et maintenance d'édifices pour les immeubles de bureaux et cliniques du Grand Montréal.",
    ctaPrimary: "Demander un audit des lieux",
    ctaSecondary: "Explorer nos opérations",
    phoneLabel: "Répartition commerciale 24/7",
    scrollHint: "Faites défiler pour amorcer la transformation",
    statDecree: "Conformité Décret CPEEP",
    statInsurance: "Assurance responsabilité 2 M$",
    statCoverage: "Grand Montréal & Rive-Sud",
  },
  transformation: {
    actNumber: "ACTE 01 — LA RESTAURATION",
    tagline: "Vérité & Clarté des Surfaces",
    title: "Où s'arrête l'entretien ordinaire, commence la restauration architecturale.",
    paragraph: "Les édifices commerciaux montréalais subissent des agressions sévères de sel de déglaçage, de fort achalandage piétonnier et de poussières fines. Nous restaurons la matière jusqu'à son lustre authentique sans masque superficiel.",
    metric1Val: "100%",
    metric1Lbl: "Conformité Décret Paritaire",
    metric2Val: "2 M$",
    metric2Lbl: "Bouclier d'Assurance Responsabilité",
  },
  services: {
    actNumber: "ACTE 02 — NOS SERVICES",
    tagline: "Champs d'Expertise en Maintenance",
    title: "Six Piliers d'Excellence Opérationnelle.",
    subtitle: "Une gestion rigoureuse, standardisée et transparente conçue pour les baux commerciaux, les cliniques médicales et les sièges sociaux.",
    items: [
      {
        id: "janitorial",
        slug: "commercial-cleaning",
        href: "/services/commercial-cleaning",
        title: "Entretien ménager & maintenance",
        subtitle: "Nettoyage quotidien et périodique",
        description: "Désinfection minutieuse des points de contact, hygiène complète des blocs sanitaires et gestion des résidus.",
        tag: "Service Principal",
        image: "/images/otis-hero-commercial-cleaning.jpg",
      },
      {
        id: "restock",
        slug: "consumables-restocking",
        href: "/services/consumables-restocking",
        title: "Réapprovisionnement de consommables",
        subtitle: "Gestion automatisée des stocks",
        description: "Gestion et approvisionnement proactif en essuie-mains, papier hygiénique, savon antibactérien et assainissant.",
        tag: "Opérations Quotidiennes",
        image: "/images/otis-hero-consumables.jpg",
      },
      {
        id: "floors",
        slug: "floor-maintenance",
        href: "/services/floor-maintenance",
        title: "Décapage, cirage & récurage",
        subtitle: "Protection des planchers durs",
        description: "Décapage chimique complet, pose de finis polymères protecteurs multicouches et récurage mécanique spécialisé.",
        tag: "Entretien de Planchers",
        badge: "Service Spécialisé",
        image: "/images/otis-hero-floor-maintenance.jpg",
      },
      {
        id: "carpet",
        slug: "carpet-cleaning",
        href: "/services/carpet-cleaning",
        title: "Nettoyage & extraction de tapis",
        subtitle: "Injection et extraction à chaud",
        description: "Nettoyage en profondeur des fibres textiles, élimination des dépôts salins et traitement anti-odeurs.",
        tag: "Soins Textiles",
        image: "/images/otis-hero-carpet.jpg",
      },
      {
        id: "postreno",
        slug: "post-renovation",
        href: "/services/post-renovation",
        title: "Nettoyage après rénovation",
        subtitle: "Remise clé en main après chantier",
        description: "Élimination des poussières fines de gypse, résidus de peinture et mise en propreté pour habitations et commerces.",
        tag: "Spécialiste Livraison",
        image: "/images/otis-hero-post-renovation.jpg",
      },
      {
        id: "windows",
        slug: "window-cleaning",
        href: "/services/window-cleaning",
        title: "Lavage de vitres intérieures",
        subtitle: "Vitrages architecturaux",
        description: "Lavage sans traces des baies vitrées intérieures, cloisons de bureaux, impostes et cadrages.",
        tag: "Finition Intérieure",
        image: "/images/otis-hero-windows.jpg",
      },
    ],
  },
  environments: {
    actNumber: "ACTE 03 — SECTEURS",
    tagline: "Nos Environnements d'Intervention",
    title: "Adapté aux Édifices Stratégiques de Montréal.",
    subtitle: "Chaque environnement répond à un cahier des charges strict et à une méthodologie adaptée.",
    items: [
      {
        id: "corporate",
        slug: "office-cleaning",
        href: "/services/office-cleaning",
        title: "Bureaux Corporatifs & Espaces Tech",
        scope: "Centre-ville, Westmount & Mile End",
        image: "/images/otis-hero-office-cleaning.jpg",
        specs: ["Horaires du Soir & Fin de Semaine", "Protocoles d'Accès Sécurisés", "Aspirateurs HEPA"],
      },
      {
        id: "medical",
        slug: "clinic-cleaning",
        href: "/sectors/clinic-cleaning",
        title: "Cliniques Médicales & Dentaires",
        scope: "NDG, Ouest-de-l'Île & Saint-Laurent",
        image: "/images/otis-hero-clinic-cleaning.jpg",
        specs: ["Désinfectants de Grade Hospitalier", "Prévention de la Contamination Croisée", "Conformité Stricte"],
      },
      {
        id: "retail",
        slug: "retail-cleaning",
        href: "/sectors/retail-cleaning",
        title: "Boutiques Commerciales & Magasins",
        scope: "Zones à Fort Achalandage",
        image: "/images/otis-hero-retail.jpg",
        specs: ["Lustrage Régulier des Planchers", "Lavage Impeccable des Vitrines", "Préparation Matinale"],
      },
      {
        id: "condo",
        slug: "condo-cleaning",
        href: "/sectors/condo-cleaning",
        title: "Copropriétés & Espaces Communs",
        scope: "Laval & Rive-Sud",
        image: "/images/otis-hero-condo.jpg",
        specs: ["Élimination du Sel Hivernal", "Entretien de l'Inox des Ascenseurs", "Horaires Flexibles"],
      },
    ],
  },
  trust: {
    actNumber: "ACTE 04 — GOUVERNANCE",
    tagline: "Conformité Légale & Sécurité",
    title: "100 % Protégé par les Normes Salariales et Légales du Québec.",
    subtitle: "Confier l'entretien ménager à des sous-traitants non conformes expose les gestionnaires à une responsabilité solidaire (Article 14).",
    cpeepTitle: "Conformité Décret Paritaire CPEEP",
    cpeepDesc: "Application rigoureuse des normes salariales du Comité paritaire de l'entretien d'édifices publics pour annuler tout risque légal pour votre entreprise.",
    cnesstTitle: "En Règle avec la CNESST",
    cnesstDesc: "Dossier exemplaire de santé et sécurité au travail, protection intégrale des équipes et respect strict du SIMDUT.",
    insuranceTitle: "Assurance Responsabilité de 2 000 000 $",
    insuranceDesc: "Couverture complète pour dommages matériels et responsabilité civile auprès d'assureurs canadiens certifiés.",
    securityTitle: "Gestion Sécuritaire des Accès",
    securityDesc: "Pointage GPS des équipes, personnel vérifié et engagement d'intervention correctrice sous 24 heures sans frais.",
  },
  cta: {
    tagline: "Activation Commerciale Immédiate",
    title: "Rehaussez le Standard de Vos Installations.",
    subtitle: "Planifiez une visite technique des lieux avec un superviseur OTIS. Recevez une soumission détaillée sous 24 heures.",
    btnQuote: "Demander une soumission",
    btnPhone: "Appeler la répartition",
    address: "2447 Avenue Madison, Montréal (Québec) H4B 2T5",
    hours: "Répartition commerciale 24/7 & Entretien d'édifices",
    dispatchNote: "Desservant le Grand Montréal, NDG, Westmount, Centre-ville, Saint-Laurent, l'Ouest-de-l'Île, Laval et la Rive-Sud.",
  },
};
