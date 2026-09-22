# 🏢 OTIS Commercial Cleaning — Autonomous ERP & B2B Platform

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel)](https://otis-cleaning.vercel.app)
[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green?style=flat&logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-Firebase%20Firestore-orange?style=flat&logo=firebase)](https://firebase.google.com/)
[![ERP Sync](https://img.shields.io/badge/ERP-Odoo%20XML--RPC-purple?style=flat&logo=odoo)](https://www.odoo.com/)
[![AI Engine](https://img.shields.io/badge/AI-Google%20Gemini%201.5%20Flash-blue?style=flat&logo=google)](https://aistudio.google.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

> **Enterprise B2B facility management platform for Greater Montreal.**  
> Features an autonomous **8-Agent AI workforce**, real-time **Odoo ERP XML-RPC synchronization**, **Firebase Firestore** persistence, **SendGrid Inbound Parse** with cryptographic ECDSA webhook verification, and strict adherence to the **Quebec CPEEP Decree ($23.00/h legal wage)** and **Bill 96 compliance**.

---

## 🌐 Live Production Links

* **Production Website:** [https://otis-cleaning.vercel.app](https://otis-cleaning.vercel.app)
* **Executive ERP Console:** [https://otis-cleaning.vercel.app/agent_hub.html](https://otis-cleaning.vercel.app/agent_hub.html)
  * *Default Executive Access PIN:* `8842`
* **Public Customer Landing Page:** [https://otis-cleaning.vercel.app/otis-final-v2_11.html](https://otis-cleaning.vercel.app/otis-final-v2_11.html)
* **GitHub Repository:** [https://github.com/samieltayeb-oss/otis-cleaning](https://github.com/samieltayeb-oss/otis-cleaning)

---

## 🤖 The 8-Agent Autonomous ERP Architecture

The operational and back-office workload is managed by 8 specialized AI agents accessible through the Executive Command Console:

```mermaid
flowchart TD
    subgraph Sourcing & Sales
        Hunter["🎯 Hunter<br/>(Maps Sourcing)"] --> Valérie["✍️ Valérie<br/>(Sales Drafter)"]
        Clara["💬 Clara<br/>(Inbound Concierge)"] --> Alex["🗺️ Alex<br/>(Route Coordinator)"]
    end

    subgraph Operations & Legal
        Émile["⚖️ Émile<br/>(CPEEP / Bill 96 Sentinel)"]
        Marcus["🧰 Marcus<br/>(CapEx & Machines)"]
        Bruno["🚐 Bruno<br/>(Crew Dispatch)"]
        Sophie["⭐ Sophie<br/>(QA & Upsell Addendums)"]
    end

    subgraph Backend Core
        API["Vercel Serverless /api"]
        DB[("Firebase Firestore")]
        ERP[("Odoo ERP SaaS")]
    end

    Hunter --> API
    Valérie --> API
    Clara --> API
    Bruno --> API
    Sophie --> API
    API <--> DB
    API <--> ERP
```

| Agent | Role | Responsibilities & Integrations |
|---|---|---|
| **🎯 Hunter** | Director of Sourcing | Scrapes high-intent local clinics and corporate offices via Google Places API; verifies CASL compliance. |
| **🗺️ Alex** | Route Coordinator | Enforces the 15-minute geographic density rule across Montreal corridors to prevent travel margin bleed. |
| **✍️ Valérie** | Proposal Architect | Generates high-conversion bilingual cold proposals ("The Pre-Winter Wedge") using Google Gemini AI. |
| **💬 Clara** | Inbound Concierge | 24/7 bilingual web receptionist; parses inbound SendGrid webhooks and drafts rapid contextual replies. |
| **🧰 Marcus** | CapEx Manager | Tracks Tennant industrial auto-scrubbers and amortizes machine rental into bids. |
| **⚖️ Émile** | Compliance Sentinel | Enforces Quebec Bill 96 language laws and CNESST/CPEEP decree co-liability legal shields. |
| **🚐 Bruno** | Crew Dispatch | Dispatches lockbox codes to cleaning crews and coordinates field workers. |
| **⭐ Sophie** | Retention & QA | Tracks 50-point mobile checklist submissions and auto-generates 20% margin consumable addendums. |

---

## 🛠️ Tech Stack & Backend Architecture

* **Frontend:** Plain HTML5, Modern CSS (Custom Glassmorphism, CSS Variables), Vanilla JavaScript (No heavy frameworks, sub-second edge load times).
* **Serverless Backend:** Node.js Serverless Functions deployed on the **Vercel Edge Network** (`/api/*.js`).
* **Database Layer:** **Google Firebase Firestore** with server-side `firebase-admin` SDK.
* **ERP Integration:** **Odoo XML-RPC API** (`res.partner` for CRM and `account.move` for Invoices).
* **AI Engine:** **Google Gemini 1.5 Flash API** for real-time bilingual qualifying and sales drafting.
* **Inbound Parse:** **SendGrid Inbound Webhooks** with cryptographic ECDSA signature verification (`X-Twilio-Email-Event-Webhook-Signature`).
* **Security & Auth:** Executive PIN protection & signed JWT session tokens (`jsonwebtoken`).

---

## 📂 Project Structure

```
├── api/
│   ├── auth.js             # Executive PIN & JWT authentication endpoint
│   ├── chat.js             # Clara 24/7 bilingual inbound chatbot (Gemini Flash)
│   ├── draft.js            # Valérie cold email & proposal drafter (Gemini Flash)
│   ├── firebase.js         # Firebase Admin SDK, Firestore collections & REST handler
│   ├── inbound_email.js    # SendGrid Inbound Parse webhook with ECDSA verification
│   ├── leads.js            # Inbound CRM leads pipeline
│   └── odoo_sync.js        # Odoo ERP XML-RPC client (Partners & Invoices)
├── artifacts/              # Technical handovers, audit reports, and growth plans
├── imgs/                   # Corporate branding, equipment assets & high-res posters
├── agent_hub.html          # Executive "God-View" Master ERP & Command Center
├── bidding_engine.html     # Commercial square-footage bid calculator
├── field_app.html          # Mobile web app for human cleaners (50-point QA checklist)
├── index.html              # Strategic executive blueprint dashboard
├── otis-final-v2_11.html   # Main public-facing landing page (AEO/GEO optimized)
├── restock_engine.html     # Consumable restock margin calculator (Sophie)
├── package.json            # ES module dependencies and project scripts
├── vercel.json             # Vercel deployment and routing rules
└── server.js               # Local development server with Vercel serverless adapter
```

---

## 🔐 Environment Configuration

Create a `.env` file in the root directory (refer to [`.env.example`](.env.example)):

```bash
# 1. Google Firebase Admin SDK
FIREBASE_PROJECT_ID="your-firebase-project-id"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"

# 2. Odoo ERP XML-RPC Integration
ODOO_URL="https://otis.odoo.com"
ODOO_DB="otis"
ODOO_USER="zan@otiscc.ca"
ODOO_PASSWORD="your-odoo-api-key-or-password"

# 3. Google Gemini AI API
GEMINI_API_KEY="AIzaSy..."

# 4. SendGrid Webhook Verification & Mail
SENDGRID_API_KEY="SG.xxxxx"
SENDGRID_WEBHOOK_VERIFICATION_KEY="MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE..."

# 5. Executive ERP Authentication
ERP_ACCESS_PIN="8842"
JWT_SECRET="your-jwt-secret-key-montreal-2026"
```

> [!NOTE]
> **Dual-Mode Fallback:** If `.env` credentials are not yet configured in a local environment, all `/api` endpoints automatically switch to **Simulation Mode**, serving realistic Montreal commercial data without crashing.

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samieltayeb-oss/otis-cleaning.git
   cd otis-cleaning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   * Console: `http://localhost:3457/agent_hub.html` (PIN: `8842`)
   * Public Site: `http://localhost:3457/otis-final-v2_11.html`

4. **Run automated API endpoint verification:**
   ```bash
   node -e "import('./api/firebase.js'); import('./api/odoo_sync.js'); import('./api/auth.js');"
   ```

---

## 🚀 Deployment to Vercel

The repository is linked directly to Vercel CI/CD.

```bash
# Push to main branch triggers automatic production build
git push origin main
```

Or deploy directly via Vercel CLI:
```bash
vercel --prod
```

---

## ⚖️ Legal & Regulatory Compliance

* **Quebec CPEEP Decree (Décret sur l'entretien ménager):** All commercial contracts mandate the legal minimum cleaning rate of **$23.00/h**, protecting building owners from joint liability fines (*responsabilité conjointe*).
* **Bill 96 (Loi 96):** 100% French-language parity across all client proposals, invoices, and customer support channels.
* **CASL Compliance:** Strict opt-in verification and corporate business-card exemptions applied to all outbound B2B messaging.

---

**Built with precision for OTIS Commercial Cleaning.**  
*Montreal, Quebec, Canada.*
