# OTIS V2.11 - Final Integration & Security Lockdown

The core static architecture, design tokens, and SEO rules have been successfully deployed. This phase will finalize the operational connections and secure the proprietary internal backend.

## Proposed Changes

### 1. Form Backend Integration (Lead Capture via Email)
Currently, the "Free Quote" form saves leads to the mock CRM database. We will wire it up to actively send an email notification to the OTIS operations team whenever a new lead is submitted.

#### [MODIFY] `api/leads.js`
- Integrate `nodemailer` to send a transactional email notification containing the lead's details (Name, Service, Size, Address, Phone, Notes).
- The API will pull SMTP credentials from Vercel's secure environment variables, allowing OTIS to use any mail provider (Gmail Workspace, Outlook, SendGrid, etc.) without hardcoding passwords in the repository.

### 2. Vercel Edge Middleware Security Lockdown
You mentioned you want a hard password/PIN wall. 
Currently, the `/internal/` route **is already protected** by the Vercel Edge Middleware (`middleware.js`) which enforces a session cookie verified by `/api/internal/auth.js`.
If you try to visit `https://otis-cleaning.vercel.app/internal/command-center` from a private browsing window, you will be redirected to the secure `login.html` screen.

#### Action Items for Security:
- No structural changes are required to `middleware.js` as it is fully functional.
- I will just verify the PIN setup and provide you the exact instructions on how to set the `OTIS_INTERNAL_PIN_HASH` environment variable in Vercel so you can set your own custom PIN.

## User Review Required

> [!IMPORTANT]
> **Email Configuration:** To make the email actually send, you will need to add three Environment Variables in your Vercel Dashboard (Settings > Environment Variables):
> - `SMTP_USER` (Your sending email, e.g., `info@otiscc.ca`)
> - `SMTP_PASS` (Your app password for that email)
> - `SMTP_TO` (The email where you want to receive the leads, e.g., `zan@otiscc.ca`)
> 
> Once I write the code, I will guide you on how to add these.

Do you approve this approach for the email integration?
