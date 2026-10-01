export interface SubpageData {
  slug: string;
  category: "service" | "sector" | "governance";
  en: {
    metaTitle: string;
    metaDesc: string;
    badge: string;
    title: string;
    subtitle: string;
    heroImage: string;
    overview: string;
    scopeHeading: string;
    scopeItems: { title: string; desc: string }[];
    specsHeading: string;
    specs: { label: string; value: string }[];
    faqs: { question: string; answer: string }[];
  };
  fr: {
    metaTitle: string;
    metaDesc: string;
    badge: string;
    title: string;
    subtitle: string;
    heroImage: string;
    overview: string;
    scopeHeading: string;
    scopeItems: { title: string; desc: string }[];
    specsHeading: string;
    specs: { label: string; value: string }[];
    faqs: { question: string; answer: string }[];
  };
}

export const servicesData: Record<string, SubpageData> = {
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    category: "service",
    en: {
      metaTitle: "Commercial Cleaning & Janitorial Montreal | OTIS",
      metaDesc: "Comprehensive commercial janitorial care for corporate offices, retail, and commercial facilities across Greater Montreal. CPEEP decree compliant, $2M insured.",
      badge: "Commercial Janitorial Protocol",
      title: "Commercial Cleaning & Facility Care",
      subtitle: "Systematic, recurring janitorial maintenance engineered for high-traffic corporate and commercial properties in Greater Montreal.",
      heroImage: "/images/otis-hero-commercial-cleaning.jpg",
      overview: "OTIS provides standardized, audit-ready commercial cleaning programs. Our teams operate after hours or on customized schedules with dedicated keyholder protocols, ensuring zero interruption to your business operations.",
      scopeHeading: "Standard Operating Scope",
      scopeItems: [
        { title: "Surface Sanitization", desc: "Disinfection of all high-contact surfaces including door handles, light switches, elevator buttons, and conference desks." },
        { title: "Complete Restroom Hygiene", desc: "Descaling and deep disinfection of toilets, urinals, vanity sinks, and streak-free mirror polishing." },
        { title: "Waste & Recycling Management", desc: "Scheduled collection, sorting, bin sanitization, and heavy-duty liner replacement throughout all suites." },
        { title: "Floor Maintenance", desc: "Multi-stage HEPA commercial vacuuming of carpets and microfiber neutral-pH damp mopping of hard floors." },
        { title: "Kitchenette & Breakroom Detailing", desc: "Degreasing of countertops, sink descaling, and exterior detailing of refrigerators, microwaves, and coffee bars." },
        { title: "Entryway & Glazing Care", desc: "Interior entrance glass polishing, fingerprint elimination, and entryway winter salt residue clearing." }
      ],
      specsHeading: "Operational Specifications",
      specs: [
        { label: "Compliance Standard", value: "Quebec CPEEP Decree Statutory Parity" },
        { label: "Liability Insurance", value: "$2,000,000 Commercial General Liability" },
        { label: "Worker Safety", value: "100% CNESST Certified & WHMIS/SIMDUT Compliant" },
        { label: "Dispatch Availability", value: "24/7 Montreal Commercial Dispatch" }
      ],
      faqs: [
        { question: "What frequency options do you support?", answer: "We offer 1x, 2x, 3x, 5x, and 7x per week recurring cleaning contracts tailored to your foot traffic and lease terms." },
        { question: "Are your cleaners bonded and insured?", answer: "Yes. 100% of our operatives are vetted, bonded, insured with $2,000,000 commercial liability coverage, and covered under CNESST." },
        { question: "Do you supply cleaning products and equipment?", answer: "OTIS provides all commercial equipment, microfiber supplies, and eco-friendly neutral chemicals. We can also manage consumable restocking." },
        { question: "What happens if an area needs supervisor review?", answer: "We back our work with the OTIS 24-Hour Cure Guarantee: report any deficiency with a photo and a supervisor will remediate it within the same business day at zero charge." }
      ]
    },
    fr: {
      metaTitle: "Entretien Ménager Commercial Montréal | OTIS",
      metaDesc: "Services professionnels d'entretien ménager commercial pour bureaux, commerces et édifices dans le Grand Montréal. Conforme au Décret CPEEP, assuré 2 M$.",
      badge: "Protocole d'Entretien Commercial",
      title: "Entretien Ménager Commercial & d'Édifices",
      subtitle: "Programme standardisé d'entretien régulier conçu pour les édifices corporatifs et commerciaux du Grand Montréal.",
      heroImage: "/images/otis-hero-commercial-cleaning.jpg",
      overview: "OTIS déploie des équipes d'entretien formées aux exigences québécoises. Nos interventions s'effectuent en soirée ou selon vos horaires avec gestion rigoureuse des clés et codes d'accès.",
      scopeHeading: "Cahier des Charges Opérationnel",
      scopeItems: [
        { title: "Désinfection des surfaces", desc: "Désinfection minutieuse de tous les points de contact: poignées de portes, interrupteurs, postes de travail et boutons d'ascenseur." },
        { title: "Hygiène des blocs sanitaires", desc: "Détartrage et assainissement des cuvettes, urinoirs, lavabos et polissage sans traces des miroirs." },
        { title: "Gestion des rebuts et recyclage", desc: "Collecte méthodique, tri des matières résiduelles, remplacement des sacs étanches et nettoyage des bacs." },
        { title: "Soins des sols", desc: "Aspiration avec filtration HEPA industrielle et lavage humide à la vadrouille microfibre avec détergents neutres." },
        { title: "Salles de pause & cuisinettes", desc: "Dégraissage des comptoirs, détartrage des éviers et nettoyage extérieur des électroménagers." },
        { title: "Vitrages d'entrée & corridors", desc: "Lavage des portes vitrées d'entrée, élimination des traces de doigts et extraction du sel hivernal." }
      ],
      specsHeading: "Spécifications Réglementaires",
      specs: [
        { label: "Norme Salariale", value: "Conforme au Décret Paritaire CPEEP du Québec" },
        { label: "Assurance Civile", value: "2 000 000 $ en responsabilité civile des entreprises" },
        { label: "Santé et Sécurité", value: "Dossier CNESST en règle & SIMDUT respecté" },
        { label: "Disponibilité", value: "Répartition commerciale 24/7 à Montréal" }
      ],
      faqs: [
        { question: "Quelles sont les fréquences de service disponibles?", answer: "Nous proposons des ententes de 1 à 7 passages par semaine, adaptées à la superficie de vos locaux et à l'achalandage." },
        { question: "Vos équipes sont-elles assurées et cautionnées?", answer: "Absolument. Tout notre personnel fait l'objet d'une vérification rigoureuse, est couvert par la CNESST et protégé par notre police de 2 000 000 $." },
        { question: "Fournissez-vous les équipements et produits?", answer: "Oui, OTIS fournit l'intégralité du matériel, des aspirateurs HEPA et des produits neutres professionnels non abrasifs." },
        { question: "Quelle est votre garantie de satisfaction?", answer: "Notre Garantie Correctrice 24 h prévoit le déplacement immédiat d'un superviseur pour rectifier toute anomalie signalée sans frais supplémentaires." }
      ]
    }
  },

  "office-cleaning": {
    slug: "office-cleaning",
    category: "service",
    en: {
      metaTitle: "Professional Office Cleaning Montreal | OTIS",
      metaDesc: "Premium office cleaning services in Montreal, Westmount, Downtown, and Saint-Laurent. Evening & weekend shifts, dedicated keyholders, CPEEP compliant.",
      badge: "Corporate Office Standards",
      title: "Corporate Office Cleaning",
      subtitle: "Elevating corporate workspaces, technology hubs, and executive suites across Greater Montreal.",
      heroImage: "/images/otis-hero-office-cleaning.jpg",
      overview: "A clean office directly influences employee focus, executive confidence, and client perception. OTIS creates tailored maintenance cadences for open-plan offices, boardrooms, and executive headquarters.",
      scopeHeading: "Office Maintenance Program",
      scopeItems: [
        { title: "Workstation & Desk Care", desc: "Gentle dusting and surface sanitization around desktop computers, monitors, and shared desk spaces." },
        { title: "Conference Room Detailing", desc: "Glass partition cleaning, conference table sanitization, chair alignment, and trash clearing." },
        { title: "Executive Restrooms", desc: "Hospitality-grade sanitization, brass/chrome polishing, and high-frequency paper restocking." },
        { title: "Coffee Stations & Pantries", desc: "Wiping espresso machines, sink descaling, sanitizing counters, and empty fridge rotation." },
        { title: "HEPA Floor Vacuuming", desc: "Multi-stage filtration vacuuming that captures 99.97% of airborne allergens and dust." }
      ],
      specsHeading: "Corporate Requirements",
      specs: [
        { label: "Shift Timing", value: "Evenings (after 6:00 PM) or Weekends" },
        { label: "Security Protocol", value: "Keycard / Alarm Code Custody Protocol" },
        { label: "Legal Status", value: "100% CPEEP Statutory Decree Protected" },
        { label: "Coverage", value: "Downtown, Westmount, Mile End, Saint-Laurent" }
      ],
      faqs: [
        { question: "Can you clean after business hours?", answer: "Yes. Over 90% of our corporate contracts are performed between 6:00 PM and midnight to avoid disrupting staff." },
        { question: "How do you handle building alarm codes?", answer: "We implement formal custody logs with dual-verification sign-offs and supervisor oversight for all keycards and alarm pins." },
        { question: "Do you offer month-to-month or term agreements?", answer: "We offer flexible 6-month or 10-month preferred agreements with transparent flat monthly invoicing and no hidden fees." },
        { question: "Are your cleaners trained in office confidentiality?", answer: "All operatives sign strict non-disclosure and privacy covenants before deployment into corporate environments." }
      ]
    },
    fr: {
      metaTitle: "Nettoyage de Bureaux Professionnels Montréal | OTIS",
      metaDesc: "Entretien ménager corporatif haut de gamme à Montréal, Westmount et Ville Saint-Laurent. Soir et fin de semaine, conformité au décret CPEEP.",
      badge: "Normes Bureaux Corporatifs",
      title: "Nettoyage de Bureaux Corporatifs",
      subtitle: "Valorisation des environnements de travail, sièges sociaux et suites technologiques du Grand Montréal.",
      heroImage: "/images/otis-hero-office-cleaning.jpg",
      overview: "La propreté de vos bureaux forge l'image de marque de votre entreprise et favorise la concentration de vos employés. OTIS propose des interventions soignées adaptées aux exigences corporatives.",
      scopeHeading: "Programme d'Entretien pour Bureaux",
      scopeItems: [
        { title: "Postes de travail & bureaux", desc: "Dépoussiérage méticuleux et assainissement des surfaces autour des équipements informatiques." },
        { title: "Salles de conférence", desc: "Nettoyage des cloisons vitrées, assainissement des tables de réunion et remise en ordre." },
        { title: "Sanitaires corporatifs", desc: "Désinfection de niveau hôtelier, brillance de la robinetterie et approvisionnement en papier." },
        { title: "Cuisinettes et stations café", desc: "Nettoyage des comptoirs, éviers et entretien extérieur des machines à café et micro-ondes." },
        { title: "Aspiration filtration HEPA", desc: "Capture de 99,97 % des particules fines et acariens pour une qualité d'air intérieur optimale." }
      ],
      specsHeading: "Exigences Corporatives",
      specs: [
        { label: "Horaires", value: "En soirée (dès 18 h) ou les fins de semaine" },
        { label: "Sécurité", value: "Protocole strict de garde des clés et codes d'alarme" },
        { label: "Statut Légal", value: "Conforme au Décret Paritaire CPEEP" },
        { label: "Territoire", value: "Centre-ville, Westmount, Mile End, Saint-Laurent" }
      ],
      faqs: [
        { question: "Intervenez-vous après les heures de bureau?", answer: "Oui, la majorité de nos contrats d'entretien de bureaux se déroulent en soirée pour garantir une tranquillité totale." },
        { question: "Comment gérez-vous les alarmes et accès?", answer: "Nos protocoles de sécurité prévoient un registre strict des clés et cartes d'accès sous la supervision directe de la direction." },
        { question: "Quels sont les types de contrats proposés?", answer: "Nous offrons des ententes préférentielles de 6 ou 10 mois à tarification mensuelle fixe sans frais cachés." },
        { question: "Vos employés respectent-ils la confidentialité?", answer: "Chaque membre de l'équipe signe une entente de confidentialité rigoureuse avant toute affectation en milieu de travail." }
      ]
    }
  },

  "floor-maintenance": {
    slug: "floor-maintenance",
    category: "service",
    en: {
      metaTitle: "Commercial Floor Stripping, Waxing & Scrubbing Montreal | OTIS",
      metaDesc: "Industrial floor stripping, polymer finish waxing, and specialized machine scrubbing for commercial VCT, terrazzo, and concrete across Montreal.",
      badge: "Hard Surface Substrate Care",
      title: "Floor Stripping, Waxing & Machine Scrubbing",
      subtitle: "Restorative chemical stripping, diamond polymer seal application, and specialized mechanical floor scrubbing.",
      heroImage: "/images/real_floor_clean_1789881653699.jpg",
      overview: "Montreal winters inflict extreme damage through calcium salt crystals, dirt gouges, and dulling abrasion. OTIS restores commercial hard surfaces to showroom gloss with multi-coat protective polymers.",
      scopeHeading: "Floor Restoration Scope",
      scopeItems: [
        { title: "Complete Finish Stripping", desc: "Rotary mechanical stripping to dissolve all aged, discolored wax and embedded winter salt deposits down to the bare substrate." },
        { title: "Cold Water pH Neutralization", desc: "Multi-stage rinse with acid-neutralizing agents to eliminate chemical residues before recoating." },
        { title: "4-Coat Polymer Finish Application", desc: "High-solids commercial floor finish laid down in thin, uniform coats for lasting high-traffic durability." },
        { title: "Machine Floor Scrubbing (Additional Service)", desc: "Specialized motorized auto-scrubber machine passes for wide corridors, gyms, retail spaces, and warehouses." },
        { title: "Perimeter & Baseboard Edging", desc: "Manual scraping and detail cleaning of corners and rubber baseboards where machines cannot reach." }
      ],
      specsHeading: "Technical Specifications",
      specs: [
        { label: "Compatible Substrates", value: "VCT, Linoleum, Terrazzo, Sealed Concrete, Epoxy" },
        { label: "Finish Quality", value: "High-Solid Commercial Polymer (Diamond Mirror Gloss)" },
        { label: "Cure Time", value: "Foot traffic in 2 hours; Full chemical cure in 24 hours" },
        { label: "Salt Protection", value: "Engineered for sub-zero calcium chloride resistance" }
      ],
      faqs: [
        { question: "How often should commercial floors be stripped and waxed?", answer: "High-traffic commercial facilities typically require a full strip once per year, supplemented by quarterly machine scrub & recoats." },
        { question: "Can you strip floors on weekends?", answer: "Yes. Floor stripping and waxing projects are scheduled primarily on Friday evenings or weekends to allow complete cure before Monday morning." },
        { question: "What causes floors to turn yellow and dull?", answer: "Aged wax oxidizes over time, and salt tracking chemically embeds into the finish. Complete stripping is the only method to remove this discoloration." },
        { question: "Do you service polished concrete or terrazzo?", answer: "Yes. We utilize specialized neutral-pH rotary detergents and diamond-impregnated pads for concrete and terrazzo." }
      ]
    },
    fr: {
      metaTitle: "Décapage et Cirage de Planchers Commerciaux Montréal | OTIS",
      metaDesc: "Décapage chimique, cirage au polymère diamant et récurage mécanique de planchers commerciaux (tuiles VCT, béton poli, terrazzo) à Montréal.",
      badge: "Soins des Planchers Durs",
      title: "Décapage, Cirage & Récurage de Planchers",
      subtitle: "Restauration en profondeur des surfaces dures, élimination du sel et application de cires protectrices ultra-durables.",
      heroImage: "/images/real_floor_clean_1789881653699.jpg",
      overview: "Les hivers québécois dégradent prématurément les revêtements de sol par l'accumulation de calcium et de gravier. OTIS redonne à vos planchers leur éclat d'origine grâce à nos techniques de décapage et cirage multicouche.",
      scopeHeading: "Protocole de Restauration de Planchers",
      scopeItems: [
        { title: "Décapage chimique complet", desc: "Dissolution mécanique rotative de toutes les anciennes couches de cire jaunie et des dépôts de sel incrustés." },
        { title: "Neutralisation du pH à l'eau froide", desc: "Rinçage neutralisant pour assurer une adhérence parfaite du nouveau fini polymère." },
        { title: "Application de 4 couches de cire", desc: "Application soignée de cire à haute teneur en solides pour un lustre miroir résistant au fort achalandage." },
        { title: "Récurage mécanique (service additionnel)", desc: "Passage d'autolaveuses mécaniques pour les grands corridors, entrepôts et surfaces commerciales." },
        { title: "Finition des plinthes et coins", desc: "Nettoyage manuel minutieux des bordures et plinthes où les machines rotatives ne peuvent accéder." }
      ],
      specsHeading: "Données Techniques",
      specs: [
        { label: "Surfaces Compatibles", value: "Tuile VCT, linoléum, terrazzo, béton scellé, époxy" },
        { label: "Type de Fini", value: "Polymère acrylique commercial à haute réflectance" },
        { label: "Temps de Séchage", value: "Circulation piétonne après 2 h; durcissement complet en 24 h" },
        { label: "Protection Hivernale", value: "Barrière active contre le chlorure de calcium" }
      ],
      faqs: [
        { question: "À quelle fréquence faut-il décaper un plancher?", answer: "En moyenne, un décapage complet est recommandé une fois l'an, complété par des récurages légers trimestriels." },
        { question: "Pouvez-vous réaliser les travaux la fin de semaine?", answer: "Oui, la majorité des décapages se font la fin de semaine afin de permettre le durcissement optimal du fini avant la reprise des activités." },
        { question: "Pourquoi les planchers jaunissent-ils?", answer: "L'oxydation des anciennes cires et les résidus de sel incrustés créent cette teinte terne que seul un décapage professionnel peut éliminer." },
        { question: "Entretenez-vous le béton et le terrazzo?", answer: "Absolument. Nous utilisons des disques diamantés et des détergents à pH neutre pour préserver la brillance naturelle du terrazzo." }
      ]
    }
  },

  "consumables-restocking": {
    slug: "consumables-restocking",
    category: "service",
    en: {
      metaTitle: "Restroom Consumables Restocking Montreal | OTIS",
      metaDesc: "Automated inventory management and restocking of commercial paper towels, toilet paper, soaps, and sanitizers across Greater Montreal.",
      badge: "Automated Supply Chain",
      title: "Restocking of Consumables",
      subtitle: "Proactive, zero-stockout replenishment of essential restroom hygiene supplies and commercial dispensers.",
      heroImage: "/images/otis-hero-consumables.jpg",
      overview: "Running out of paper towels or soap in a commercial facility damages client confidence instantly. OTIS integrates inventory tracking directly into your daily janitorial cadence, preventing stockouts with automated replenishment.",
      scopeHeading: "Consumable Supply Management",
      scopeItems: [
        { title: "Commercial Paper Towel Stocking", desc: "Continuous monitoring and restocking of rolled, multifold, and centerpull paper towels in all restrooms and kitchenettes." },
        { title: "Toilet Tissue Dispenser Inspection", desc: "Replenishing standard and jumbo bath tissue dispensers to ensure restrooms are never left empty." },
        { title: "Touchless Foam Soap Refills", desc: "Refilling antimicrobial and gentle foam soaps, verifying dispenser battery levels and nozzle flow." },
        { title: "Hand Sanitizer Stations", desc: "Maintaining wall-mounted and freestanding alcohol sanitizer dispensers at building entryways and elevator lobbies." },
        { title: "Waste Liners & Odor Neutralizers", desc: "Stocking heavy-duty trash liners and rotating air-neutralizing fragrance blocks in high-traffic restrooms." }
      ],
      specsHeading: "Supply Logistics",
      specs: [
        { label: "Supply Model", value: "Direct Wholesale at Cost + 20% Markup, or Client-Provided" },
        { label: "Stockout Prevention", value: "Weekly Inventory Audits by Shift Supervisor" },
        { label: "Product Standard", value: "Commercial Recycled Paper & Sustainable Soaps" },
        { label: "Billing Simplicity", value: "Single Consolidated Monthly Invoice with Zero Hidden Fees" }
      ],
      faqs: [
        { question: "Can we supply our own paper products?", answer: "Yes. OTIS can either replenish products you purchase directly, or manage wholesale ordering on your behalf with complete transparency." },
        { question: "How do you prevent stockouts during peak weeks?", answer: "Our supervisors maintain safety stock thresholds on-site and log usage weekly in our inventory tracker." },
        { question: "What brands of soap and paper do you support?", answer: "We support all major commercial dispenser systems including Tork, Kimberly-Clark, Cascades Pro, and Georgia-Pacific." },
        { question: "Is there a minimum contract size for restocking?", answer: "Restocking is integrated seamlessly into all recurring commercial cleaning agreements." }
      ]
    },
    fr: {
      metaTitle: "Réapprovisionnement de Consommables Montréal | OTIS",
      metaDesc: "Gestion automatisée des stocks et réapprovisionnement en essuie-mains, papier hygiénique et savons dans le Grand Montréal.",
      badge: "Chaîne d'Approvisionnement",
      title: "Réapprovisionnement de Consommables",
      subtitle: "Gestion proactive et continue des produits d'hygiène et distributeurs sanitaires pour édifices commerciaux.",
      heroImage: "/images/otis-hero-consumables.jpg",
      overview: "Manquer de papier ou de savon dans un établissement corporatif nuit directement à votre image. OTIS intègre la gestion des stocks à vos passages d'entretien ménager pour garantir un approvisionnement sans faille.",
      scopeHeading: "Programme d'Approvisionnement Sanitaire",
      scopeItems: [
        { title: "Essuie-mains commerciaux", desc: "Remplissage continu des distributeurs en rouleaux ou pliés dans tous les blocs sanitaires et aires de pause." },
        { title: "Papier hygiénique standard & jumbo", desc: "Inspection et réapprovisionnement régulier pour éviter toute rupture de stock pendant les heures de pointe." },
        { title: "Recharges de savon à mains", desc: "Remplissage des savons moussants antibactériens et vérification des piles des distributeurs automatiques sans contact." },
        { title: "Bornes de gel désinfectant", desc: "Entretien et remplissage des distributeurs à l'entrée des édifices, halls et paliers d'ascenseurs." },
        { title: "Sacs à rebuts & neutralisants d'odeur", desc: "Approvisionnement en sacs étanches résistants et remplacement des blocs désodorisants." }
      ],
      specsHeading: "Logistique d'Approvisionnement",
      specs: [
        { label: "Modèle", value: "Prix de gros direct avec marge de 20%, ou fourni par le client" },
        { label: "Contrôle des Stocks", value: "Audit hebdomadaire par le superviseur de quart" },
        { label: "Écoresponsabilité", value: "Papiers recyclés certifiés et savons hypoallergéniques" },
        { label: "Facturation", value: "Facture mensuelle unique détaillée sans frais cachés" }
      ],
      faqs: [
        { question: "Pouvons-nous fournir nos propres produits?", answer: "Tout à fait. Nous pouvons utiliser vos stocks existants ou gérer l'achat en gros pour votre compte selon vos préférences." },
        { question: "Comment évitez-vous les ruptures de stock?", answer: "Nos superviseurs appliquent un seuil de stock de sécurité sur place et ajustent les commandes chaque semaine." },
        { question: "Quelles marques de distributeurs prenez-vous en charge?", answer: "Nous gérons les systèmes Cascades Pro, Tork, Kimberly-Clark et Georgia-Pacific sans restriction." },
        { question: "Ce service est-il inclus dans les forfaits d'entretien?", answer: "La manutention et le réapprovisionnement sont intégrés à votre contrat d'entretien régulier." }
      ]
    }
  },

  "carpet-cleaning": {
    slug: "carpet-cleaning",
    category: "service",
    en: {
      metaTitle: "Commercial Carpet Cleaning & Extraction Montreal | OTIS",
      metaDesc: "Deep hot-water commercial carpet extraction and stain removal in Montreal. Eliminates winter salt tracking, stains, and restores fibers.",
      badge: "Commercial Textile Care",
      title: "Carpet Cleaning & Machine Extraction",
      subtitle: "High-pressure hot water extraction engineered to dissolve winter salt crusts and deeply embedded commercial traffic grime.",
      heroImage: "/images/otis-hero-carpet.jpg",
      overview: "Commercial carpet tiles in Montreal endure months of abrasive calcium chloride and street sludge. OTIS uses industrial hot-water extraction wands to lift contaminants from the base of the carpet backing without soaking or delamination.",
      scopeHeading: "Carpet Restoration Program",
      scopeItems: [
        { title: "Pre-Inspection & Fiber Audit", desc: "Evaluating fiber type (nylon, olefin, wool blend) and identifying high-wear traffic lanes and stubborn stains." },
        { title: "Commercial HEPA Pre-Vacuuming", desc: "Extracting dry particulate soil before water contact to prevent turning dust into slurry." },
        { title: "Targeted Stain Pre-Treatment", desc: "Specialized spot treatment for coffee, tea, ink, grease, and white winter calcium chloride salt crusts." },
        { title: "Dual-Jet Hot Water Machine Extraction", desc: "Injecting heated neutralizing solution at high pressure and immediately recovering with high-CFM suction." },
        { title: "Accelerated Airflow Drying", desc: "Deploying high-velocity centrifugal air movers to ensure carpets dry rapidly for next-day business use." }
      ],
      specsHeading: "Textile Engineering Specs",
      specs: [
        { label: "Extraction Method", value: "Commercial Dual-Jet Hot Water Extraction (Steam Clean)" },
        { label: "Average Dry Time", value: "4 to 6 hours with commercial air movers" },
        { label: "Salt Elimination", value: "Acid-side rinse neutralizes calcium residue" },
        { label: "Indoor Air Quality", value: "Extracts dust mites, pollen, and trapped allergens" }
      ],
      faqs: [
        { question: "How long does it take for carpets to dry?", answer: "With our commercial high-velocity blowers, executive carpets dry within 4 to 6 hours, ready for morning foot traffic." },
        { question: "Can you remove white winter salt stains?", answer: "Yes. We apply a specialized chemical salt neutralizer that dissolves calcium crystals before machine extraction." },
        { question: "Do you clean carpet tiles in modular offices?", answer: "Yes. Our extraction process is calibrated specifically for modular carpet tile backing to prevent adhesive failure." },
        { question: "When are carpet extraction services typically performed?", answer: "We schedule carpet cleanings on Friday evenings or over weekends to ensure completely dry facilities by Monday morning." }
      ]
    },
    fr: {
      metaTitle: "Nettoyage de Tapis Commercial Montréal | OTIS",
      metaDesc: "Extraction à l'eau chaude et détachage en profondeur des tapis commerciaux à Montréal. Élimination des dépôts de sel et assainissement des fibres.",
      badge: "Soins Textiles Commerciaux",
      title: "Nettoyage & Extraction de Tapis",
      subtitle: "Extraction professionnelle à l'eau chaude pour dissoudre les résidus de calcium hivernal et la saleté incrustée.",
      heroImage: "/images/otis-hero-carpet.jpg",
      overview: "Les moquettes et dalles de tapis subissent une rude épreuve lors des hivers montréalais. OTIS déploie des équipements d'extraction à haute puissance pour revitaliser les fibres textiles sans détremper le sous-plancher.",
      scopeHeading: "Protocole d'Entretien Textile",
      scopeItems: [
        { title: "Inspection préalable des fibres", desc: "Identification de la composition textile (nylon, polypropylène) et des zones d'achalandage critiques." },
        { title: "Aspiration préliminaire HEPA", desc: "Extraction des poussières sèches avant tout contact hydrique pour éviter la formation de boue." },
        { title: "Prétraitement ciblé des taches", desc: "Application de détachants spécifiques contre le café, l'encre, les graisses et les traces blanchâtres de sel." },
        { title: "Extraction mécanique à l'eau chaude", desc: "Injection sous pression d'une solution neutralisante et récupération instantanée par aspiration haute succion." },
        { title: "Séchage accéléré par ventilation", desc: "Positionnement de ventilateurs centrifuges pour accélérer le séchage et éviter toute odeur d'humidité." }
      ],
      specsHeading: "Caractéristiques Techniques",
      specs: [
        { label: "Méthode", value: "Extraction par injection-extraction d'eau chaude" },
        { label: "Temps de Séchage", value: "4 à 6 heures avec séchage assisté" },
        { label: "Traitement du Sel", value: "Solution neutralisante pour éliminer le calcium" },
        { label: "Qualité de l'Air", value: "Élimination des acariens et allergènes piégés" }
      ],
      faqs: [
        { question: "Combien de temps faut-il pour que le tapis sèche?", answer: "Grâce à nos turbo-sécheurs, les moquettes sont entièrement sèches et praticables en 4 à 6 heures." },
        { question: "Pouvez-vous faire disparaître les traces blanches de sel?", answer: "Oui, notre neutralisant acide dissout le chlorure de calcium avant le passage de l'extracteur." },
        { question: "Nettoyez-vous les dalles de tapis modulaires?", answer: "Absolument. Nos réglages de pression d'eau préservent l'adhésif des dalles amovibles." },
        { question: "Quel est le meilleur moment pour nettoyer les tapis?", answer: "Le vendredi soir ou le samedi matin est idéal afin de garantir des tapis impeccables et secs le lundi." }
      ]
    }
  },

  "post-renovation": {
    slug: "post-renovation",
    category: "service",
    en: {
      metaTitle: "Post-Renovation Cleaning Montreal | OTIS",
      metaDesc: "Detailed post-construction and post-renovation turnover cleaning for commercial spaces and luxury homes in Greater Montreal.",
      badge: "Turnover & Handover Specialist",
      title: "Post-Renovation & Construction Cleaning",
      subtitle: "Multi-stage airborne dust extraction, adhesive removal, and white-glove readiness for commercial handovers and homes.",
      heroImage: "/images/otis-hero-post-renovation.jpg",
      overview: "Construction dust settles for days after contractors finish. OTIS executes a meticulous top-to-bottom clean: from air vents, ceiling fixtures, and glass down to the baseboards and floors.",
      scopeHeading: "Post-Construction Turnover Scope",
      scopeItems: [
        { title: "Multi-Stage Airborne Dust Extraction", desc: "Vacuuming and wiping down ceiling fixtures, vents, light tracks, and upper ledges with microfibers." },
        { title: "Drywall & Plaster Residue Removal", desc: "Detailed wiping of walls, door jams, trim, and switches to remove fine white drywall powder." },
        { title: "Adhesive, Paint & Silicone Cleanup", desc: "Gentle razor-blade and solvent removal of tape residue, paint spatters, and silicone from glass and tiles." },
        { title: "Cabinet Interior & Millwork Detailing", desc: "Vacuuming inside drawers, kitchen cupboards, utility closets, and wiping shelf surfaces." },
        { title: "Final Floor Wash & Machine Scrub", desc: "Thorough multi-pass hard floor washing to eliminate construction dust haze before tenant walkthrough." }
      ],
      specsHeading: "Handover Specifications",
      specs: [
        { label: "Service Scope", value: "Commercial Suites, Retail Fit-Outs & Luxury Homes" },
        { label: "Equipment Standard", value: "Commercial HEPA Dust Extractors & Squeegee Systems" },
        { label: "Turnaround Time", value: "Rapid 24 to 48 Hour Deployment" },
        { label: "Inspection Ready", value: "Meets architectural inspection handover standards" }
      ],
      faqs: [
        { question: "Do you clean both commercial spaces and homes?", answer: "Yes. We handle commercial tenant lease turnovers, retail fit-outs, and luxury residential post-renovation projects." },
        { question: "How do you prevent drywall dust from settling again?", answer: "We perform multiple cleaning passes with 24-hour settling intervals and use sealed HEPA filtration vacuums." },
        { question: "Can you remove paint splatters from new windows?", answer: "Yes. Our technicians use brass scrapers and specialized glass cleaners that remove paint without scratching glass." },
        { question: "How quickly can you mobilize for a handover deadline?", answer: "We understand construction deadlines and can mobilize emergency turnover crews within 24 to 48 hours in Montreal." }
      ]
    },
    fr: {
      metaTitle: "Nettoyage Après Rénovation Montréal | OTIS",
      metaDesc: "Grand ménage et nettoyage après construction pour commerces, bureaux et habitations dans le Grand Montréal. Livraison clé en main.",
      badge: "Spécialiste Après Chantier",
      title: "Nettoyage Après Rénovation & Chantier",
      subtitle: "Élimination minutieuse de la poussière fine de plâtre, résidus d'adhésif et mise en propreté pour livraison clé en main.",
      heroImage: "/images/otis-hero-post-renovation.jpg",
      overview: "La poussière de chantier s'infiltre dans les moindres recoins. OTIS effectue un nettoyage exhaustif du plafond jusqu'aux planchers pour une occupation immédiate sans traces de poussière.",
      scopeHeading: "Cahier de Charge Après Construction",
      scopeItems: [
        { title: "Extraction de la poussière en hauteur", desc: "Aspiration et essuyage des luminaires, grilles de ventilation, corniches et cadrages." },
        { title: "Élimination de la poussière de gypse", desc: "Lavage des murs, chambranles, portes et plinthes pour faire disparaître le voile blanc de plâtre." },
        { title: "Nettoyage des adhésifs et silicone", desc: "Retrait soigné des résidus de ruban adhésif, éclaboussures de peinture et silicone sur vitres et carrelages." },
        { title: "Intérieur des armoires et tiroirs", desc: "Aspiration et essuyage de chaque étagère, tiroir et meuble intégré dans les cuisines et bureaux." },
        { title: "Lavage des sols en profondeur", desc: "Lavage répété des planchers durs pour éliminer tout voile poussiéreux avant l'inspection finale." }
      ],
      specsHeading: "Normes de Livraison",
      specs: [
        { label: "Domaines", value: "Bureaux, commerces, cliniques et résidences" },
        { label: "Équipements", value: "Aspirateurs HEPA étanches et produits non abrasifs" },
        { label: "Délais", value: "Mobilisation rapide en 24 à 48 heures" },
        { label: "Prêt pour Livraison", value: "Conforme aux exigences d'inspection des architectes" }
      ],
      faqs: [
        { question: "Nettoyez-vous les résidences et commerces?", answer: "Oui, nous nettoyons les espaces commerciaux après aménagement de bail et les résidences rénovées." },
        { question: "Comment évitez-vous que la poussière retombe?", answer: "Nous utilisons des aspirateurs industriels avec filtration HEPA et procédons par étapes successives du haut vers le bas." },
        { question: "Pouvez-vous enlever la peinture sur les vitres neuves?", answer: "Oui, nos spécialistes emploient des lames spéciales et des solvants neutres qui ne rayent pas le verre." },
        { question: "Quel est votre délai d'intervention pour un chantier?", answer: "Nous pouvons dépêcher une équipe dédiée en 24 à 48 heures pour respecter vos échéanciers de livraison." }
      ]
    }
  },

  "window-cleaning": {
    slug: "window-cleaning",
    category: "service",
    en: {
      metaTitle: "Interior Window Cleaning Montreal | OTIS",
      metaDesc: "Professional streak-free interior window cleaning, glass partition washing, and sill detailing for corporate offices in Montreal.",
      badge: "Interior Glass Maintenance",
      title: "Cleaning of Window Interiors",
      subtitle: "Streak-free squeegee care for interior glass facades, conference partitions, sidelights, and sill detailing.",
      heroImage: "/images/otis-hero-windows.jpg",
      overview: "Smudged glass walls and dusty sills project neglect in executive spaces. OTIS delivers crystal-clear, streak-free interior glass cleaning using professional squeegee techniques and neutral cleaning solutions.",
      scopeHeading: "Interior Glazing Scope",
      scopeItems: [
        { title: "Conference Room Glass Partitions", desc: "Washing full-height interior glass walls and doors, removing fingerprints, grease, and smudges." },
        { title: "Interior Perimeter Window Panes", desc: "Streak-free squeegee washing of the inside glass surfaces of exterior window walls." },
        { title: "Architectural Sidelights & Entry Glass", desc: "Polishing entry vestibule glass, sidelights, and transoms for a flawless first impression." },
        { title: "Track, Frame & Sill Detailing", desc: "Wiping aluminum window frames, dusting blinds, and vacuuming debris from sill tracks." },
        { title: "Adhesive & Decal Removal", desc: "Careful removal of temporary signage adhesive, sticker residue, and tape from glass partitions." }
      ],
      specsHeading: "Glass Care Specifications",
      specs: [
        { label: "Technique", value: "Professional Squeegee & Microfiber Scrubbers" },
        { label: "Solution", value: "Zero-Residue Neutral Glass Chemistries (No Ammonia)" },
        { label: "Target Surfaces", value: "Interior Glass Walls, Sidelights, Doors & Perimeter Glass" },
        { label: "Disruption Level", value: "Zero Disruption — Fast, Quiet, Drip-Free Execution" }
      ],
      faqs: [
        { question: "Do you clean exterior windows?", answer: "Our focus is strictly on interior glass, partitions, and the interior faces of perimeter windows." },
        { question: "Do you leave water streaks on office furniture or carpets?", answer: "Never. We use professional drip-free window buckets, microfiber drop cloths, and edge detailing towels." },
        { question: "How often should office interior glass be cleaned?", answer: "Conference room partitions benefit from bi-weekly or monthly detailing depending on meeting room frequency." },
        { question: "Can this be scheduled during regular cleaning shifts?", answer: "Yes. Interior window cleaning is seamlessly integrated into recurring commercial maintenance programs." }
      ]
    },
    fr: {
      metaTitle: "Lavage de Vitres Intérieures Montréal | OTIS",
      metaDesc: "Lavage professionnel et sans traces des vitres intérieures, cloisons vitrées de bureaux et impostes à Montréal.",
      badge: "Soins des Vitrages Intérieurs",
      title: "Lavage de Vitres Intérieures",
      subtitle: "Nettoyage éclatant et sans traces des cloisons vitrées de bureaux, portes en verre et cadrages.",
      heroImage: "/images/otis-hero-windows.jpg",
      overview: "Des cloisons vitrées couvertes de traces de doigts ternissent l'allure d'un bureau. OTIS offre un service de lavage de vitres intérieures minutieux garantissant une transparence cristalline sans gouttes ni marques.",
      scopeHeading: "Cahier des Charges Vitrages",
      scopeItems: [
        { title: "Cloisons vitrées de salles de réunion", desc: "Nettoyage complet des baies vitrées intérieures, élimination des traces de doigts et reflets gras." },
        { title: "Faces intérieures des fenêtres périmétriques", desc: "Lavage au mouilleur et raclette professionnelle des vitres extérieures vues de l'intérieur." },
        { title: "Portes vitrées et impostes d'entrée", desc: "Lustrage des portes d'entrée de bureau et vitrages architecturaux pour un accueil soigné." },
        { title: "Dépoussiérage des cadrages et seuils", desc: "Essuyage des moulures d'aluminium et dépoussiérage des rebords de fenêtres." },
        { title: "Retrait des résidus d'adhésifs", desc: "Élimination des marques de ruban adhésif et traces d'affichage temporaire sur le verre." }
      ],
      specsHeading: "Normes Opérationnelles",
      specs: [
        { label: "Technique", value: "Mouilleur microfibre et raclettes en laiton de précision" },
        { label: "Produits", value: "Solution neutre sans ammoniaque et sans résidu" },
        { label: "Surfaces", value: "Cloisons de bureaux, portes en verre, baies intérieures" },
        { label: "Discrétion", value: "Intervention rapide, silencieuse et sans égouttement" }
      ],
      faqs: [
        { question: "Faites-vous le lavage des vitres extérieures?", answer: "Notre service se concentre sur les vitres intérieures, cloisons vitrées et la face intérieure des fenêtres." },
        { question: "Y a-t-il des risques de gouttes d'eau sur les tapis?", answer: "Non. Nos techniciens utilisent des toiles de protection et des raclettes de précision pour éviter tout débordement." },
        { question: "À quelle fréquence faut-il laver les vitres de bureaux?", answer: "Les cloisons de salles de réunion sont généralement nettoyées toutes les deux semaines ou chaque mois." },
        { question: "Ce service peut-il être inclus dans notre forfait régulier?", answer: "Oui, le lavage des vitres intérieures s'intègre harmonieusement à nos ententes mensuelles." }
      ]
    }
  }
};

