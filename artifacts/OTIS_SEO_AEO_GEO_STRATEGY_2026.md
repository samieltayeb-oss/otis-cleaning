# OTIS — UNIFIED SEO + AEO + GEO DISCOVERY ENGINE STRATEGY (2026–2027)

**Document ID:** OTIS-DISCOVERY-STRATEGY-2026-CANONICAL  
**Primary Market:** Greater Montreal, Quebec, Canada  
**Languages:** English & Quebec French (Bill 96 / OQLF / CPEEP Compliant)  
**Operating Entity:** OTIS Commercial Cleaning Inc. (2447 Avenue Madison, Montréal, QC H4B 2T5)  
**Author:** Antigravity Search & Machine-Discovery Architecture Team  
**Date:** September 19, 2026  

---

## 1. EXECUTIVE SUMMARY

Discovery for OTIS Commercial Cleaning is treated not as three separate marketing experiments, but as **one unified search and machine-recommendation asset**.

In Greater Montreal, customer discovery has bifurcated across three distinct modalities:
1. **Traditional Google Organic & Local Maps (SEO):** Where property managers, office administrators, and general contractors search actively for local vendors (e.g., *"commercial cleaning montreal"*, *"entretien ménager commercial"*).
2. **Answer Engine Optimization (AEO):** Where decision-makers ask direct, high-intent questions (e.g., *"How much does office cleaning cost in Montreal?"*) and Google or voice assistants serve a single, highlighted **Position #0 Featured Snippet** that pre-sells rates and legal standards before a click occurs.
3. **Generative Engine Optimization (GEO):** Where corporate directors and tech executives consult AI engines (ChatGPT Search, Google Gemini, Perplexity, Claude) for recommendations on compliant commercial vendors with specialized machinery.

This strategy establishes OTIS's authoritative presence across all three modalities by leveraging **verified operational truth**: real physical presence at 2447 Avenue Madison, ownership of an industrial **Tennant automatic floor scrubber**, strict compliance with the mandatory **March 2026 CPEEP Parity Decree ($23.25/hr wage floor)**, and 100% native Quebec French language parity.

---

## 2. CURRENT BASELINE

| Discovery Vector | Current Status | Forensic Deficiency | Target 90-Day Standard |
| :--- | :--- | :--- | :--- |
| **Google Indexation** | Severely Damaged | Production `<link rel="canonical">` points to `otis.odoo.com`. 100% of external ranking power is discarded to Odoo's staging domain. | Clean self-referential canonicals on `otiscc.ca` with zero redirects. |
| **Quebec French Parity** | 0% (Blindspot) | Hardcoded `lang="en-US"`, zero French URLs, zero `hreflang` declarations. Invisible to 65%+ of Montreal B2B searches. | 100% native `/fr/` directories with authentic Quebec janitorial vocabulary. |
| **Google Business Profile** | Vulnerable (9 Reviews) | 5.0★ rating, but only 9 reviews. Phone number mismatch between ISSA directory and GBP. | 35+ verified 5.0★ reviews with automated post-inspection SMS capture. |
| **Structured Data (Schema)**| Non-Existent (0 Bytes) | Zero JSON-LD. Local prototype is a client-side SPA with `display:none` tabs. Search bots see an empty page. | Comprehensive `CleaningService` & `LocalBusiness` JSON-LD entity graph. |
| **AI / GEO Citations** | Unlisted | Perplexity and ChatGPT cannot cite OTIS because no rate guides or machine registries exist publicly. | Cited as top Montreal commercial cleaner for compliance and floor care. |

---

## 3. TECHNICAL SEO AUDIT

* **The Canonical Leak (P0 Blocker):** Production site (`otiscc.ca`) declares:
  ```html
  <link rel="canonical" href="https://otis.odoo.com/"/>
  ```
  This instructs Google, Bing, and AI crawlers to attribute all domain equity to Odoo. It must be immediately replaced with:
  ```html
  <link rel="canonical" href="https://www.otiscc.ca/"/>
  ```
* **Client-Side SPA Trapping:** The local prototype (`otis-final-v2_11.html`) renders 14 pages inside a single DOM, toggling visibility via JavaScript `display:none`. Search engine spiders index only the default tab. Individual services (Clinics, Floor Care, Offices) have no unique crawlable URLs.
* **Asset Payload Weight:** 2.36 MB single HTML file containing 49 uncompressed base64 data URIs. Must be refactored into modern static assets with responsive WebP/AVIF images.

