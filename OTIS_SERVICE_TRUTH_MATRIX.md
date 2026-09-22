# OTIS SERVICE TRUTH MATRIX
**Purpose:** Single source of truth for every OTIS service — inventory, status, route, actions  
**Version:** 2.11 Post-Recon  
**Date:** 2026-09-22

---

## SERVICE INVENTORY TABLE

| # | Service Name (EN) | Service Name (FR) | Currently In SPA? | Dedicated Page? | Tier | Hero Image | EN URL (Target) | FR URL (Target) | Indexable? | Duplication? | Action |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Commercial Cleaning | Entretien Ménager Commercial | ✅ (page-srv-commercialclean) | ❌ | A | Needed | `/services/commercial-cleaning` | `/fr/services/entretien-commercial` | YES | Overlaps with Janitorial | EXPAND into dedicated page |
| 2 | Office Cleaning | Entretien de Bureaux | ❌ (sectors modal only) | ❌ | A | Needed | `/services/office-cleaning` | `/fr/services/entretien-bureaux` | YES | Sub of Commercial | NEW dedicated page |
| 3 | Janitorial Services | Services de Conciergerie | ✅ (page-srv-janitorial) | ❌ | A | Needed | `/services/janitorial` | `/fr/services/services-concierge` | YES | Overlaps Commercial | EXPAND into dedicated page |
| 4 | Clinic / Medical Cleaning | Nettoyage de Cliniques | ❌ (sectors modal only) | ❌ | A | Needed | `/services/clinic-cleaning` | `/fr/services/nettoyage-cliniques` | YES | None | NEW dedicated page |
| 5 | Retail / Shop Cleaning | Nettoyage de Commerces | ❌ (sectors modal only) | ❌ | A | Needed | `/services/retail-cleaning` | `/fr/services/nettoyage-magasins` | YES | None | NEW dedicated page |
| 6 | Post-Renovation Cleaning | Nettoyage Après Rénovation | ✅ (page-srv-postconstruction) | ❌ | A | Needed | `/services/post-renovation-cleaning` | `/fr/services/nettoyage-apres-renovation` | YES | None | EXPAND into dedicated page |
| 7 | Move-In / Move-Out | Nettoyage Fin de Bail | ✅ (page-srv-moveinout) | ❌ | A | Needed | `/services/move-in-move-out-cleaning` | `/fr/services/nettoyage-fin-de-bail` | YES | Sub of Deep | EXPAND into dedicated page |
| 8 | Deep Cleaning | Grand Ménage | ✅ (page-srv-deep) | ❌ | A | Needed | `/services/deep-cleaning` | `/fr/services/grand-menage` | YES | Overlaps Move-In/Out | EXPAND into dedicated page |
| 9 | Event Venue Cleaning | Nettoyage Salles d'Événements | ✅ (page-srv-events) | ❌ | A | Needed | `/services/event-venue-cleaning` | `/fr/services/nettoyage-salles-evenements` | YES | Thin content | EXPAND into dedicated page |
| 10 | Interior Window Cleaning | Lavage de Vitres Intérieur | ❌ (add-on pricing only) | ❌ | A | Needed | `/services/interior-window-cleaning` | `/fr/services/lavage-vitres-interieur` | YES | None | NEW dedicated page |
| 11 | Floor Maintenance / Scrubbing | Entretien de Planchers | ✅ (page-srv-floor) | ❌ | B/C | Needed | `/services/floor-maintenance` | `/fr/services/entretien-planchers` | YES | None | EXPAND with rental disclaimer |
| 12 | School / Education Cleaning | Entretien Établissements Scolaires | ❌ (sectors modal only) | ❌ | A | Needed | `/services/school-cleaning` | `/fr/services/entretien-etablissements-scolaires` | YES | None | NEW dedicated page |
| 13 | Condo / Apartment Cleaning | Entretien d'Immeubles Résidentiels | ❌ (sectors modal only) | ❌ | A | Needed | `/services/condo-cleaning` | `/fr/services/entretien-condos` | YES | None | NEW dedicated page |
| 14 | Carpet Services | Nettoyage de Tapis | ✅ (page-srv-carpet) | ❌ | C | Needed | `/services/carpet-cleaning` | `/fr/services/nettoyage-tapis` | DEFER | None | REWRITE with rental disclosure — DEFER page creation |