export const sectorsData: Record<string, SubpageData> = {
  "clinic-cleaning": {
    slug: "clinic-cleaning",
    category: "sector",
    en: {
      metaTitle: "Medical & Dental Clinic Cleaning Montreal | OTIS",
      metaDesc: "Specialized clinical sanitation for medical offices, dental clinics, and healthcare suites across Montreal. Strict cross-contamination controls.",
      badge: "Clinical Hygiene Standard",
      title: "Medical & Dental Clinic Cleaning",
      subtitle: "Sterilization-grade surface sanitation and clinical infection-prevention protocols for Montreal healthcare suites.",
      heroImage: "/images/otis-hero-clinic.jpg",
      overview: "Clinical facilities require stringent, verifiable cleaning standards. OTIS operators use hospital-grade neutral disinfectants, color-coded microfiber systems, and strict protocols to protect patients and medical practitioners.",
      scopeHeading: "Clinical Sanitization Scope",
      scopeItems: [
        { title: "Waiting Room & Reception Disinfection", desc: "Sanitizing check-in counters, card terminals, waiting chairs, and entry touchpoints." },
        { title: "Operatory & Examination Room Care", desc: "Detailed wiping of exam tables, cabinetry, sink fixtures, and clinical lighting switches." },
        { title: "Color-Coded Microfiber Protocol", desc: "Strict separation of red (restroom), blue (general), and yellow (exam room) cloths to eliminate cross-contamination." },
        { title: "Clinical Floor Disinfection", desc: "Neutral antibacterial floor washing to eliminate contaminants and maintain hygiene." },
        { title: "Bio-Safety Compliance", desc: "Strict alignment with CNESST and Quebec healthcare sanitation guidelines." }
      ],
      specsHeading: "Clinical Protocol Specifications",
      specs: [
        { label: "Disinfection Grade", value: "Health Canada DIN Certified Hospital Disinfectants" },
        { label: "Cross-Contamination Ban", value: "Quad-Zone Color-Coded Microfiber Protocol" },
        { label: "Chemical Safety", value: "Non-Toxic, Neutral pH, Low-Odor Formulations" },
        { label: "Staff Training", value: "Trained in WHMIS/SIMDUT & Medical Hygiene Protocols" }
      ],
      faqs: [
        { question: "Do you clean dental operatories?", answer: "Yes. We clean non-critical operatory contact surfaces, cabinets, counters, and floors. We do not handle patient instruments." },
        { question: "What chemicals do you use in exam rooms?", answer: "We use hospital-grade disinfectants certified by Health Canada with proven kill claims for bacteria and viruses." },
        { question: "Can you accommodate evening clinic hours?", answer: "Yes. Most clinics operate until 7:00 or 8:00 PM; we begin our sanitization rounds immediately after patients leave." },
        { question: "Are your cleaners trained in bio-hazard protocols?", answer: "Yes. Our cleaners are trained in infection control protocols and CNESST workplace health standards." }
      ]
    },
    fr: {
      metaTitle: "Nettoyage de Cliniques Médicales et Dentaires Montréal | OTIS",
      metaDesc: "Désinfection et entretien de cliniques médicales, dentaires et centres de santé à Montréal. Protocoles anti-contamination stricts.",
      badge: "Protocole Sanitaire Médical",
      title: "Cliniques Médicales & Dentaires",
      subtitle: "Désinfection de grade clinique et prévention des infections pour les cabinets de santé du Grand Montréal.",
      heroImage: "/images/otis-hero-clinic.jpg",
      overview: "Les cliniques requièrent une rigueur absolue. OTIS applique un système de microfibres avec code de couleurs et des désinfectants homologués par Santé Canada pour protéger patients et soignants.",
      scopeHeading: "Cahier des Charges Clinique",
      scopeItems: [
        { title: "Salle d'attente et comptoir d'accueil", desc: "Désinfection des comptoirs, terminaux de paiement, chaises d'attente et poignées." },
        { title: "Salles d'examen et opératoires", desc: "Assainissement des plans de travail, éviers, chaises d'examen et interrupteurs." },
        { title: "Microfibres à code de couleurs", desc: "Séparation stricte (rouge pour sanitaires, jaune pour examens, bleu pour bureaux) pour éliminer toute contamination croisée." },
        { title: "Lavage des sols avec désinfectant", desc: "Lavage antibactérien des sols durs avec détergents hospitaliers à pH neutre." },
        { title: "Conformité santé et sécurité", desc: "Respect strict des normes CNESST et du SIMDUT." }
      ],
      specsHeading: "Normes Cliniques",
      specs: [
        { label: "Désinfectants", value: "Homologués avec numéro DIN de Santé Canada" },
        { label: "Anti-Contamination", value: "Code de couleurs strict à 4 zones distinctes" },
        { label: "Sécurité Chimique", value: "Formules sans émanations fortes, non toxiques" },
        { label: "Personnel", value: "Formé aux protocoles sanitaires québécois" }
      ],
      faqs: [
        { question: "Nettoyez-vous les salles d'examen dentaire?", answer: "Oui, nous nettoyons les comptoirs, chaises, sols et surfaces hors champs stériles d'instruments." },
        { question: "Quels désinfectants utilisez-vous?", answer: "Nous employons des désinfectants de grade hospitalier avec numéro DIN actif de Santé Canada." },
        { question: "Pouvez-vous intervenir tard en soirée?", answer: "Oui, nous ajustons notre horaire dès la fermeture des consultations pour que la clinique soit prête au matin." },
        { question: "Vos équipes connaissent-elles le SIMDUT?", answer: "Tous nos préposés détiennent leur formation SIMDUT et respectent les règles de la CNESST." }
      ]
    }
  },

  "retail-cleaning": {
    slug: "retail-cleaning",
    category: "sector",
    en: {
      metaTitle: "Commercial Retail & Boutique Cleaning Montreal | OTIS",
      metaDesc: "Showroom-ready cleaning for retail stores, boutiques, and commercial venues across Montreal. Floor luster and display glass care.",
      badge: "Retail Experience Standards",
      title: "Retail Stores & Commercial Boutiques",
      subtitle: "Showroom-ready presentation, high-luster floor maintenance, and streak-free display glass care.",
      heroImage: "/images/otis-hero-retail.jpg",
      overview: "Retail spaces require immaculate visual appeal. OTIS ensures display glass is crystal clear, floors are polished to reflect light, and fitting rooms are hygienic and inviting before doors open to customers.",
      scopeHeading: "Retail Maintenance Scope",
      scopeItems: [
        { title: "Storefront & Display Glass Polishing", desc: "Streak-free washing of exterior display windows and interior showcases." },
        { title: "High-Traffic Hard Floor Maintenance", desc: "Daily dust mopping, scuff mark removal, and damp washing for customer walkways." },
        { title: "Fitting Room Sanitation", desc: "Dusting mirrors, wiping hooks and bench seating, and vacuuming changing stall floors." },
        { title: "Point of Sale & Counter Hygiene", desc: "Sanitizing checkout stations, acrylic shields, payment terminals, and wrap desks." },
        { title: "Pre-Opening Readiness Audit", desc: "Completing shifts well before store opening hours to guarantee pristine presentation." }
      ],
      specsHeading: "Retail Operations",
      specs: [
        { label: "Shift Cadence", value: "Early Morning (pre-opening) or Late Night" },
        { label: "Floor Detailing", value: "Daily scuff removal & high-speed burnishing" },
        { label: "Glass Cleanliness", value: "Streak-free optical clarity on display cases" },
        { label: "Locations Served", value: "Downtown Montreal, Sainte-Catherine, Mile End" }
      ],
      faqs: [
        { question: "Can cleaning occur early in the morning before opening?", answer: "Yes. Many retailers prefer a 6:00 AM or 7:00 AM shift so the boutique is fresh when staff arrive." },
        { question: "Do you clean high-end boutique display cases?", answer: "Yes. We use lint-free microfibers and residue-free glass cleaners specifically safe for luxury showcases." },
        { question: "How do you handle black scuff marks from boots?", answer: "Our floor technicians use neutral spot removers and high-speed buffing pads to erase scuffs daily." },
        { question: "What is your coverage in Montreal retail districts?", answer: "We serve commercial corridors across Downtown, Old Montreal, Westmount, and the West Island." }
      ]
    },
    fr: {
      metaTitle: "Nettoyage de Commerces et Boutiques Montréal | OTIS",
      metaDesc: "Entretien ménager pour magasins, commerces de détail et boutiques de luxe à Montréal. Planchers éclatants et vitrines impeccables.",
      badge: "Standard Commerces & Boutiques",
      title: "Commerces de Détail & Boutiques",
      subtitle: "Mise en valeur de vos espaces de vente, vitrines éclatantes et entretien rigoureux des planchers commerciaux.",
      heroImage: "/images/otis-hero-retail.jpg",
      overview: "L'expérience client commence dès la vitrine. OTIS garantit des planchers sans marques de souliers, des cabines d'essayage soignées et des comptoirs d'accueil accueillants avant l'ouverture de votre commerce.",
      scopeHeading: "Cahier des Charges Commerce",
      scopeItems: [
        { title: "Vitrines et présentoirs en verre", desc: "Lavage sans traces des vitrines extérieures et meubles présentoirs intérieurs." },
        { title: "Entretien des planchers achalandés", desc: "Élimination des marques de semelles, aspiration et lavage humide lustré." },
        { title: "Cabines d'essayage", desc: "Nettoyage des miroirs, désinfection des bancs et aspiration des moquettes." },
        { title: "Comptoirs caisse & terminaux", desc: "Assainissement des zones d'encaissement et terminaux de paiement." },
        { title: "Horaires pré-ouverture", desc: "Interventions matinales ou nocturnes pour une livraison impeccable avant l'arrivée des clients." }
      ],
      specsHeading: "Spécifications Magasins",
      specs: [
        { label: "Horaires", value: "Tôt le matin (dès 6 h) ou en soirée après fermeture" },
        { label: "Sols", value: "Élimination quotidienne des traces noires et lustrage" },
        { label: "Vitrages", value: "Clarté optique sans traces sur vitrines" },
        { label: "Secteurs", value: "Rue Sainte-Catherine, Vieux-Montréal, Mile End" }
      ],
      faqs: [
        { question: "Pouvez-vous intervenir avant l'ouverture du magasin?", answer: "Oui, de nombreux commerces choisissent une intervention matinale vers 6 h ou 7 h pour un magasin prêt pour la clientèle." },
        { question: "Nettoyez-vous les présentoirs délicats?", answer: "Oui, nous employons des microfibres non pelucheuses et des produits neutres doux pour le verre et le bois verni." },
        { question: "Comment traitez-vous les traces de bottes en hiver?", answer: "Nos préposés utilisent des neutralisants de sel et des disques de polissage pour effacer les traces tenaces." },
        { question: "Desservez-vous les artères commerciales montréalaises?", answer: "Oui, nous couvrons le centre-ville, Westmount, le Mile End et l'Ouest-de-l'Île." }
      ]
    }
  },

  "condo-cleaning": {
    slug: "condo-cleaning",
    category: "sector",
    en: {
      metaTitle: "Condo Common Area Cleaning Montreal | OTIS",
      metaDesc: "Reliable janitorial care for condominium syndicates and multi-unit residential atriums, lobbies, and elevators in Montreal.",
      badge: "Residential Common Elements",
      title: "Condominium Common Elements & Atriums",
      subtitle: "High-standard janitorial maintenance for Montreal condo syndicates, residential lobbies, and elevator banks.",
      heroImage: "/images/otis-hero-condo.jpg",
      overview: "Condo syndicates require consistent, reliable cleaners who respect residents and protect multi-million dollar building assets. OTIS maintains lobbies, elevators, fitness centers, and corridors with pride.",
      scopeHeading: "Condo Maintenance Program",
      scopeItems: [
        { title: "Main Lobby & Vestibule Care", desc: "Daily vacuuming of walk-off mats, winter salt removal, and entrance door glass polishing." },
        { title: "Elevator Detailing", desc: "Polishing stainless steel panels, sanitizing button keypads, and vacuuming cab flooring." },
        { title: "Residential Corridors", desc: "HEPA vacuuming of hallway carpets, baseboard dusting, and emergency exit stairwell sweeping." },
        { title: "Amenity & Fitness Rooms", desc: "Disinfection of exercise equipment, wipe-down of mirrors, and restroom sanitization." },
        { title: "Refuse & Chute Rooms", desc: "Disinfection of trash chute handles, floor mopping, and recycling room maintenance." }
      ],
      specsHeading: "Syndicate Requirements",
      specs: [
        { label: "Contract Partner", value: "Condominium Syndicates & Property Managers" },
        { label: "Winter Protocol", value: "Calcium salt barrier & daily vestibule extraction" },
        { label: "Elevator Care", value: "Grain-aligned stainless steel restoration" },
        { label: "Frequency", value: "3x, 5x, or 7x Days per Week" }
      ],
      faqs: [
        { question: "Do you report directly to the syndicate board?", answer: "Yes. We provide monthly activity logs and direct communication with building managers or condo board presidents." },
        { question: "How do you protect lobbies during slushy winters?", answer: "We implement daily salt-neutralizing passes, mat rotation, and protective runner maintenance." },
        { question: "Are your cleaners respectful of residential quiet hours?", answer: "All operatives are instructed in residential etiquette, operating quietly and respectfully in residential hallways." },
        { question: "Do you provide emergency cleanup for water leaks in corridors?", answer: "Yes. Our 24/7 commercial dispatch can deploy water extraction equipment for corridor emergencies." }
      ]
    },
    fr: {
      metaTitle: "Entretien d'Espaces Communs de Copropriétés Montréal | OTIS",
      metaDesc: "Entretien ménager pour syndicats de copropriété, halls d'entrée, ascenseurs et corridors résidentiels à Montréal.",
      badge: "Espaces Communs Résidentiels",
      title: "Copropriétés & Espaces Communs",
      subtitle: "Service d'entretien rigoureux pour syndicats de copropriété, halls d'immeubles et cages d'ascenseurs du Grand Montréal.",
      heroImage: "/images/otis-hero-condo.jpg",
      overview: "Les syndicats de copropriété recherchent la constance et le respect des résidents. OTIS assure l'entretien quotidien des halls, ascenseurs et corridors pour valoriser le patrimoine immobilier des copropriétaires.",
      scopeHeading: "Programme pour Copropriétés",
      scopeItems: [
        { title: "Hall d'entrée et vestibules", desc: "Aspiration quotidienne des tapis d'entrée, extraction du sel et lavage des portes vitrées." },
        { title: "Cages d'ascenseurs", desc: "Nettoyage et polissage de l'inox des parois, désinfection des boutons et lavage des planchers." },
        { title: "Corridors et étages", desc: "Aspiration des moquettes de couloirs, dépoussiérage des plinthes et balayage des escaliers d'issue." },
        { title: "Salles d'entraînement et commodités", desc: "Désinfection des appareils d'exercice, nettoyage des miroirs et sanitaires communs." },
        { title: "Salles de chutes à déchets", desc: "Désinfection des poignées de chutes, lavage des sols et rangement des bacs de tri." }
      ],
      specsHeading: "Exigences Syndicats",
      specs: [
        { label: "Interlocuteurs", value: "Syndicats de copropriété et gestionnaires d'immeubles" },
        { label: "Protocole Hivernal", value: "Traitement quotidien contre l'accumulation de calcium" },
        { label: "Inox des Ascenseurs", value: "Polissage dans le sens du grain sans marques grasses" },
        { label: "Fréquence", value: "Ententes de 3, 5 ou 7 jours par semaine" }
      ],
      faqs: [
        { question: "Communiquez-vous avec le conseil d'administration?", answer: "Oui, nous transmettons des rapports d'entretien mensuels et restons en contact direct avec le gestionnaire ou le président du CA." },
        { question: "Comment protégez-vous le hall en période de neige?", answer: "Nous effectuons des lavages neutralisants répétés et veillons à l'assèchement rapide des tapis d'entrée." },
        { question: "Vos préposés respectent-ils la quiétude des résidents?", answer: "Notre personnel respecte scrupuleusement la tranquillité des lieux et évite les bruits inutiles dans les corridors." },
        { question: "Offrez-vous un service d'urgence en cas de dégât d'eau?", answer: "Oui, notre répartition 24/7 peut dépêcher des équipements d'extraction d'eau pour sécuriser les corridors." }
      ]
    }
  },

  "school-cleaning": {
    slug: "school-cleaning",
    category: "sector",
    en: {
      metaTitle: "School & Educational Facility Cleaning Montreal | OTIS",
      metaDesc: "Comprehensive janitorial services for schools, daycares, colleges, and training academies in Greater Montreal. Child-safe, neutral commercial chemistry.",
      badge: "Academic Facility Standards",
      title: "Schools, Colleges & Educational Centers",
      subtitle: "Healthy learning environments through scheduled classroom sanitization, gym floor care, and high-frequency touchpoint disinfection.",
      heroImage: "/images/otis-hero-school.jpg",
      overview: "Educational facilities require disciplined sanitation to protect students and staff. OTIS utilizes commercial neutral cleaning agents, HEPA-filtered vacuum systems, and systematic touchpoint disinfection across classrooms, corridors, cafeterias, and gymnasiums.",
      scopeHeading: "Academic Facility Protocol",
      scopeItems: [
        { title: "Classroom Detailing", desc: "Disinfecting student desks, teacher lecterns, dry-erase boards, and door knobs." },
        { title: "Hallway & Locker Corridors", desc: "High-speed burnishing and dust mopping of expansive corridor floors and locker exteriors." },
        { title: "Cafeteria & Dining Hall Sanitization", desc: "Food-safe surface degreasing, waste sorting, and spill remediation." },
        { title: "Gymnasium Floor Maintenance", desc: "Non-slip sports floor neutral cleaning preserving court finish." },
        { title: "Child-Safe Restroom Disinfection", desc: "Deep bactericidal treatment of sinks, faucets, water fountains, and partitions." }
      ],
      specsHeading: "Educational Compliance",
      specs: [
        { label: "Product Standard", value: "Commercial Neutral Formulations (zero VOCs)" },
        { label: "Security Standard", value: "Clean Criminal Background Vetting on all Staff" },
        { label: "Scheduling", value: "Evening shifts after dismissal (4:00 PM - 11:00 PM)" },
        { label: "Regional Coverage", value: "Montreal, Laval, Longueuil, West Island" }
      ],
      faqs: [
        { question: "Are cleaning products safe around young children?", answer: "Yes, 100% of chemicals used are commercial neutral products that leave no toxic chemical residues or volatile organic compounds (VOCs)." },
        { question: "Are your cleaning crews background checked?", answer: "Yes, every OTIS operative assigned to educational facilities undergoes thorough criminal background verification." },
        { question: "Can you accommodate school holidays and summer deep cleaning?", answer: "Absolutely. We coordinate summer floor stripping, deep window cleaning, and intensive carpet extraction during seasonal breaks." },
        { question: "What is your protocol for water fountains and cafeterias?", answer: "We follow hospital-level disinfection using food-contact safe, non-toxic sanitizers with required dwell times." }
      ]
    },
    fr: {
      metaTitle: "Entretien Ménager pour Écoles et Établissements Scolaires Montréal | OTIS",
      metaDesc: "Services d'entretien ménager pour écoles, garderies, cégeps et centres de formation dans le Grand Montréal. Produits neutres sans COV conformes SIMDUT.",
      badge: "Normes Milieux Éducatifs",
      title: "Écoles, Collèges & Centres Éducatifs",
      subtitle: "Milieux d'apprentissage sains grâce à la désinfection des classes, l'entretien des gymnases et l'élimination des germes.",
      heroImage: "/images/otis-hero-school.jpg",
      overview: "Les établissements scolaires exigent une hygiène exemplaire pour protéger élèves et enseignants. OTIS utilise des produits neutres professionnels sans COV, une filtration HEPA et une désinfection méthodique des pupitres et aires communes.",
      scopeHeading: "Protocole Établissements Scolaires",
      scopeItems: [
        { title: "Entretien des salles de classe", desc: "Désinfection des pupitres d'élèves, bureaux d'enseignants, tableaux et poignées." },
        { title: "Corridors et casiers", desc: "Aspiration industrielle, balayage à sec et lavage lustré des couloirs et façades de casiers." },
        { title: "Cafétérias et aires de repas", desc: "Dégraissage des tables de repas, gestion des matières résiduelles et désinfection alimentaire." },
        { title: "Planchers de gymnase", desc: "Entretien régulier sans glissance préservant le vernis des aires sportives." },
        { title: "Blocs sanitaires adaptés", desc: "Assainissement bactéricide rigoureux des lavabos, robinets, fontaines d'eau et cloisons." }
      ],
      specsHeading: "Exigences Éducatives",
      specs: [
        { label: "Norme Produits", value: "Produits nettoyants neutres sans émanations chimiques" },
        { label: "Sécurité Personnel", value: "Vérification d'antécédents judiciaires pour tout préposé" },
        { label: "Plages Horaires", value: "En soirée après le départ des élèves (16 h à 23 h)" },
        { label: "Couverture", value: "Montréal, Laval, Longueuil et Ouest-de-l'Île" }
      ],
      faqs: [
        { question: "Les produits utilisés sont-ils sécuritaires pour les enfants?", answer: "Oui, nos nettoyants sont des formulations neutres sans composés organiques volatils (COV) ni résidus nocifs." },
        { question: "Vos employés font-ils l'objet d'une vérification judiciaire?", answer: "Absolument, chaque préposé affecté à un milieu scolaire ou de la petite enfance est rigoureusement vérifié." },
        { question: "Pouvez-vous réaliser le grand ménage d'été?", answer: "Oui, nous planifions le décapage/cirage des sols, le lavage des vitres et le nettoyage en profondeur durant les congés scolaires." },
        { question: "Comment traitez-vous les fontaines d'eau et cafétérias?", answer: "Nous appliquons des désinfectants homologués compatibles avec le contact alimentaire avec temps de contact maîtrisé." }
      ]
    }
  },

  "event-cleaning": {
    slug: "event-cleaning",
    category: "sector",
    en: {
      metaTitle: "Event Venue & Gala Post-Event Cleaning Montreal | OTIS",
      metaDesc: "Rapid-turnover venue janitorial services for Montreal galas, trade shows, corporate events, and wedding venues. Pre-event prep and overnight restoration.",
      badge: "Venue Operations Protocol",
      title: "Event Venues, Galas & Exhibition Halls",
      subtitle: "Time-critical venue turnover, overnight deep cleaning, and pre-event presentation detailing across Greater Montreal.",
      heroImage: "/images/otis-hero-event.jpg",
      overview: "High-profile venues operate under unforgiving turnaround deadlines. Whether between corporate exhibitions, wedding receptions, or cultural galas, OTIS deploys coordinated rapid-response janitorial teams to restore venues to immaculate condition overnight.",
      scopeHeading: "Event Turnover Protocol",
      scopeItems: [
        { title: "Rapid Debris & Waste Clearing", desc: "Rapid bag clearing, recycling sorting, and high-volume trash container removal." },
        { title: "Banquet & Ballroom Floor Care", desc: "High-speed scrubbing, spill neutralisation, and spot stain treatment on ballroom carpets and hardwood." },
        { title: "Continuous Restroom Attendant Protocol", desc: "Deep turnover restocking, sanitary fixture wipe-down, and mirror restoration." },
        { title: "Stage & Backstage Sanitization", desc: "Dressing room cleaning, stage surface sweeping, and vendor prep area degreasing." },
        { title: "Next-Morning Delivery Sign-Off", desc: "Comprehensive quality inspection with venue managers prior to morning rehearsals or incoming clients." }
      ],
      specsHeading: "Venue Readiness Specs",
      specs: [
        { label: "Response Window", value: "Overnight Turnarounds (Midnight to 7:00 AM)" },
        { label: "Crew Scalability", value: "Multi-technician clusters for rapid large-sqft clearance" },
        { label: "Equipment Deployed", value: "High-capacity wet vacs, auto-scrubbers & extraction" },
        { label: "Venue Categories", value: "Montreal Art Galleries, Exhibition Halls, Banquet Salons" }
      ],
      faqs: [
        { question: "How quickly can your team turn around a venue between back-to-back events?", answer: "We regularly complete full venue turnovers within 4 to 6 hours overnight between back-to-back event bookings." },
        { question: "Do you provide porters during the actual event?", answer: "Yes, we can provide discreet day-porters or evening restroom attendants to maintain hygiene throughout the event." },
        { question: "What happens if wine or grease spills occur on historic venue floors?", answer: "We dispatch technicians equipped with neutral pH pH-balanced spotters specifically safe for heritage hardwood and polished stone." },
        { question: "Are your teams insured for high-value exhibition spaces?", answer: "Yes, backed by our $2,000,000 commercial liability policy and supervised by senior team leads." }
      ]
    },
    fr: {
      metaTitle: "Nettoyage de Salles d'Événements et Galas Montréal | OTIS",
      metaDesc: "Remise en état rapide et entretien pour salles de réception, galas, expositions et salons à Montréal. Intervention de nuit et rotation éclair.",
      badge: "Protocole Lieux Événementiels",
      title: "Salles d'Événements, Galas & Expositions",
      subtitle: "Remise en état express, nettoyage de nuit et préparation impeccable pour salons et événements corporatifs à Montréal.",
      heroImage: "/images/otis-hero-event.jpg",
      overview: "Les salles événementielles font face à des cadences serrées entre deux réservations. OTIS mobilise des équipes d'intervention rapide de nuit pour évacuer les déchets, récurer les planchers et rendre la salle impeccable pour la prochaine réception.",
      scopeHeading: "Protocole Rotation Événementielle",
      scopeItems: [
        { title: "Débarras express et tri sélectif", desc: "Évacuation des déchets volumineux, tri des matières recyclables et désinfection des poubelles." },
        { title: "Remise en état des planchers de réception", desc: "Lavage haute performance, traitement des déversements de liquides et détachage ciblé." },
        { title: "Hygiène intensive des sanitaires", desc: "Réapprovisionnement complet, désinfection des cuvettes et miroirs sans traces." },
        { title: "Espaces coulisses et vestiaires", desc: "Entretien des loges, balayage des scènes et dégraissage des aires de traiteur." },
        { title: "Constat de livraison matinal", desc: "Validation qualité avec le régisseur de salle avant l'ouverture des portes le matin." }
      ],
      specsHeading: "Spécifications Événements",
      specs: [
        { label: "Plage d'Intervention", value: "Équipes de nuit (minuit à 7 h du matin)" },
        { label: "Déploiement", value: "Équipes modulaires pour grandes superficies" },
        { label: "Matériel", value: "Auto-laveuses industrielles, extracteurs et aspirateurs eau" },
        { label: "Lieux Desservis", value: "Salles de bal, galeries d'art, centres d'exposition" }
      ],
      faqs: [
        { question: "Quel est votre délai pour remettre une salle en état?", answer: "Nous effectuons la remise à neuf complète de salles de 500 à 20 000 pi² en 4 à 6 heures de nuit." },
        { question: "Proposez-vous des préposés durant l'événement?", answer: "Oui, nous pouvons assigner des préposés discrets pour maintenir la propreté des toilettes et des aires de circulation." },
        { question: "Comment traitez-vous les taches de vin ou liquides sur plancher de bois?", answer: "Nos spécialistes disposent de détachants neutres agréés pour préserver les planchers patrimoniaux et pierres polies." },
        { question: "Êtes-vous assurés pour les lieux prestigieux?", answer: "Oui, couverts par notre police de 2 000 000 $ en responsabilité civile." }
      ]
    }
  }
};