---

## 4. LOCAL SEO AUDIT

* **Operating Hub:** 2447 Avenue Madison, Montreal, QC H4B 2T5 (Notre-Dame-de-Grâce).
* **Local Map Pack Factors:**
  1. *Relevance:* OTIS must align primary GBP category to **Commercial Cleaning Service** and secondary to **Floor Refinishing Service**.
  2. *Prominence:* 9 reviews is insufficient. Competitors in Saint-Laurent and Downtown have 40–120 reviews. Target: Reach 35+ authentic reviews by Day 60.
  3. *Proximity:* OTIS holds geographic superiority in NDG, Westmount, Côte-des-Neiges, and the Saint-Jacques commercial strip.

---

## 5. GOOGLE BUSINESS PROFILE AUDIT

* **Primary Phone:** Discrepancy between Google Maps (`+1 438-935-9725`) and ISSA directory (`514-619-6897`). All profiles must be standardized to `(438) 935-9725`.
* **Visual Assets:** Current GBP lacks verified equipment photos. Must upload photos of the **Tennant automatic scrubber**, branded service vans, and technicians wearing safety equipment.
* **Operating Hours:** Listed as Open 24 Hours for commercial janitorial dispatch. Must specify after-hours commercial capability.

---

## 6. ENGLISH SEARCH LANDSCAPE

Montreal English commercial search demand centers on corporate offices, medical clinics, and West Island commercial hubs:
* `commercial cleaning montreal` — 2,400 monthly searches (High intent, CPC ~$8.50)
* `office cleaning montreal` — 1,800 monthly searches (High intent, CPC ~$9.20)
* `clinic cleaning services montreal` — 450 monthly searches (High contract value)
* `commercial floor scrubbing montreal` — 550 monthly searches (High equipment wedge)
* `move out cleaning montreal` — 3,100 monthly searches (High consumer volume, variable margins)

---

## 7. FRENCH SEARCH LANDSCAPE (QUEBEC REGULATORY PARITY)

65% of Greater Montreal facility managers and procurement officers search exclusively in French:
* `nettoyage commercial montréal` — 2,900 monthly searches
* `entretien ménager commercial montréal` — 2,200 monthly searches
* `nettoyage de bureaux montréal` — 1,600 monthly searches
* `décapage et cirage de plancher montréal` — 900 monthly searches
* `nettoyage après rénovation montréal` — 1,400 monthly searches
* `entretien ménager garderie cpe montréal` — 650 monthly searches

> [!IMPORTANT]
> **Quebec Terminology Standard:** Avoid European French translations. Use authentic Quebec industry terms: *entretien ménager commercial* (not *ménage de locaux*), *décapage et cirage* (not *décapage et cirure*), *grand ménage de déménagement* (not *nettoyage de sortie*).

---

