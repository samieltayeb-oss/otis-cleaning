# Comprehensive Janitorial Service Standards and Operational Guidelines
**Organization:** OTIS Commercial Cleaning & Facilities Maintenance  
**Market:** Greater Montreal, Quebec, Canada  
**Document Classification:** Official Operational & Technical Standards (2026–2027)

---

## 1. Scope of Facilities Maintenance Services

OTIS delivers six core facilities maintenance capabilities across commercial, clinical, corporate, educational, and residential environments in Greater Montreal:

### 1.1 Janitorial (Cleaning and Maintenance of Facilities)
* **Scope:** Ongoing scheduled hygiene, maintenance, and surface disinfection for corporate offices, healthcare facilities, commercial properties, and high-traffic public institutions.
* **Core Tasks:**
  * Emptying and sanitizing centralized waste and recycling receptacles with liner replacement.
  * Multi-surface contact point disinfection (handles, switches, elevator panels, access keyboards, desks).
  * Comprehensive restroom sanitation (toilet and urinal descaling, partition sanitization, mirror polishing).
  * Kitchenette, breakroom, and cafeteria surface degreasing and appliance exterior detailing.
  * Routine vacuuming with multi-stage HEPA filtration and microfiber damp mopping.

### 1.2 Restocking of Consumables (Paper Towels / Toilet Paper)
* **Scope:** Proactive inventory control, dispenser inspection, and automated replenishment.
* **Core Tasks:**
  * Continuous monitoring and restocking of rolled or folded commercial paper towels.
  * Toilet paper dispenser replenishment (standard and jumbo roll systems).
  * Liquid/foam hand soap and alcohol-based hand sanitizer replenishment.
  * Odor neutralizing cartridge and urinal block rotation.
  * Transparent inventory logging and consumption tracking.

### 1.3 Stripping, Waxing, and Scrubbing of Floors
* **Scope:** Restorative and protective hard floor maintenance for Vinyl Composition Tile (VCT), terrazzo, linoleum, polished concrete, and epoxy surfaces.
* **Core Tasks:**
  * **Stripping:** Rotary mechanical stripping to completely dissolve aged, discolored wax and embedded winter salt deposits down to the bare substrate.
  * **Neutralization:** Thorough cold-water rinse and pH-neutralizing wash prior to finish application.
  * **Waxing & Finishing:** Multi-coat application of high-solid polymer protective finish (up to 4–5 coats for mirror gloss and high foot-traffic wear resistance).
  * **Scrubbing:** Specialized mechanical scrubbing and deep agitation for routine surface rehabilitation.
  * *(Specialized Additional Service)*: Motorized walk-behind automatic scrubbers deployed for high-volume corridor and warehouse washing as an add-on operational service.

### 1.4 Carpet Cleaning
* **Scope:** Commercial and residential textile fiber rejuvenation and deep contaminant extraction.
* **Core Tasks:**
  * High-power commercial hot-water extraction (steam cleaning) to lift deeply embedded soil and salt crusts.
  * Pre-treatment of high-traffic walkway patterns and stubborn protein/coffee/oil stains.
  * Anti-microbial and fiber-safe neutralizing rinse to prevent re-soiling and fiber browning.
  * Fast-dry airflow optimization.

### 1.5 Post-Renovation Cleaning of Homes & Commercial Facilities
* **Scope:** Rigorous multi-phase turnover cleaning after general contracting, remodeling, or tenant lease build-outs.
* **Core Tasks:**
  * Multi-pass airborne and settled fine particulate dust extraction (drywall dust, sawdust).
  * Paint splatter, silicone, adhesive, and grout haze removal from floors, fixtures, and glass.
  * Cabinet interior and drawer vacuuming and microfiber damp wiping.
  * Baseboard, door frame, switch plate, and light fixture detailing.
  * Final inspection-ready presentation for immediate occupancy and handover.

### 1.6 Cleaning of Window Interiors
* **Scope:** Architectural glass, entrance partitions, sidelights, and interior glazed facades.
* **Core Tasks:**
  * Streak-free squeegee and microfiber washing of all interior window panes.
  * Corporate glass partition, conference room glass walls, and door glass detailing.
  * Deep dusting and wiping of window tracks, sills, and perimeter frames.
  * Removal of fingerprints, smudges, and adhesive stickers.

---

## 2. Optimization Protocols and Documentation Standards

### 2.1 Operational and Design Optimization Standards
* **Visual Design and Readability Enhancements:**
  * **Typography Modernization:** Adopted crisp, standard sans-serif system typography (`Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`) with strict hierarchical scale.
  * **Legibility Focus:** Elevated contrast ratios to meet WCAG AAA standards. Dark charcoal/navy text (`#0F172A`, `#1E293B`) on clean white/light surfaces for documents and operational dashboards.
  * **Elimination of Gridded Backgrounds:** Purged all `.hero-grid` overlays, synthetic dot matrices, and visual background noise. Interfaces now feature clean, uninterrupted, calm surfaces.
  * **White / Professionally Optimized Operational Backgrounds:** Operational modules (bidding engines, invoice generators, execution centers, proposal builders) now utilize high-efficiency white and light slate canvases (`#FFFFFF` / `#F8FAFC`), designed specifically for clarity in daily daylight maintenance and commercial client reviews.
  * **Equipment Positioning Truth:** Eliminated specific brand-name marketing ("Tennant Auto Scrubber"). Machine auto-scrubbing is presented strictly as a **specialized additional service** rather than a primary promotional gimmick.
  * **Wage Rate Discretion:** Omitted all explicit numeric references to "$23.00/hr". Replaced across all interfaces, client documents, and public channels with **"Quebec CPEEP Decree Statutory Parity & Collective Agreement Compliance"**, guaranteeing legal protection against Article 14 joint liability without unnecessary internal wage disclosures.

---

## 3. Functional Editing and Documentation Requirements

### 3.1 System Documentation and Editing Specifications
To eliminate friction between sales estimation, facility auditing, and billing:
* **In-Browser Live Document Editing:**
  * The **Bidding Engine** ([`internal/bidding_engine.html`](file:///c:/Users/mcreg/Desktop/NEXORA%20work/OTIS/internal/bidding_engine.html)) and **Invoice Engine** ([`internal/invoice_engine.html`](file:///c:/Users/mcreg/Desktop/NEXORA%20work/OTIS/internal/invoice_engine.html)) support native, live in-browser text and numerical editing via `contenteditable="true"`.
  * Operators can click directly onto client names, square footages, contract terms, proposal scopes, rates, and invoice line items to make custom adjustments in real time before sending or printing.
* **Standard System Fonts & Tooling:**
  * All documents render in universally available system fonts (`Inter`, `Segoe UI`, `Arial`), preventing font substitution issues, rendering artifacts, or broken layouts across mobile, laptop, and printer drivers.
* **Scope Customization Tooling:**
  * Embedded one-click tools allow operators to:
    * ➕ **Add Custom Scope Items:** Dynamically insert unique facility requirements.
    * 📄 **Reset to Standard 6 Services:** Instant restoration of the verified 6-service scope.
    * 🖨️ **Print / Export Clean PDF:** Standardized `@media print` styling removes navigation bars, sidebars, and UI drawers, outputting a flawless corporate PDF.
