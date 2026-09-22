// ==============================================================================
// OTIS Commercial Cleaning - SendGrid Inbound Parse & Webhook Verification
// ==============================================================================
import crypto from 'crypto';
import https from 'https';
import nodemailer from 'nodemailer';
import { addDocument, getCollection } from './firebase.js';

// Cryptographic verification of SendGrid Webhook Signature (ECDSA prime256v1)
function verifySendGridSignature(publicKey, payload, signature, timestamp) {
  if (!publicKey || !signature || !timestamp) return false;

  try {
    // Format PEM public key if needed
    let pem = publicKey.trim();
    if (!pem.startsWith('-----BEGIN PUBLIC KEY-----')) {
      pem = `-----BEGIN PUBLIC KEY-----\n${pem}\n-----END PUBLIC KEY-----`;
    }

    const verifier = crypto.createVerify('SHA256');
    verifier.update(timestamp);
    verifier.update(payload);
    verifier.end();

    return verifier.verify(pem, signature, 'base64');
  } catch (err) {
    console.error('[SENDGRID VERIFICATION ERROR]', err.message);
    return false;
  }
}

// Call Google Gemini Flash API for Clara's autonomous draft response
async function generateClaraReply(subject, bodyText, fromSender) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const systemPrompt = `You are Clara, Inbound AI Concierge for OTIS Commercial Cleaning in Montreal, Quebec.
You are drafting a rapid, professional response to an inbound email lead for Max (CEO) and Zan (Managing Director).
Key rules:
1. Detect language automatically: If French, respond in flawless Quebec French (use 'vous'). If English, respond in professional English.
2. Tone: Warm, highly professional, compliance-focused.
3. If they ask about price: Note that pricing depends on square footage and floor types, and offer a free 10-minute walkthrough by Max (CEO) or Zan (Managing Director).
4. Mention that OTIS contracts strictly comply with the Quebec CPEEP cleaning decree ($23/h legal wage) to protect building owners from co-liability fines.
5. Keep the reply under 120 words.`;

      const prompt = `From: ${fromSender}\nSubject: ${subject}\n\nEmail Content:\n${bodyText}\n\nDraft Clara's response:`;

      const payload = JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 1000,
          thinkingConfig: { thinkingBudget: 0 }
        }
      });

      return await new Promise((resolve, reject) => {
        const req = https.request({
          hostname: 'generativelanguage.googleapis.com',
          port: 443,
          path: `/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
          }
        }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              const json = JSON.parse(data);
              const parts = json.candidates?.[0]?.content?.parts || [];
              const text = parts.map(p => p.text).filter(Boolean).join('\n');
              resolve(text || fallbackClaraReply(subject, bodyText));
            } catch (e) {
              resolve(fallbackClaraReply(subject, bodyText));
            }
          });
        });
        req.on('error', () => resolve(fallbackClaraReply(subject, bodyText)));
        req.write(payload);
        req.end();
      });
    } catch (e) {
      console.warn('[CLARA AI] Fallback to rule-based drafter:', e.message);
    }
  }

  return fallbackClaraReply(subject, bodyText);
}

// Rule-based fallback response when GEMINI_API_KEY is not set
function fallbackClaraReply(subject, bodyText) {
  const isFrench = /bonjour|merci|soumission|plancher|entretien|prix/i.test(`${subject} ${bodyText}`);

  if (isFrench) {
    return `Bonjour,

Merci d'avoir contacté OTIS Nettoyage Commercial.

Nos équipes certifiées se spécialisent dans l'entretien des espaces professionnels et cliniques médicales à Montréal. Toutes nos ententes respectent rigoureusement le décret de convention collective CPEEP (taux horaire légal de 23,00 $/h), garantissant une protection juridique complète contre la responsabilité conjointe.

Max (PDG) ou Zan (Directeur Général) peut effectuer une visite technique de 10 minutes afin de valider vos superficies et vous fournir une soumission précise sous 24h.

Seriez-vous disponible ce mardi ou mercredi pour une courte rencontre?

Cordialement,
Clara | Concierge IA pour Max (PDG) & Zan (Dir. Général)
OTIS Nettoyage Commercial | info@otiscc.ca`;
  }

  return `Hello,

Thank you for reaching out to OTIS Commercial Cleaning.

Our teams specialize in medical clinics and corporate facilities across Greater Montreal. All our contracts strictly adhere to the Quebec CPEEP decree legal wage ($23.00/h), shielding building owners from joint-liability penalties.

Max (CEO) or Zan (Managing Director) is available for a quick 10-minute walkthrough this week to inspect the site and provide a binding proposal within 24 hours.

Would Tuesday or Wednesday afternoon work best for your schedule?

Best regards,
Clara | AI Inbound Concierge for Max (CEO) & Zan (Managing Director)
OTIS Commercial Cleaning | info@otiscc.ca`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Twilio-Email-Event-Webhook-Signature, X-Twilio-Email-Event-Webhook-Timestamp');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // GET: Fetch the current internal inbox messages for agent_hub.html
  if (req.method === 'GET') {
    const emails = await getCollection('internal_inbox');
    return res.status(200).json({
      status: 'success',
      count: emails.length,
      emails: emails
    });
  }

  if (req.method === 'POST' && (req.query.action === 'send' || req.body?.action === 'send')) {
    const { to, subject, text, html } = req.body || {};

    // 1. Google Workspace Gmail SMTP (Primary)
    if (process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER || 'info@otiscc.ca',
            pass: process.env.SMTP_PASS.replace(/\s+/g, '')
          }
        });
        const info = await transporter.sendMail({
          from: `"OTIS Commercial Cleaning" <${process.env.SMTP_USER || 'info@otiscc.ca'}>`,
          to: to || 'info@otiscc.ca',
          subject: subject || 'Message from OTIS Commercial Cleaning',
          text: text || '',
          html: html || undefined
        });
        return res.status(200).json({ success: true, provider: 'google_workspace_smtp', messageId: info.messageId, message: `Email dispatched to ${to || 'info@otiscc.ca'}` });
      } catch (err) {
        console.error('[GMAIL SMTP SEND ERROR]', err.message);
      }
    }

    // 2. SendGrid Fallback
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return res.status(200).json({ success: true, simulated: true, message: 'Simulated dispatch (No email provider configured)' });
    }
    try {
      const sendRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to || 'info@otiscc.ca' }] }],
          from: { email: 'info@otiscc.ca', name: 'OTIS Commercial Cleaning' },
          subject: subject || 'Message from OTIS Commercial Cleaning',
          content: [{ type: 'text/plain', value: text || '' }]
        })
      });
      if (sendRes.status >= 200 && sendRes.status < 300) {
        return res.status(200).json({ success: true, provider: 'sendgrid', message: `Email dispatched to ${to}` });
      } else {
        const errJson = await sendRes.json().catch(() => ({}));
        return res.status(200).json({ success: false, status: sendRes.status, error: errJson });
      }
    } catch (e) {
      return res.status(500).json({ success: false, error: e.message });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const verificationKey = process.env.SENDGRID_WEBHOOK_VERIFICATION_KEY;
    const signature = req.headers['x-twilio-email-event-webhook-signature'];
    const timestamp = req.headers['x-twilio-email-event-webhook-timestamp'];

    // In production, enforce cryptographic verification if key is set
    if (verificationKey) {
      const rawPayload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      const isValid = verifySendGridSignature(verificationKey, rawPayload, signature, timestamp);

      if (!isValid) {
        console.warn('[SENDGRID WEBHOOK] Blocked unauthorized webhook call (Invalid Signature)');
        return res.status(401).json({ error: 'Unauthorized: Invalid cryptographic signature.' });
      }
      console.log('[SENDGRID WEBHOOK] Cryptographic signature verified successfully.');
    } else {
      console.log('[SENDGRID WEBHOOK] Signature verification bypassed (SENDGRID_WEBHOOK_VERIFICATION_KEY not set in .env)');
    }

    // Extract email data from SendGrid Inbound Parse or JSON payload
    const body = req.body || {};
    const fromEmail = body.from || body.from_email || body.sender || 'lead@commercial.qc.ca';
    const fromName = body.from_name || fromEmail.split('<')[0].replace(/"/g, '').trim() || fromEmail;
    const subject = body.subject || 'Demande d\'information entretien ménager';
    const bodyText = body.text || body.body_text || body.html || 'Bonjour, nous cherchons un service de nettoyage fiable pour nos locaux.';

    // Generate Clara's AI draft reply
    const aiDraftReply = await generateClaraReply(subject, bodyText, fromName);

    // Save to Firestore internal_inbox collection
    const inboxRecord = {
      from_email: fromEmail,
      from_name: fromName,
      subject: subject,
      body_text: bodyText,
      timestamp: new Date().toISOString(),
      ai_draft_reply: aiDraftReply,
      status: 'unread'
    };

    const saved = await addDocument('internal_inbox', inboxRecord);

    console.log(`[SENDGRID INBOUND] Ingested email from ${fromEmail} - "${subject}". Saved ID: ${saved.id}`);

    return res.status(200).json({
      status: 'success',
      message: 'Inbound email parsed, AI reply drafted, and stored in Firebase Internal Inbox.',
      record: saved
    });

  } catch (error) {
    console.error('[SENDGRID INBOUND ERROR]', error);
    return res.status(500).json({ error: 'Failed to process inbound email: ' + error.message });
  }
}
