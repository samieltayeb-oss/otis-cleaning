# OTIS Operating System - Technical (Codex) Handover
**Context:** This document provides AI coding agents (Codex, Copilot, Cursor) with the absolute "Project Truth." It maps out the entire technical architecture, file structure, API endpoints, and database models of the OTIS Commercial Cleaning platform.

## 1. Global Architecture
The system is built as a highly modular, decoupled architecture:
* **Frontend:** Plain HTML/CSS/JS (Vanilla) ensuring ultra-fast load times. Styled with inline CSS variables and custom utility classes. Hosted on Vercel.
* **Backend:** Vercel Serverless Functions (`/api/*.js`) written in Node.js. Used exclusively to hide secrets (OpenAI, Gemini, Firebase, Odoo, SendGrid).
* **Database:** Firebase/Firestore handles real-time sync for Leads, Invoices, and QA Checklists.
* **ERP Sync:** Real-time XML-RPC synchronization with Odoo ERP.
* **Notification Layer:** Telegram Bot API (Free) for field cleaner dispatch and SMS.

## 2. Directory & File Map
### The User Interfaces
* `index.html` - The Master Executive Blueprint Dashboard (Strategic overview).
* `agent_hub.html` - The "God-View" Master ERP. Contains the CRM, Invoices, Tri-State command center, and Internal Inbox UI.
* `lead_engine.html` - Phase 1: Local Google Places API scraping simulator (Hunter Radar).
* `seo_engine.html` - Phase 7: Local Map Pack citation syndication UI.
* `social_center.html` - Phase 10: Social Media marketing hub. Features cinematic ad posters and a Javascript Lightbox engine.
* `field_app.html` - Phase 8: Mobile Web App for human cleaners. Contains GPS validation and 50-point QA checklist.
* `otis-final-v2_11.html` - The main public-facing landing page, optimized with strict AEO/GEO `<head>` tags.

### The Backend (Vercel Serverless `/api` Directory)
* `api/chat.js` - Proxies chat messages to OpenAI/Gemini to keep API keys off the frontend.
* `api/draft.js` - Valérie's cold-email drafting endpoint.
* `api/firebase.js` - Server-side `firebase-admin` SDK. Initializes the database securely without leaking `serviceAccount` keys to the browser.
* `api/inbound_email.js` - A Webhook endpoint designed to catch `POST` requests from SendGrid's Inbound Parse API. Pipes incoming emails to `agent_hub.html`'s Internal Inbox.
* `api/odoo_sync.js` - Uses `xmlrpc` library to query `res.partner` (CRM) and `account.move` (Invoices) from the Odoo ERP.

### Assets
* `imgs/` - Contains all OTIS branding (`otis-logo.png`) and AI-generated cinematic posters (`otis_ad_*.jpg` and `real_floor_*.jpg`).

## 3. Data Models
### Odoo XML-RPC Models
* `res.partner`: `name`, `email`, `phone`, `city` = 'Montreal', `customer_rank`.
* `account.move`: `name` (Invoice #), `amount_total`, `payment_state`, `invoice_date`.

### Firebase Collections
* `leads`: `{ companyName, address, googleRating, status (pending|approved|rejected), valerieDraft }`
* `internal_inbox`: `{ from_email, subject, body_text, timestamp, ai_draft_reply }`
* `qa_reports`: `{ locationId, cleanerId, check1 (true/false), check2, photos (array) }`

## 4. Current State & Immediate Tasks
The system is currently mocked locally. The Vercel `/api` endpoints return mock JSON data because the `.env` variables have not been populated.
1. **Database Wiring:** Codex must connect the vanilla JS `fetch()` calls in `agent_hub.html` to the `/api/firebase.js` and `/api/odoo_sync.js` endpoints.
2. **Webhook Verification:** Codex must implement cryptographic signature verification in `api/inbound_email.js` to ensure only SendGrid can post emails.
3. **Authentication:** The `agent_hub.html` is currently unprotected. Codex needs to implement basic JWT or Firebase Auth before deployment.

Review this architecture and begin executing the API wiring phase.
