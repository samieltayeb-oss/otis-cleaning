# OTIS TECHNICAL & CONVERSION WEBSITE AUDIT (2026)

---

## 1. FORENSIC DOM & ARCHITECTURE DEFECTS (`otis-final-v2_11.html`)

1. **Zero `<form>` Elements in Source Code:**
   * BeautifulSoup parsing confirms: `Total forms: 0`.
   * Input fields are naked `<div>` wrappers. Browsers cannot auto-fill name, email, address, or phone number.
2. **Dead Submission Functions:**
   * `submitQuote()` and `submitContact()` perform string checks and set `display = 'block'` on a local success `<div>`.
   * **Zero network calls exist (`fetch`, `XMLHttpRequest`, `form.action` = 0).**
   * **Result: 100% of quote requests submitted on this prototype are permanently lost.**
3. **Responsive Mobile Truncation (390px Viewport):**
   * CSS `h1 { font-size: clamp(2.8rem, 6.5vw, 5rem); }` overflows on standard iPhone viewports (390px).
   * Headline text *"Professional Cleaning, Done Right."* clips at the right screen margin.
4. **Single-Page Application SEO Blocker:**
   * Navigation relies entirely on JavaScript: `onclick="nav('pricing')"`.
   * Search bots only crawl the homepage DOM. The 13 remaining subpages cannot be indexed or ranked for commercial keywords.
5. **Heavy Base64 Asset Weight:**
   * The file contains 49 base64-encoded images totaling 2.36 MB of uncompressed inline text.
   * Causes First Contentful Paint (FCP) lag on 4G/LTE mobile networks.

---

## 2. PRODUCTION WEBSITE DEFECTS (`otiscc.ca`)
1. **Odoo SaaS Free Tier Footprint:** Displays *"Powered by Odoo - Create a free website"* in footer.
2. **Canonical URL Leak:** `<link rel="canonical" href="https://otis.odoo.com/"/>` directs Google rank equity to Odoo staging domain.
3. **Visible Typography & Layout Errors:** Header menu features typo *"Shops & Buisnesses"*; Residential Services button routes to dead anchor `#`.