---

## SERVICES: CONTENT QUALITY SCORES

| # | Service | Current Quality | Missing | Priority |
|---|---|---|---|---|
| 1 | Commercial Cleaning | 5/10 — Thin, overview-only | Sectors, process, pricing, FAQ, hero | HIGH |
| 2 | Office Cleaning | 2/10 — Only in sector modal | Everything | HIGH |
| 3 | Janitorial Services | 6/10 — Adequate scope | FAQ, seasonal content, hero image | HIGH |
| 4 | Clinic Cleaning | 2/10 — Only in sector modal | Everything, compliance-sensitive | HIGH |
| 5 | Retail Cleaning | 2/10 — Only in sector modal | Everything | MEDIUM |
| 6 | Post-Renovation | 7/10 — Covers phases well | Hero image, FAQ, pricing clarity | HIGH |
| 7 | Move-In/Move-Out | 7/10 — Good checklist | Hero image, pricing table | MEDIUM |
| 8 | Deep Cleaning | 7/10 — Good checklist | Hero image, B2B angle | MEDIUM |
| 9 | Event Cleaning | 4/10 — Thin, bulleted | Venue types, scale, timeline, FAQ | MEDIUM |
| 10 | Interior Window Cleaning | 1/10 — Add-on only | Everything | HIGH |
| 11 | Floor Maintenance | 7/10 — Good process copy | Rental disclosure, hero, FAQ | HIGH |
| 12 | School Cleaning | 2/10 — Only in sector modal | Everything, seasonal content | MEDIUM |
| 13 | Condo Cleaning | 2/10 — Only in sector modal | Everything, strata angle | MEDIUM |
| 14 | Carpet Services | 6/10 — Good process copy | Rental disclosure, hero | DEFER |

---

## KEYWORD MAPPING

| # | Service (EN) | Primary EN Keyword | Primary FR Keyword | Secondary EN | Secondary FR |
|---|---|---|---|---|---|
| 1 | Commercial Cleaning | commercial cleaning services montreal | entretien ménager commercial montréal | commercial cleaners montreal | nettoyage commercial montréal |
| 2 | Office Cleaning | office cleaning montreal | entretien de bureaux montréal | corporate office cleaning montreal | service d'entretien ménager bureau montréal |
| 3 | Janitorial | janitorial services montreal | service de conciergerie commerciale montréal | building maintenance services montreal | entretien préventif et récurrent montréal |
| 4 | Clinic Cleaning | medical clinic cleaning montreal | nettoyage de clinique médicale montréal | dental clinic cleaning montreal | désinfection établissement de santé montréal |
| 5 | Retail Cleaning | retail store cleaning montreal | entretien ménager commerce de détail montréal | commercial shop cleaning montreal | nettoyage de magasin montréal |
| 6 | Post-Renovation | post renovation cleaning montreal | nettoyage après rénovation montréal | post construction cleaning montreal | ménage fin de chantier montréal |
| 7 | Move-In/Out | move out cleaning services montreal | ménage fin de bail montréal | apartment turnover cleaning montreal | nettoyage déménagement montréal |
| 8 | Deep Cleaning | deep cleaning services montreal | grand ménage résidentiel montréal | thorough home cleaning montreal | nettoyage en profondeur montréal |
| 9 | Event Cleaning | event venue cleaning montreal | nettoyage salles d'événements montréal | post event cleaning montreal | entretien avant et après événement montréal |
| 10 | Window Cleaning | interior commercial window cleaning montreal | lavage de vitres intérieur commercial montréal | office window cleaning montreal | lavage cloisons vitrées montréal |
| 11 | Floor Maintenance | commercial floor maintenance montreal | entretien de planchers commerciaux montréal | industrial floor scrubbing montreal | décapage et cirage de planchers montréal |
| 12 | School Cleaning | school cleaning services montreal | entretien établissements scolaires montréal | educational facility cleaning montreal | nettoyage école et CPE montréal |
| 13 | Condo Cleaning | condo building cleaning montreal | entretien immeuble à condos montréal | residential common area cleaning montreal | nettoyage aires communes condo montréal |
| 14 | Carpet Cleaning | commercial carpet cleaning montreal (DEFER) | nettoyage de tapis commercial montréal (DEFER) | — | — |

