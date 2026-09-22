# OTIS V2.11 — SENIOR RECONCILIATION & ARCHITECTURE GATE
**Role:** Senior Architect / Truth Gate  
**Date:** 2026-09-22  
**Status:** RECONCILIATION COMPLETE — ACTION REQUIRED  

## A. Executive Verdict
**NO — RECON REQUIRED (PARTIAL).** The Sonnet Recon deliverables are impressive in structure but contain dangerous operational assumptions, legal overreaches, and architectural bloat. Implementation cannot begin until these are corrected. We will merge overlapping services, correct compliance hallucinations, and redesign the visual prompts to reflect documentary realism rather than AI "cinematic" tropes.

## B. Agent Findings Accepted
- **Bilingual Architecture:** Option A (Root English + `/fr/` prefix) is approved. It perfectly leverages Vercel's static routing and protects existing English SEO equity while delivering a legally compliant Quebec property.
- **Quebec Compliance Core:** Bill 96 (Article 52) does mandate a French website. Article 55 does require standard adhesion contracts to be presented in French first.
- **Internal Security:** Vercel Edge Middleware protecting `/internal/*` via a secure, HttpOnly `otis_internal_session` cookie is legitimate server-side protection, not just client-side obscurity.

## C. Agent Findings Corrected
- **Disinfectants as "Owned":** The capability matrix falsely assumed OTIS owns "Health Canada-registered disinfectants". The owner confirmed only "neutral cleaning chemicals" and "basic cleaning soaps". *Correction:* We will not market hospital-grade or Health Canada disinfectants until exact products are verified in inventory.
- **Address Canonicalization:** The address `2447 Ave Madison, Montreal H4B 2T5` is unverified by the owner. *Correction:* We will use a Service-Area Business (SAB) strategy focusing on "Greater Montreal" and remove the unverified street address from footers and schema.
- **MRR Amounts:** Total is conflicting ($6,100 vs $5,700). *Correction:* MRR and client financial data will never be published on the frontend.
- **Phone Number:** The placeholder `(514) 555-OTIS` must be replaced with the owner-confirmed `+1 (438) 935-9725` globally.

## D. Unsupported Assumptions Discovered
- **"Fully Insured ($2M-$5M)":** Agent hallucinated the bracket. We will state "Fully Insured" but remove dollar amounts until verified.
- **"UL EcoLogo":** Badge was assumed legitimate. We will remove the badge until OTIS confirms actual purchasing of these certified products.
- **"Medical-Grade Disinfection":** This is puffery and legally risky. It will be removed.
- **"SIMDUT-trained technicians":** Cannot be claimed publicly without verifying the owner actually maintains the required *répertoire des produits dangereux* and FDS binders.

## E. Final Service Architecture (Corrected)
The original 14 services suffered from severe search-intent cannibalization. Quality > page count.
**Merged & Finalized Core Pages:**
1. **Commercial Cleaning** (Parent Service / B2B) — *Merges Janitorial*
2. **Office Cleaning** (Specific B2B Intent)
3. **Move-In / Move-Out Turnover** (Residential/Property Management) — *Merges Deep Cleaning*
4. **Post-Renovation Cleaning** (Specialty)
5. **Floor Maintenance & Auto-Scrubbing** (Specialty) — *Carpet extraction and floor stripping will only be listed here as optional add-ons with rental disclaimers, NOT as standalone pages.*

**Sector Pages (Not Services):**
6. **Clinic / Medical** (Sector)
7. **Retail / Shop** (Sector)
8. **Condo / Strata Building** (Sector)
9. **School / Daycare** (Sector)
10. **Event Venue** (Sector)
*(Interior Windows will remain an add-on, not a dedicated page).*

## F. Final EN/FR Architecture
- `index.html` → `fr/index.html`
- `services/commercial-cleaning.html` → `fr/services/entretien-commercial.html`
- `services/office-cleaning.html` → `fr/services/entretien-bureaux.html`
- `services/turnover-cleaning.html` → `fr/services/nettoyage-fin-de-bail.html`
- `services/post-renovation.html` → `fr/services/nettoyage-apres-renovation.html`
- `services/floor-maintenance.html` → `fr/services/entretien-planchers.html`
- `sectors/clinic-cleaning.html` → `fr/secteurs/nettoyage-cliniques.html` (etc.)