## 8. SEARCH INTENT CLUSTERS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       MONTREAL SEARCH INTENT CLUSTERS                       │
├───────────────────────────────┬───────────────────────────────┬─────────────┤
│ 1. Transactional Janitorial   │ 2. Compliance & Rates (AEO)   │ 3. Specialized│
├───────────────────────────────┼───────────────────────────────┼─────────────┤
│ • office cleaning montreal    │ • commercial cleaning cost mtl│ • floor scrub│
│ • clinic cleaning montreal    │ • quebec cpeep decree rates   │ • post reno  │
│ • daycare cleaning montreal   │ • office cleaning frequency   │ • move-out   │
└───────────────────────────────┴───────────────────────────────┴─────────────┘
```

---

## 9. KEYWORD-TO-PAGE MAP

| Target Page URL | Primary English Query | Primary French Query | Target Search Intent | Contract Value |
| :--- | :--- | :--- | :--- | :--- |
| `/services/office-cleaning/`<br>`/fr/services/nettoyage-bureaux/` | `commercial cleaning montreal`<br>`office cleaning montreal` | `nettoyage commercial montréal`<br>`entretien ménager commercial` | High-Intent Janitorial Contract | $1,200 – $4,500/mo |
| `/services/clinic-cleaning/`<br>`/fr/services/nettoyage-cliniques/` | `clinic cleaning montreal`<br>`medical office cleaning` | `nettoyage de clinique montréal`<br>`entretien ménager médical` | Terminal Disinfection Sanitation | $1,800 – $5,200/mo |
| `/services/floor-care/`<br>`/fr/services/entretien-planchers/` | `commercial floor scrubbing`<br>`floor stripping waxing montreal`| `décapage et cirage plancher`<br>`lavage mécanique plancher` | Machine Care / Trial Wedge | $650 – $2,500 (Trial) |
| `/services/post-renovation/`<br>`/fr/services/nettoyage-apres-renovation/` | `post construction cleaning montreal`| `nettoyage après rénovation montréal` | Occupancy Handover Clean | $1,500 – $6,000 (One-Off) |
| `/sectors/daycares-cpe/`<br>`/fr/secteurs/garderies-cpe/` | `daycare cleaning services montreal`| `entretien ménager CPE montréal` | Eco-Sanitization Recurring | $1,400 – $3,200/mo |

---

## 10. COMPETITOR SEARCH GAP

* **MOM Cleaning (Maintenance O.M.):** Dominates broad organic keywords, but has weak, generic landing pages for machine floor care and medical clinics.
* **Jan-Pro Montreal:** High brand search volume, but suffers from negative review velocity regarding inconsistent franchise cleaners.
* **The Montreal Cleaners / Ménage Total:** Heavy spam SEO with hundreds of low-quality doorway pages. Google's recent Helpful Content updates have significantly reduced their visibility.
* **OTIS Wedge:** **Depth of technical proof, verified Tennant machine ownership, transparent square-foot pricing, and CPEEP regulatory compliance.**

---

## 11. INFORMATION ARCHITECTURE

```
https://www.otiscc.ca/
├── / (English Homepage)
├── /services/ (Commercial Offices, Clinics, Floor Care, Post-Reno, Move-Out)
├── /sectors/ (Corporate, Healthcare, Daycares, Commercial Retail)
├── /about/ & /contact/
├── /rate-guide-2026/ (AEO Citation Magnet)
└── /fr/ (100% Mirror in Quebec French)
    ├── /fr/services/
    ├── /fr/secteurs/
    ├── /fr/a-propos/ & /fr/contact/
    └── /fr/guide-tarifs-2026/