export const complianceData = {
  en: {
    metaTitle: "Quebec Regulatory Compliance & Governance | OTIS",
    metaDesc: "OTIS operations adhere strictly to the Quebec CPEEP Decree, CNESST standards, and maintain $2,000,000 commercial liability coverage.",
    badge: "Quebec Statutory Parity",
    title: "Regulatory Compliance & Risk Mitigation",
    subtitle: "Enterprise janitorial governance designed to protect building owners, property managers, and facility executives from legal and labor liability.",
    heroImage: "/images/otis-facility-audit.jpg",
    overview: "In Quebec's commercial property sector, contracting a janitorial provider that violates provincial labor decrees can expose building owners and prime tenants to joint statutory liability. OTIS operates with full transparency, ensuring complete compliance with the Comité paritaire de l'entretien d'édifices publics (CPEEP), CNESST health standards, and comprehensive commercial liability insurance.",
    pillars: [
      {
        title: "Quebec CPEEP Decree Compliance",
        subtitle: "Comité paritaire de l'entretien d'édifices publics",
        desc: "All OTIS janitorial technicians are remunerated in strict accordance with the mandatory wage, pension, and benefit schedules mandated by the Quebec Building Cleaning Decree. We provide official compliance certificates upon request.",
        bulletPoints: [
          "Statutory decree minimum wage compliance across Class A, B, and C buildings",
          "Official parity contribution remittances submitted monthly",
          "Protection against third-party labor liability for property owners"
        ]
      },
      {
        title: "CNESST Workplace Safety & SIMDUT",
        subtitle: "Commission des normes, de l'équité, de la santé et de la sécurité du travail",
        desc: "Safety is ingrained into our daily routines. Every operative completes mandatory WHMIS (SIMDUT) chemical safety training and operates under active CNESST workplace insurance.",
        bulletPoints: [
          "Up-to-date CNESST good standing clearance certificate (Attestation de conformité)",
          "Standardized Safety Data Sheets (FDS) maintained on-site at every facility",
          "Structured personal protective equipment (PPE) protocols"
        ]
      },
      {
        title: "$2,000,000 Commercial Liability Coverage",
        subtitle: "Enterprise Risk Protection",
        desc: "Our operations are backed by a comprehensive $2,000,000 commercial general liability policy covering bodily injury, property damage, keyholder coverage, and bonded operative protection.",
        bulletPoints: [
          "Certificate of insurance issued naming property manager as additional insured",
          "Comprehensive keyholder security protocols with digital sign-in validation",
          "Bonded and background-checked commercial operatives"
        ]
      },
      {
        title: "Commercial Neutral Chemistry & WHMIS Compliance",
        subtitle: "Environmental & Air Quality Integrity",
        desc: "We exclusively deploy neutral commercial detergents and WHMIS/SIMDUT compliant solutions, eliminating hazardous volatile organic compounds (VOCs) and protecting building air quality.",
        bulletPoints: [
          "Neutral pH non-caustic formulations safe for delicate natural stone, vinyl, and terrazzo",
          "Zero toxic fragrances, synthetic chlorine, or carcinogenic aerosol propellants",
          "Air quality protection and low-emission cleaning practices"
        ]
      }
    ],
    auditHeading: "Request Verification Documents",
    auditDesc: "Need compliance proof for your procurement board or building syndicate? We provide copies of our CNESST clearance, CPEEP compliance attestation, and $2M liability certificate within 2 hours.",
    cta: "Request Governance Packet"
  },
  fr: {
    metaTitle: "Conformité Réglementaire et Décret CPEEP Québec | OTIS",
    metaDesc: "Les opérations d'OTIS respectent rigoureusement le Décret de l'entretien d'édifices publics (CPEEP), la CNESST et une couverture d'assurance de 2 000 000 $.",
    badge: "Parité Légale au Québec",
    title: "Conformité Réglementaire & Sécurité Juridique",
    subtitle: "Gouvernance d'entretien commercial conçue pour protéger les propriétaires d'immeubles et gestionnaires immobiliers contre tout risque de responsabilité.",
    heroImage: "/images/otis-facility-audit.jpg",
    overview: "Au Québec, retenir les services d'un fournisseur d'entretien ménager non conforme aux décrets provinciaux expose les donneurs d'ordres à une responsabilité solidaire. OTIS opère en conformité intégrale avec le Comité paritaire de l'entretien d'édifices publics (CPEEP), les exigences de la CNESST et une assurance responsabilité civile complète.",
    pillars: [
      {
        title: "Conformité au Décret CPEEP du Québec",
        subtitle: "Comité paritaire de l'entretien d'édifices publics",
        desc: "Tous les préposés d'OTIS sont rémunérés conformément aux échelles salariales, primes et cotisations obligatoires du Décret sur l'entretien des édifices publics de la région de Montréal.",
        bulletPoints: [
          "Respect rigoureux des taux horaires et avantages du Décret paritaire",
          "Versement mensuel des cotisations et prélèvements officiels",
          "Protection absolue contre la responsabilité solidaire des donneurs d'ouvrage"
        ]
      },
      {
        title: "Normes CNESST & SIMDUT 2015",
        subtitle: "Commission des normes, de l'équité, de la santé et de la sécurité du travail",
        desc: "La santé et la sécurité au travail sont au cœur de nos pratiques. Tout notre personnel détient la formation SIMDUT relative aux produits contrôlés et bénéficie de la couverture active de la CNESST.",
        bulletPoints: [
          "Attestation de conformité CNESST en règle remise sur demande",
          "Fiches de données de sécurité (FDS) tenues à jour sur chaque site",
          "Équipements de protection individuelle (ÉPI) et protocoles de prévention"
        ]
      },
      {
        title: "Assurance Responsabilité Civile de 2 000 000 $",
        subtitle: "Protection Intégrale des Biens Immobiliers",
        desc: "Nos interventions sont adossées à une police de responsabilité civile des entreprises de 2 000 000 $, incluant la responsabilité locative, le bris d'équipement et le cautionnement du personnel.",
        bulletPoints: [
          "Émission d'un certificat d'assurance désignant le gestionnaire comme assuré additionnel",
          "Gestion sécurisée des clés, puces magnétiques et codes d'alarme",
          "Personnel cautionné ayant fait l'objet d'une vérification d'antécédents"
        ]
      },
      {
        title: "Produits Neutres & Conformité SIMDUT 2015",
        subtitle: "Qualité de l'Air Intérieur & Environnement",
        desc: "Nous employons des détergents neutres professionnels conformes aux normes SIMDUT 2015, prévenant toute émanation de composés organiques volatils (COV) dans vos espaces de travail.",
        bulletPoints: [
          "Formulations neutres sans résidus corrosifs pour le terrazzo et les pierres naturelles",
          "Sans parfums synthétiques agressifs, chlore nocif ni aérosols",
          "Préservation de la qualité de l'air intérieur et pratiques à faibles émissions"
        ]
      }
    ],
    auditHeading: "Obtenir le Dossier de Conformité",
    auditDesc: "Vous préparez un appel d'offres ou devez documenter votre syndicat? Nous vous transmettons nos attestations CNESST, CPEEP et certificats d'assurance sous 2 heures ouvrables.",
    cta: "Demander le Dossier de Gouvernance"
  }
};

