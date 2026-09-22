# 🤖 The Full AI Automation Suite

We are transforming OTIS into a fully automated, tech-forward company without any expensive subscriptions. We will build two 100% free AI systems into the Vercel architecture.

## User Review Required
> [!IMPORTANT]
> Because these AI features run on Google Gemini's Free Tier, **you will need a free Google AI Studio API key** to make it live on Vercel. I will wire everything up so it works perfectly, and provide instructions on where to paste your free key before you deploy. 

## Proposed Changes

---

### 1. The 24/7 Bilingual Web Receptionist (Lead Capture Chatbot)
A floating, professional AI Chatbot on the bottom right of the main prototype page to qualify commercial and residential leads while Zan sleeps.

#### [NEW] `api/chat.js`
- A native Vercel serverless function that securely connects to the Gemini 1.5 Flash API.
- It will have a strict "System Prompt" instructing it to act as an OTIS Customer Success Agent. Its goal is to get the user's name, phone number, and square footage.

#### [MODIFY] `otis-final-v2_11.html`
- Inject the HTML/CSS for a sleek, glassmorphism chat widget in the bottom right corner (with an "OTIS AI" badge).
- Add JavaScript to handle the chat interface, message bubbles, and typing indicators, connected to `fetch('/api/chat')`.

---

### 2. The Cold Email / Pitch Drafter (Internal CRM Tool)
A dedicated "AI Engine" section on Zan's internal dashboard that drafts localized, Pre-Winter Wedge emails.

#### [NEW] `api/draft.js`
- A Vercel serverless function that takes a Business Name, Industry, and Target Audience from the CRM.
- Uses Gemini 1.5 Flash to automatically output a hyper-professional French/English email based on our exact legal/CNESST compliance strategies.

#### [MODIFY] `crm.html`
- Add an "🤖 Generate Pitch" button next to every lead in the **Google Maps Lead Radar** table.
- Clicking the button will open a modal, send the lead's data to `/api/draft`, and instantly type out a customized email/call script that Zan can copy-paste.

## Verification Plan

### Manual Verification
1. I will write the backend Vercel functions (`api/chat.js` and `api/draft.js`).
2. I will build the Chatbot UI and the CRM AI UI.
3. You will be able to test the local frontend UI immediately.