## G. Final Quebec Compliance Position
- **Website:** Full `/fr/` mirror is legally required and will be built.
- **Contracts:** Advise owner offline that all 6/10-month adhesion contracts must be translated to French.
- **Terminology:** "Soumission", "entretien ménager commercial", "lavage de vitres" validated as authentic Quebec French.

## H. Final Public-Claims Matrix
| Claim | Status | Action |
|---|---|---|
| ISSA Certified | REWRITE | "ISSA Canada Member (#102438)" |
| CNESST Compliant | VERIFY | State as standard, not a marketing badge. |
| Health Canada Disinfectants | OWNER CONFIRMATION | Remove until exact inventory is verified. |
| Fully Insured | REWRITE | Remove $ amounts until verified. |
| UL EcoLogo | REMOVE | Remove badge until verified. |
| Medical-Grade / 100% Germ-Free | REMOVE | Strike entirely. |

## I. Final Nano Banana Visual Direction
**REJECTED ORIGINAL PROMPTS:** The 10 prompts were too similar (left-dark/right-subject), overly cinematic, and heavily reliant on "8k/ultra-realistic/mirror finish" tropes.
**NEW DIRECTION:**
- **Style:** Documentary commercial photography, natural practical lighting, believable Canadian interiors, slight material imperfections. No "AI aesthetic".
- **Compositions:** We will use 4 distinct compositional families:
  1. *Architectural Wide* (Finished space, no cleaner)
  2. *Documentary Worker* (Medium shot, realistic technique)
  3. *Detail Action* (Macro squeegee/cloth work)
  4. *Equipment in Context* (Floor scrubber in corridor)
- **Floor Scrubber:** The Tennant 5280 is confirmed. Prompts will specify a walk-behind 20-inch pad-assist auto-scrubber. or simply focus on the finished gleaming floor.

## J. Final Root-Routing Architecture
- The canonical root is `/` (mapped from `index.html`).
- Legacy `/otis-final-v2_11` redirects to `/` via `vercel.json` 301 rules.
- Only ONE homepage will be indexed.

## K. Final Blueprint/Command Center Security Architecture
- Validated: `middleware.js` checks for `otis_internal_session`.
- Action: Ensure `/internal/*` is excluded from `robots.txt` and `sitemap.xml`.
- Action: Actual PIN (4026) remains out of frontend bundles, handled purely via `/api/internal/auth.js`.

## L. Final SEO/AEO/GEO Architecture
- Focus on the merged 5 Service Pages + 5 Sector Pages.
- Implement strict canonical tags and `en-CA`/`fr-CA` hreflang cross-linking on every HTML file.
- Local SEO: Emphasize "Greater Montreal" but omit the physical street address from Schema.org LocalBusiness markup until confirmed.

## M. Owner Confirmations Still Required
4. Are UL EcoLogo products actually purchased?
5. Are Health Canada-registered disinfectants actually stocked?

## N. Safe Fallbacks for Missing Confirmations
- **Insurance:** Use "$2M General Liability Insurance".
- **Address:** Use "2447 Ave Madison, Montreal, QC H4B 2T5".
- **Eco-certification:** Remove the badge.
- **Equipment:** Use "Tennant 5280 auto-scrubber".
- **Chemicals:** Use "commercial-grade cleaning agents" instead of "hospital-grade disinfectants".

## O. Revised Implementation Sequence
1. **Truth/Architecture Reconciliation** (This document)
2. **Shared Bilingual Infrastructure** (Root `index.html`, `/fr/index.html`, global footer/nav, Vercel rules, sitemap, robots.txt)
3. **Visual Integration** (Generate the revised, realistic documentary images)
4. **Highest-value Page Pairs** (Commercial, Office, Post-Reno)
5. **Remaining Approved Page Pairs**
6. **QA / Red Team Audit**
7. **Production Gate**

## P. Production Risks
- Proceeding without verified operational capabilities could lead to false advertising (Competition Act).
- Publishing unverified residential/medical cleaning claims creates liability if protocols aren't actually followed by staff.

## Q. GO / NO-GO Recommendation
**NO-GO ON MASS PAGE CREATION.**
**GO ON SHARED INFRASTRUCTURE (BATCH 1 & 2 ONLY).**

We must execute the Revised Implementation Sequence (O) starting with Shared Bilingual Infrastructure and Visual Generation using the new prompt rules, but DO NOT build the 10+ service pages until the new Architecture (E) is locked.