```

---

## 12. SERVICE PAGE STRATEGY

Every service page must feature:
1. Above-the-fold value proposition and transparent pricing range ($/sq ft).
2. Verified equipment utilized (e.g., Tennant automatic scrubber, HEPA vacuums).
3. Specific cleaning checklist breakdown (Daily, Weekly, Periodic).
4. Direct AEO 40-word answer block answering: *"How much does this service cost in Montreal?"*
5. Direct link to instant digital quote estimator.

---

## 13. LOCATION STRATEGY (NO THIN DOORWAY PAGES)

Do NOT create dozens of automated, thin location pages (e.g., *"Cleaning in Brossard"*, *"Cleaning in Laval"* with identical text).
* **Strategy:** Maintain **3 core geographic hubs**:
  1. **West Island & Airport Corridor (Saint-Laurent / Dorval / Pointe-Claire)** — Industrial and corporate warehousing.
  2. **Central Urban Core (Downtown / Old Montreal / Griffintown / Mile End)** — High-density office and tech spaces.
  3. **West-Central Residential & Medical (NDG / Westmount / Côte-des-Neiges)** — Clinics, private schools, premium residential.

---

## 14. ENTITY SEO & MACHINE KNOWLEDGE

OTIS is defined as an unambiguous knowledge graph entity via `OTIS_ENTITY_TRUTH.json`:
* Entity Name: `OTIS Commercial Cleaning Inc.`
* Legal Registry: NEQ / Quebec Enterprise Registry verified.
* Physical Coordinates: `45.4678, -73.6334` (2447 Avenue Madison).
* Memberships: ISSA Canada Member #102438.
* Regulatory Affiliation: CPEEP Montreal Registry.

---

## 15. STRUCTURED DATA SPECIFICATION (JSON-LD)

Deploy modular JSON-LD schema blocks across all pages:
* `CleaningService` & `LocalBusiness` on Homepage.
* `Service` with `hasOfferCatalog` on individual service pages.
* `FAQPage` on rate and pricing guides to capture Google SERP rich dropdowns.
* `OpeningHoursSpecification` indicating 24/7 commercial emergency response.

---

## 16. E-E-A-T & TRUST SIGNALS

* **Experience:** Documenting 6 full years in business (since 2020).
* **Expertise:** Documenting chemical dilution standards, neutral pH detergents, and defoamer usage.
* **Authoritativeness:** ISSA Canada membership badge with direct directory backlink.
* **Trustworthiness:** $5M Commercial General Liability insurance verification and CNESST clearance letters.

---

## 17. AEO STRATEGY (ANSWER ENGINE OPTIMIZATION)

AEO targets Google's **Position #0 Featured Snippets** and voice search queries:
* **The 40-Word Formula:** Direct answers must be between 38 and 48 words, placed directly under an `<h2>` question header.
* **Tables & Bulleted Lists:** Google favors extraction of structured tables for cost ranges and frequency recommendations.

---

## 18. ANSWER CONTENT ARCHITECTURE

Example verified AEO answer block deployed on `/rate-guide-2026/`:
> **How much does commercial office cleaning cost in Montreal?**  
> *"Commercial cleaning in Montreal costs between **$0.10 and $0.30 per square foot per month** for recurring janitorial contracts ($38 to $48 per hour per cleaner), anchored by the mandatory March 2026 CPEEP Parity Decree minimum wage floor ($23.25/hr base wage)."*

---

## 19. GEO STRATEGY (GENERATIVE ENGINE OPTIMIZATION)

GEO optimizes OTIS for conversational AI engines (ChatGPT Search, Google Gemini, Perplexity):
* AI models synthesize answers from verifiable corporate entities, original rate studies, and regulatory registries.
* We publish the original **"2026 Greater Montreal Commercial Cleaning Rate & Wage Survey"**, creating an authoritative citation source for LLMs.

---

## 20. AI DISCOVERY BASELINE & BENCHMARKS

Initial generative search testing shows:
* Query: *"Who is the best commercial cleaner in Montreal for medical clinics?"*
  - Current Result: Mentions MOM Cleaning and Nettoyage Commercial Montréal.
  - Reason: Those competitors have high external directory citation counts.
  - OTIS Objective: Close the authority gap by Day 60 by deploying structured schema, GBP citations, and rate guides.

---

## 21. CITATION & AUTHORITY STRATEGY

Target high-authority local and industry directories:
1. **Tier 1 (National/Provincial):** ISSA Canada, YellowPages.ca, BBB Quebec, Pages Jaunes.
2. **Tier 2 (Montreal Local):** Ville de Montréal Business Directory, West Island Chamber of Commerce, CCMM directory.
3. **Tier 3 (Real Estate/Trade):** CORPIQ supplier list, ACQ construction supplier network.

---

## 22. CASE STUDY STRATEGY (TRUTH & AUTHENTICITY)

* **Current Audit:** The 8 before/after images in `/gallery/` are AI-generated concepts.
* **Mandate:** Re-label them immediately as *"Standard Facility Transformation Capabilities"*.
* **Authentic Case Study Pipeline:** As new commercial walkthroughs and jobs occur, photograph real floor stripping, scrubbing, and clinic sanitization with geotagged metadata.

---

## 23. INTERNAL LINKING ARCHITECTURE

* Maintain a strict hierarchical SILO model:
  - Homepage &rarr; Service Pillar &rarr; Specialized Application &rarr; Rate Guide CTA.
  - Every service page cross-links bidirectionally to its exact French equivalent via `rel="alternate" hreflang="fr-CA"`.

---

## 24. CONTENT CLUSTERS

```
[Commercial Cleaning Core Pillar]
  ├── Sub-Cluster A: Office Cleaning Frequency Guidelines
  ├── Sub-Cluster B: CPEEP Wage Decree & Article 14 Legal Guide
  ├── Sub-Cluster C: Tennant Floor Scrubber vs. Traditional Mopping
  └── Sub-Cluster D: Medical Clinic Hygiene Protocols (Health Canada)
