# OTIS Routing & Security Map

## Framework & Architecture
- **Framework:** Vanilla HTML/JS/CSS static site with Vercel Serverless Functions (`/api`).
- **Router:** Native file-based routing via Vercel (`cleanUrls: true`).
- **Authentication:** Currently client-side + `sessionStorage` token with a hardcoded fallback (`8842`).
- **Middleware:** None currently exists. Will require Vercel Edge Middleware (`middleware.js`) to secure routes server-side.

## Route Map

### LEGACY / CURRENT (Pre-Migration)
- `/` -> Executive Briefing / Strategic Transformation
- `/otis-final-v2_11` -> Customer-Facing Public Website
- `/agent_hub` -> Command Center (Client-side PIN protected)
- `/*_engine`, `/erp`, `/crm`, `/leads` -> Internal tools exposed at root.

### TARGET (Post-Migration)

#### PUBLIC ROUTES (Canonical)
- `/` -> The canonical customer-facing website (promoted from `otis-final-v2_11`)
- `/api/leads`, `/api/chat`, etc. -> Publicly exposed customer APIs.

#### INTERNAL ROUTES (Protected via HttpOnly Cookie & Middleware)
- `/internal/login` -> Single unified secure access gate.
- `/internal/blueprint` -> Executive Briefing
- `/internal/command-center` -> OTIS Agent Hub / Tri-State Command
- `/internal/bidding-engine` -> `bidding_engine.html`
- `/internal/contract-generator` -> `contract_generator.html`
- `/internal/field-app` -> `field_app.html`
- `/internal/qa-engine` -> `qa_engine.html`
- `/internal/invoice-engine` -> `invoice_engine.html`
- `/internal/restock-engine` -> `restock_engine.html`
- `/internal/seo-engine` -> `seo_engine.html`
- `/internal/social-center` -> `social_center.html`
- `/internal/lead-engine` -> `lead_engine.html`
- `/internal/erp`, `/internal/crm`, `/internal/equipment` -> `erp.html`, `crm.html`, `equipment.html`

#### REDIRECTS (vercel.json)
- `/otis-final-v2_11` -> 301 Permanent Redirect to `/`

#### SERVER / APIs
- `/api/internal/auth` -> New secure server-side login endpoint generating `HttpOnly` session cookie.
- `/api/internal/*` -> Secure endpoints protected via middleware/cookie validation.

## Security Decisions
1. **Server-Side Auth:** The old client-side JS overlay for the PIN will be ripped out. Accessing `/internal/*` without an `HttpOnly` cookie will instantly redirect to `/internal/login`.
2. **PIN Storage:** We will use a Vercel env var `OTIS_INTERNAL_PIN_HASH` (bcrypt/SHA-256) instead of plaintext fallback.
3. **SEO:** `/internal/*` will be excluded from search via `X-Robots-Tag` and `robots.txt`.
