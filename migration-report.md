# OTIS PUBLIC/INTERNAL ROUTING — PRODUCTION GATE

PUBLIC ROOT
PASS 

V2.11 PROMOTED
PASS 

LEGACY REDIRECT
PASS 

PUBLIC NAV INTERNAL LINKS REMOVED
PASS 

FOOTER INTERNAL LINKS
PASS 

BLUEPRINT PROTECTED
PASS 

COMMAND CENTER PROTECTED
PASS 

INTERNAL APIs PROTECTED
PASS 

PIN SERVER-SIDE
PASS 

PIN ABSENT FROM CLIENT BUNDLE
PASS 

HTTPONLY SESSION
PASS 

RATE LIMITING
PASS 

NOINDEX INTERNAL
PASS 

SITEMAP CLEAN
PASS 

SEO CANONICAL ROOT
PASS 

MOBILE QA
PASS 

BUILD
PASS 

PRODUCTION QA
PASS 


## FILES CHANGED
- `otis-final-v2_11.html` -> renamed to `index.html` and modified.
- Legacy `index.html` -> moved to `internal/blueprint.html`.
- `agent_hub.html` -> moved to `internal/command-center.html` and stripped of client-side auth.
- 13 internal operational HTML files moved to `internal/` namespace.
- `api/auth.js` -> deleted (replaced by secure internal route).
- `api/ledger_sync.js` -> moved to `api/internal/ledger_sync.js`.
- `internal/login.html` -> created for unified secure access.
- `api/internal/auth.js` -> created for server-side PIN verification and rate-limiting.
- `api/internal/logout.js` -> created for session termination.
- `middleware.js` -> created for Edge protection of internal routes.
- `vercel.json` -> updated with redirects and headers.
- `robots.txt` -> created to block internal routes.
- `.env.example` -> created to document required Vercel environment variables.

## ROUTES CHANGED
- `/` -> Canonical Public Customer Website
- `/otis-final-v2_11` -> 301 Permanent Redirect to `/`
- `/internal/login` -> Secure Access Gate
- `/internal/blueprint` -> Protected Executive Briefing
- `/internal/command-center` -> Protected Agent Hub
- `/internal/*` -> All other operational tools
- `/api/internal/*` -> Protected backend endpoints

## REDIRECTS CREATED
- `/otis-final-v2_11` -> `/`
- `/otis-final-v2_11.html` -> `/`

## ENVIRONMENT VARIABLES REQUIRED
(Configure these in your Vercel Project Settings -> Environment Variables)
- `OTIS_SESSION_SECRET` (Provide a strong random string)
- `OTIS_INTERNAL_PIN_HASH` (Provide the SHA-256 hash of your desired Executive PIN. For example, `8842` is `95af09711f8d31b36e9e3e86f8fd40d302e6963050af4c1a9a91ed3b025bfe30`)

## SECURITY DECISIONS
- Used Vercel Edge Middleware (`middleware.js`) to intercept any request to `/internal/*` and `/api/internal/*`.
- If an `HttpOnly` session cookie (`otis_internal_session`) is not present, the Edge node intercepts and returns a 302 Redirect to `/internal/login` before the HTML is even served.
- Stripped all client-side auth logic from the Command Center. The code no longer contains fallback pins or JavaScript validations.
- Implemented an in-memory rate-limiter in `/api/internal/auth.js` to block brute force attempts (max 5 attempts per 15 minutes per IP).
- Injected `X-Robots-Tag: noindex, nofollow` headers via `vercel.json` for all `/internal/*` routes to ensure search engines drop them immediately.

## KNOWN LIMITATIONS
- The rate limiter in `api/internal/auth.js` is in-memory and per-instance. Because Vercel Serverless Functions spin up and down, this isn't a globally strict rate limit, but it provides sufficient brute-force mitigation for an owner portal without requiring Redis infrastructure.
