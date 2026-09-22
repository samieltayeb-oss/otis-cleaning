# OTIS EN/FR ROUTE MAP
**Architecture:** Option A — Root English + /fr/ French prefix  
**Version:** 2.11  
**Date:** 2026-09-22  
**Domain:** https://www.otiscc.ca/

> [!IMPORTANT]
> This is the canonical source of truth for: language switcher, hreflang, sitemap, QA.
> Every new page must be added here BEFORE implementation.

---

## ARCHITECTURE RATIONALE

Option A (Root EN + /fr/ prefix) was selected because:
- **Zero disruption** to existing indexed root URL (https://www.otiscc.ca/)
- **Native Vercel static mapping** — files map directly via cleanUrls: true
- **Quebec Bill 96 compliance** — full autonomous French web property
- **Clean hreflang** — distinct static paths for en-CA and fr-CA

---

## SITEMAP / ROUTE TABLE

| # | Page Type | English URL | French URL | File (EN) | File (FR) | Status |
|---|---|---|---|---|---|---|
| 1 | Homepage | `/` | `/fr/` | `index.html` | `fr/index.html` | EN: EXISTS / FR: NOT BUILT |
| 2 | Service: Commercial Cleaning | `/services/commercial-cleaning` | `/fr/services/entretien-commercial` | `services/commercial-cleaning.html` | `fr/services/entretien-commercial.html` | NOT BUILT |
| 3 | Service: Office Cleaning | `/services/office-cleaning` | `/fr/services/entretien-bureaux` | `services/office-cleaning.html` | `fr/services/entretien-bureaux.html` | NOT BUILT |
| 4 | Service: Janitorial Services | `/services/janitorial` | `/fr/services/services-concierge` | `services/janitorial.html` | `fr/services/services-concierge.html` | NOT BUILT |
| 5 | Service: Clinic Cleaning | `/services/clinic-cleaning` | `/fr/services/nettoyage-cliniques` | `services/clinic-cleaning.html` | `fr/services/nettoyage-cliniques.html` | NOT BUILT |
| 6 | Service: Retail Cleaning | `/services/retail-cleaning` | `/fr/services/nettoyage-magasins` | `services/retail-cleaning.html` | `fr/services/nettoyage-magasins.html` | NOT BUILT |
| 7 | Service: Post-Renovation | `/services/post-renovation-cleaning` | `/fr/services/nettoyage-apres-renovation` | `services/post-renovation-cleaning.html` | `fr/services/nettoyage-apres-renovation.html` | NOT BUILT |
| 8 | Service: Move-In/Move-Out | `/services/move-in-move-out-cleaning` | `/fr/services/nettoyage-fin-de-bail` | `services/move-in-move-out-cleaning.html` | `fr/services/nettoyage-fin-de-bail.html` | NOT BUILT |
| 9 | Service: Deep Cleaning | `/services/deep-cleaning` | `/fr/services/grand-menage` | `services/deep-cleaning.html` | `fr/services/grand-menage.html` | NOT BUILT |
| 10 | Service: Event Venue Cleaning | `/services/event-venue-cleaning` | `/fr/services/nettoyage-salles-evenements` | `services/event-venue-cleaning.html` | `fr/services/nettoyage-salles-evenements.html` | NOT BUILT |
| 11 | Service: Interior Window Cleaning | `/services/interior-window-cleaning` | `/fr/services/lavage-vitres-interieur` | `services/interior-window-cleaning.html` | `fr/services/lavage-vitres-interieur.html` | NOT BUILT |
| 12 | Service: Floor Maintenance | `/services/floor-maintenance` | `/fr/services/entretien-planchers` | `services/floor-maintenance.html` | `fr/services/entretien-planchers.html` | NOT BUILT |
| 13 | Service: School Cleaning | `/services/school-cleaning` | `/fr/services/entretien-etablissements-scolaires` | `services/school-cleaning.html` | `fr/services/entretien-etablissements-scolaires.html` | NOT BUILT |
| 14 | Service: Condo/Apartment Cleaning | `/services/condo-cleaning` | `/fr/services/entretien-condos` | `services/condo-cleaning.html` | `fr/services/entretien-condos.html` | NOT BUILT |
| 15 | About | `/about` | `/fr/a-propos` | `about.html` | `fr/a-propos.html` | NOT BUILT (currently in SPA) |
| 16 | Pricing | `/pricing` | `/fr/tarifs` | `pricing.html` | `fr/tarifs.html` | NOT BUILT (currently in SPA) |
| 17 | Contact | `/contact` | `/fr/contact` | `contact.html` | `fr/contact.html` | NOT BUILT (currently in SPA) |
| 18 | Quote | `/quote` | `/fr/soumission` | `quote.html` | `fr/soumission.html` | NOT BUILT (currently in SPA) |

### INTERNAL ROUTES (Protected — NOT in sitemap)

| Page | URL | Protection | Sitemap? |
|---|---|---|---|
| Login | `/internal/login` | PIN form | NO |
| Blueprint | `/internal/blueprint` | Middleware + Cookie | NO |
| Command Center | `/internal/command-center` | Middleware + Cookie | NO |
| CRM | `/internal/crm` | Middleware + Cookie | NO |
| ERP | `/internal/erp` | Middleware + Cookie | NO |
| All other /internal/* | `/internal/*` | Middleware + Cookie | NO |

### LEGACY ROUTES (Handled with 301 Redirects)

| Legacy URL | Redirects To | Status |
|---|---|---|
| `/otis-final-v2_11` | `/` | ✅ Done in vercel.json |
| `/otis-final-v2_11.html` | `/` | ✅ Done in vercel.json |
| `/otis-final-v2_8` | NOINDEX or 301→/ | Pending decision |

---

## HREFLANG TEMPLATES

### Homepage (EN) — `index.html` <head>
```html
<html lang="en">
<link rel="canonical" href="https://www.otiscc.ca/">
<link rel="alternate" hreflang="en-CA" href="https://www.otiscc.ca/">
<link rel="alternate" hreflang="fr-CA" href="https://www.otiscc.ca/fr/">
<link rel="alternate" hreflang="x-default" href="https://www.otiscc.ca/">
<meta property="og:url" content="https://www.otiscc.ca/">
<meta property="og:locale" content="en_CA">
<meta property="og:locale:alternate" content="fr_CA">
```

### Homepage (FR) — `fr/index.html` <head>
```html
<html lang="fr">
<link rel="canonical" href="https://www.otiscc.ca/fr/">
<link rel="alternate" hreflang="en-CA" href="https://www.otiscc.ca/">
<link rel="alternate" hreflang="fr-CA" href="https://www.otiscc.ca/fr/">
<link rel="alternate" hreflang="x-default" href="https://www.otiscc.ca/">
<meta property="og:url" content="https://www.otiscc.ca/fr/">
<meta property="og:locale" content="fr_CA">
<meta property="og:locale:alternate" content="en_CA">
```

### Service Page (EN) — e.g. office-cleaning
```html
<html lang="en">
<link rel="canonical" href="https://www.otiscc.ca/services/office-cleaning">
<link rel="alternate" hreflang="en-CA" href="https://www.otiscc.ca/services/office-cleaning">
<link rel="alternate" hreflang="fr-CA" href="https://www.otiscc.ca/fr/services/entretien-bureaux">
<link rel="alternate" hreflang="x-default" href="https://www.otiscc.ca/services/office-cleaning">
```

### Service Page (FR) — e.g. entretien-bureaux
```html
<html lang="fr">
<link rel="canonical" href="https://www.otiscc.ca/fr/services/entretien-bureaux">
<link rel="alternate" hreflang="en-CA" href="https://www.otiscc.ca/services/office-cleaning">
<link rel="alternate" hreflang="fr-CA" href="https://www.otiscc.ca/fr/services/entretien-bureaux">
<link rel="alternate" hreflang="x-default" href="https://www.otiscc.ca/services/office-cleaning">
```

---

## LANGUAGE SWITCHER MAPPING

Each English page must map to exactly one French equivalent, and vice versa.
A visitor on any page and switching language should land on the equivalent page, NOT the homepage.

| From (EN) | To (FR) |
|---|---|
| `/` | `/fr/` |
| `/services/office-cleaning` | `/fr/services/entretien-bureaux` |
| `/services/commercial-cleaning` | `/fr/services/entretien-commercial` |
| `/services/janitorial` | `/fr/services/services-concierge` |
| `/services/clinic-cleaning` | `/fr/services/nettoyage-cliniques` |
| `/services/retail-cleaning` | `/fr/services/nettoyage-magasins` |
| `/services/post-renovation-cleaning` | `/fr/services/nettoyage-apres-renovation` |
| `/services/move-in-move-out-cleaning` | `/fr/services/nettoyage-fin-de-bail` |
| `/services/deep-cleaning` | `/fr/services/grand-menage` |
| `/services/event-venue-cleaning` | `/fr/services/nettoyage-salles-evenements` |
| `/services/interior-window-cleaning` | `/fr/services/lavage-vitres-interieur` |
| `/services/floor-maintenance` | `/fr/services/entretien-planchers` |
| `/services/school-cleaning` | `/fr/services/entretien-etablissements-scolaires` |
| `/services/condo-cleaning` | `/fr/services/entretien-condos` |

---

## SITEMAP.XML RULES

Include ONLY:
- All EN service pages (once built + confirmed)
- All FR service pages (once built + confirmed)
- Homepage EN + FR
- About, Pricing, Contact, Quote (when extracted from SPA)

EXCLUDE:
- /internal/* (all)
- /api/* (all)
- /otis-final-v2_8 (legacy)
- zan-review.html
- ceo-briefing.html
- discovery.html
- execution.html
- ai_modal.html
- chat_widget.html