---

## IMAGE ASSETS — CURRENT vs NEEDED

| Service | Current Image in /imgs/ | Hero Image Needed | Hero Filename (Nano Banana) |
|---|---|---|---|
| Office Cleaning | offices.png (✅ present) | photorealistic hero | otis-hero-office-cleaning.jpg |
| Commercial Cleaning | — | photorealistic hero | otis-hero-commercial-cleaning.jpg |
| Clinic Cleaning | Clinics & Medical.png, clinics.png | photorealistic hero | otis-hero-clinic-cleaning.jpg |
| Retail Cleaning | Shops & Businesses.png, shops and businesses.png | photorealistic hero | otis-hero-retail-cleaning.jpg |
| Post-Renovation | — | photorealistic hero | otis-hero-post-renovation-cleaning.jpg |
| Condo Cleaning | Apartments & Condos.png | photorealistic hero | otis-hero-condo-cleaning.jpg |
| Interior Window Cleaning | — | photorealistic hero | otis-hero-window-cleaning.jpg |
| Floor Maintenance | — | photorealistic hero | otis-hero-floor-maintenance.jpg |
| Event Cleaning | Events & Venues.png, events.png | photorealistic hero | otis-hero-event-venue-cleaning.jpg |
| School Cleaning | Schools & Education.png, schools.png | photorealistic hero | otis-hero-school-cleaning.jpg |

### Existing ad images available for reuse:
- `otis_ad_medical.jpg` — clinic angle
- `otis_ad_floors.jpg` — floor maintenance
- `otis_ad_condo.jpg` — residential/condo
- `otis_ad_construction.jpg` — post-renovation
- `otis_ad_equipment.jpg` — Tennant scrubber
- `otis_ad_crew.jpg` — team/commercial
- `otis_ad_night.jpg` — after-hours janitorial
- `otis_ad_restroom.jpg` — restroom / janitorial
- `otis_ad_security.jpg` — bonded/insured trust

---

## CRITICAL FIXES REQUIRED (Before or during page build)

| # | Fix | Location | Priority |
|---|---|---|---|
| 1 | Fix footer phone number — "(514) 555-OTIS" is fake | index.html footer | 🔴 CRITICAL — fix immediately |
| 2 | Remove "Exterior Window Cleaning" from pricing table | index.html pricing section | 🔴 HIGH |
| 3 | Remove "Exterior Power Washing" from pricing table | index.html pricing section | 🔴 HIGH |
| 4 | Change "ISSA Certified" → "ISSA Canada Member" | All pages, footer | 🔴 HIGH |
| 5 | Remove "Medical-Grade Disinfection" language | index.html, clinic modal | 🔴 HIGH |
| 6 | Add canonical + hreflang to index.html | index.html <head> | 🔴 HIGH |
| 7 | Add og:url, og:image, og:type, og:locale | index.html <head> | 🟡 MEDIUM |
| 8 | Update robots.txt — add Sitemap: directive | robots.txt | 🟡 MEDIUM |
| 9 | Update robots.txt — add AI crawler rules | robots.txt | 🟡 MEDIUM |
| 10 | Change section TTL divs → semantic H2 | index.html | 🟡 MEDIUM |
| 11 | Soften "Diamond Mirror Finish" floor copy | index.html floor section | 🟡 MEDIUM |
| 12 | Verify UL Eco-Certified badge legitimacy | index.html footer | 🟡 MEDIUM |
| 13 | Clean up macOS dot-underscore files from /imgs/ | /imgs/ directory | 🟢 LOW |
| 14 | Remove/noindex otis-final-v2_8.html (legacy) | vercel.json | 🟢 LOW |