export const aboutData = {
  en: {
    metaTitle: "About OTIS Commercial Cleaning Montreal | Standards & History",
    metaDesc: "Built on operational discipline and strict Quebec compliance, OTIS provides commercial janitorial and facility maintenance across Greater Montreal.",
    badge: "Montreal Commercial Operations",
    title: "Disciplined Facility Care Engineered in Montreal",
    subtitle: "We reject the subcontracting churn of conventional cleaning brokers. OTIS operates dedicated, vetted crews backed by clear supervisory accountability.",
    heroImage: "/images/otis-hero-about.jpg",
    narrativeHeading: "Our Operating Philosophy",
    narrative: "OTIS was established to solve a widespread frustration among Montreal facility managers: high cleaner turnover, uninspected shifts, and non-compliant labor practices that leave property owners vulnerable. We approach commercial janitorial maintenance as an engineered system—measured through documented checklists, direct supervisor audits, and uncompromised compliance with the Quebec CPEEP Decree.",
    values: [
      {
        title: "No Subcontractor Churn",
        desc: "We deploy our own trained, background-vetted personnel. Your facility receives the same dedicated operatives on every shift."
      },
      {
        title: "24-Hour Cure Guarantee",
        desc: "If any area fails our standards, a supervisor is dispatched within 24 hours to remediate the issue at zero additional cost."
      },
      {
        title: "Strict Keyholder Accountability",
        desc: "All facility keys and electronic fob credentials are tracked via encrypted digital sign-in logs, guaranteeing security."
      },
      {
        title: "Cluster-Based Efficiency",
        desc: "We focus our mobile teams within optimized Montreal corridors (Downtown, Westmount, Saint-Laurent, West Island) ensuring rapid supervisor dispatch."
      }
    ],
    stats: [
      { label: "Commercial Liability", value: "$2M" },
      { label: "CPEEP Decree Compliance", value: "100%" },
      { label: "Guaranteed Cure Window", value: "24h" },
      { label: "Montreal Response", value: "24/7" }
    ]
  },
  fr: {
    metaTitle: "À Propos d'OTIS Entretien Commercial Montréal | Historique & Valeurs",
    metaDesc: "Fondé sur la rigueur opérationnelle et le respect du Décret québécois, OTIS assure l'entretien d'immeubles corporatifs dans le Grand Montréal.",
    badge: "Opérations Commerciales Montréal",
    title: "Une Rigueur d'Entretien Conçue à Montréal",
    subtitle: "Nous refusons le modèle de sous-traitance opaque. OTIS déploie ses propres équipes formées, encadrées par une supervision directe sur le terrain.",
    heroImage: "/images/otis-hero-about.jpg",
    narrativeHeading: "Notre Philosophie Opérationnelle",
    narrative: "OTIS est né du constat d'une insatisfaction fréquente chez les gestionnaires d'immeubles montréalais: roulement incessant de préposés inconnus, manque de contrôle qualité et risques juridiques liés au non-respect des décrets de travail. Nous traitons l'entretien commercial avec méthode: listes de contrôle strictes, inspections de supervision et conformité totale avec le Décret CPEEP.",
    values: [
      {
        title: "Aucune Sous-Traitance Opaque",
        desc: "Nous employons directement notre personnel vérifié et formé. Vos locaux bénéficient des mêmes préposés réguliers à chaque intervention."
      },
      {
        title: "Garantie Correctrice 24 h",
        desc: "Tout détail non conforme signalé est rectifié par un superviseur dans les 24 heures sans frais supplémentaires."
      },
      {
        title: "Gestion Sécurisée des Accès",
        desc: "Chaque trousseau de clés et puce magnétique fait l'objet d'un registre chiffré assurant l'intégrité de vos locaux."
      },
      {
        title: "Circuits d'Intervention Optimisés",
        desc: "Nos équipes opèrent par grappes géographiques (Centre-ville, Westmount, Saint-Laurent, Ouest-de-l'Île) garantissant une réactivité immédiate."
      }
    ],
    stats: [
      { label: "Assurance Responsabilité", value: "2 M$" },
      { label: "Conformité Décret CPEEP", value: "100%" },
      { label: "Délai de Rectification", value: "24 h" },
      { label: "Répartition Montréal", value: "24/7" }
    ]
  }
};