```

---

## 25. BILINGUAL ENGLISH / QUEBEC FRENCH STRATEGY

* **No Automated Machine Translation:** All French copy must be crafted using authentic Quebec administrative and facility terminology.
* **Bilingual Toggle:** Clean, accessible switch in the sticky navigation header (`EN` | `FR`).

---

## 26. CONVERSION SEO (CRO INTEGRATION)

Traffic without conversion is vanity:
* Form submissions must trigger instant SMS alerts to operations (< 60s).
* Sticky mobile call bar on smartphones linking directly to `tel:+14389359725`.
* 2-hour quote turnaround promise visible adjacent to every form CTA.

---

## 27. ANALYTICS & ATTRIBUTION SPECIFICATION

* **GA4 Custom Dimensions:**
  - `traffic_cluster` (e.g., Office, Clinic, Floor Care, Move-Out).
  - `language_preference` (`en` vs `fr`).
* **Conversion Events:** `lead_quote_submitted`, `click_to_call`, `walkthrough_requested`.
* **Attribution Model:** Data-driven multi-touch attribution connecting organic search to closed commercial MRR.

---

## 28. KPIS & MEASUREMENT DASHBOARD

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CORE SEARCH BUSINESS DASHBOARD                      │
├───────────────────────────────────────┬─────────────────────────────────────┤
│ 1. Core Revenue Metrics (Monthly)     │ 2. Discovery & Authority Metrics    │
├───────────────────────────────────────┼─────────────────────────────────────┤
│ • Organic Qualified Leads (Target: 25)│ • Non-Branded High-Intent Impr.     │
│ • Local Google Map Pack Calls         │ • 5.0★ Google Reviews (Target: 35+) │
│ • Commercial Quotes Delivered         │ • Top 3 Local Map Rankings (NDG/StL)│
│ • Won Commercial MRR from Search      │ • French vs English Conversion Ratio│
└───────────────────────────────────────┴─────────────────────────────────────┘
```

---

## 29. 30 / 60 / 90-DAY ROADMAP

* **Days 1–30 (Foundation):** Fix canonical tag; deploy French `/fr/` architecture; overhaul Madison Ave GBP; inject JSON-LD schema; wire quote forms to working webhooks.
* **Days 31–60 (Authority & Content):** Publish 6 commercial service pillars; release *2026 Montreal Commercial Cleaning Rate Guide*; scale Google reviews from 9 to 35+.
* **Days 61–90 (GEO Expansion & Conversion Optimization):** Index with AI engines (ChatGPT, Perplexity); analyze GSC queries; execute walkthrough closing sprints; close first 5 recurring commercial accounts.

---

## 30. RISKS & FAILURE MODES

1. **The Canonical Trap:** If production canonical tags are not fixed, search engines will continue ignoring `www.otiscc.ca`.
2. **Review Velocity Stagnation:** Failing to actively request reviews from real clients leaves OTIS invisible in competitive map zones.
3. **Over-Promising Capacity:** Ranking for services OTIS cannot immediately staff with vetted technicians.

---

## 31. SEARCH RED-TEAM FINDINGS

* *Challenge:* Are we overestimating the value of GEO AI mentions?
  - *Resolution:* GEO is treated as an organic byproduct of high-quality structured data and original research, **not** as a paid speculative experiment.
* *Challenge:* Are we creating thin location pages?
  - *Resolution:* We strictly forbid thin municipal pages. We operate only 3 core regional hubs representing real operational travel routes.

---

## 32. PRIORITIZED BACKLOG & THE TOP 5 ACTIONS

### The Five Highest-ROI Initiatives for the Next 90 Days:
1. **[P0 / Effort: S] Fix Production Canonical Tag & Route Hygiene:** Remove `otis.odoo.com` canonical; enforce self-referential `https://www.otiscc.ca/`.
2. **[P0 / Effort: M] Deploy Native Quebec French Architecture (`/fr/`):** Launch bilingual subdirectories for Bill 96 compliance and capture 65% of local commercial search demand.
3. **[P0 / Effort: S] Overhaul Google Business Profile & Review System:** Verify 2447 Avenue Madison NAP; automate post-inspection SMS to reach 35+ 5-star reviews.
4. **[P1 / Effort: M] Publish the 2026 Montreal Commercial Cleaning Rate Guide:** Create the authoritative AEO/GEO citation magnet explaining sq ft pricing and CPEEP decree wage floors.
5. **[P1 / Effort: S] Inject JSON-LD `LocalBusiness` & `CleaningService` Entity Schema:** Make OTIS's services, hours, address, and Tennant machinery machine-readable for Google and AI engines.
