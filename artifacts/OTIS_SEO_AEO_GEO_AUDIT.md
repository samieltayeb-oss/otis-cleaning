# OTISCC.CA - Advanced SEO, AEO, and GEO Analytics Report
**Target:** `www.otiscc.ca` (`otis-final-v2_11.html`)
**Focus:** Search Engine Optimization (SEO), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO).

## 1. Traditional SEO (Search Engine Optimization)
**Current Score: 6.5 / 10**
Traditional SEO dictates how you rank on Google's standard blue links for terms like "Montreal commercial cleaning."

### 🔴 The Problems:
1. **Missing Meta Description:** The HTML `<head>` lacks a `<meta name="description" content="...">`. Without this, Google guesses your snippet, lowering click-through rates.
2. **H1 Tag Misalignment:** Your current H1 is `<h1>Professional Cleaning, Done Right.</h1>`. This is a branding phrase, not a search phrase. Google weighs the H1 heavily.
3. **No Open Graph (OG) Tags:** If a user shares the site on LinkedIn or iMessage, no image or title preview will appear because `<meta property="og:...">` tags are missing.

### 🟢 How to Fix It (The Advice):
* Change the H1 to: `<h1>Commercial Cleaning Services in Montreal</h1>` and keep "Done Right" as the H2 subtitle.
* Inject `<meta name="description" content="OTIS provides premium commercial & residential cleaning services in Montreal. Fully compliant, insured, and guaranteed. Get a free quote today.">`.

---

## 2. AEO (Answer Engine Optimization)
**Current Score: 9.0 / 10**
AEO dictates how well voice assistants (Siri/Alexa) and AI summaries extract direct factual answers from your site.

### 🟢 What is Working:
* **The JSON-LD Schema:** The site has a massive `<script type="application/ld+json">` payload defining OTIS as a `CleaningService`. It maps your exact Madison Ave address, phone number, and operating hours. 
* **Clear Service Cards:** The exact services (e.g., "Post-Construction", "Floor Stripping") are wrapped in clean semantic HTML cards, making it easy for AI crawlers to parse your capabilities.

### 🔴 What to Improve:
* **Missing FAQ Schema:** You need to explicitly define FAQs in the JSON-LD payload. For example, explicitly answering "What is the cost of commercial cleaning?" so ChatGPT can scrape the answer.

---

## 3. GEO (Generative Engine Optimization)
**Current Score: 7.5 / 10**
GEO dictates how often Perplexity, Google AI Overviews, and ChatGPT will *cite* OTIS as an authority when answering broader industry queries.

### 🔴 The Problems:
1. **Lack of Factual Density:** Generative AI favors dense, statistical facts over marketing fluff. The current HTML has great marketing copy, but it lacks hard data about the Montreal cleaning industry (e.g., mentioning the CPEEP parity decree, specific sanitization chemical types, or square-footage math).
2. **Authority Citations Missing:** AIs look for trust signals. Linking out to Quebec health codes (CNESST) or the ISSA standard proves to the AI that OTIS is an authoritative source.

### 🟢 How to Fix It (The Advice):
* Create a dedicated `/compliance` page or section explicitly outlining your adherence to the CPEEP $23/h decree. ChatGPT loves citing legal compliance.
* Add dense, specific language to the services. Instead of "We clean floors", use "We use high-RPM Tennant scrubbers with neutral-pH solvents to protect commercial vinyl flooring from Montreal winter calcium."

## Summary & Execution
To push these scores to 10/10, your developer must inject the missing meta tags into the HTML `<head>`, adjust the H1 tag for Montreal local search volume, and inject a FAQ-structured JSON-LD block to capture generative AI traffic.