export const contactData = {
  en: {
    metaTitle: "Book a Facility Audit & Quote | OTIS Commercial Cleaning",
    metaDesc: "Request an on-site commercial cleaning proposal in Montreal. Detailed square-footage walkthrough and customized janitorial schedule within 24 hours.",
    badge: "Immediate Dispatch & Bidding",
    title: "Request an On-Site Facility Audit",
    subtitle: "Get a clear, decree-compliant proposal tailored to your square footage, traffic patterns, and operating schedule in Greater Montreal.",
    dispatchPhone: "+1 (438) 935-9725",
    address: "2447 Avenue Madison, Montreal, QC H4B 2T5",
    hours: "Commercial Dispatch: 24/7 Mon-Sun | Office: 8:00 AM - 6:00 PM EST"
  },
  fr: {
    metaTitle: "Demande de Soumission & Audit de Locaux | OTIS Entretien Commercial",
    metaDesc: "Demandez une soumission d'entretien commercial à Montréal. Visite technique de vos locaux et proposition conforme au Décret sous 24 heures.",
    badge: "Répartition & Soumission Rapide",
    title: "Demander une Visite Technique de vos Locaux",
    subtitle: "Obtenez une proposition détaillée conforme au Décret paritaire, adaptée à votre superficie et à vos horaires d'exploitation.",
    dispatchPhone: "+1 (438) 935-9725",
    address: "2447, avenue Madison, Montréal (Québec) H4B 2T5",
    hours: "Répartition d'urgence: 24/7 lun-dim | Bureau: 8 h à 18 h HNE"
  }
};

