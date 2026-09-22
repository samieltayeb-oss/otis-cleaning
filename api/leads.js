// ==============================================================================
// OTIS Commercial Cleaning - Leads Management & Instant Dispatch API
// ==============================================================================
import { getCollection, addDocument, updateDocument, isFirebaseActive } from './firebase.js';
import nodemailer from 'nodemailer';

function getTransporter() {
  const user = process.env.SMTP_USER || 'info@otiscc.ca';
  const pass = process.env.SMTP_PASS;

  if (!pass) return null;

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass.replace(/\s+/g, '')
    }
  });
}

async function sendLeadNotificationEmail(lead) {
  try {
    const transporter = getTransporter();
    if (!transporter) {
      console.log('[LEAD EMAIL] Skipped dispatch: SMTP_PASS not configured');
      return { sent: false, reason: 'SMTP_PASS not configured' };
    }

    const toEmail = process.env.SMTP_TO || 'info@otiscc.ca';
    const fromUser = process.env.SMTP_USER || 'info@otiscc.ca';

    const clientName = lead.name || 'Anonymous Prospect';
    const clientCompany = lead.business || lead.companyName || lead.company || 'Not Specified';
    const clientEmail = lead.email || 'None';
    const clientPhone = lead.phone || 'None';
    const serviceType = lead.service || lead.serviceType || 'Commercial Cleaning';
    const squareFootage = lead.size || lead.squareFootage || 'Not specified';
    const facilityType = lead.type || lead.facilityType || 'Commercial';
    const cleaningFreq = lead.frequency || 'Regular';
    const address = lead.address || lead.location || 'Greater Montreal Area';
    const notes = lead.notes || lead.message || 'No additional notes provided.';
    const source = lead.source || 'Website Quote Form';
    const timestamp = lead.timestamp ? new Date(lead.timestamp).toLocaleString('en-CA', { timeZone: 'America/Toronto' }) : new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' });

    const mailOptions = {
      from: `"OTIS Commercial Leads" <${fromUser}>`,
      to: toEmail,
      replyTo: clientEmail !== 'None' ? clientEmail : fromUser,
      subject: `⚡ New Quote Request [${serviceType}] - ${clientCompany} (${clientName})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050d14; color: #C2D3E5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #0a192f; border: 1px solid #1e3a5f; border-radius: 12px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #0a192f 0%, #0f243e 100%); border-bottom: 2px solid #F7941D; padding: 24px; text-align: left; }
            .badge { display: inline-block; background: rgba(247, 148, 29, 0.15); color: #F7941D; font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
            .title { color: #FFFFFF; font-size: 20px; font-weight: 800; margin: 0; }
            .content { padding: 24px; }
            .lead-card { background: #0f243e; border: 1px solid #1e3a5f; border-radius: 8px; padding: 18px; margin-bottom: 20px; }
            .field-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; }
            .field-row:last-child { border-bottom: none; }
            .field-label { color: #8FA6BE; font-weight: 600; width: 35%; }
            .field-value { color: #FFFFFF; font-weight: 500; width: 65%; text-align: right; word-break: break-word; }
            .field-value a { color: #F7941D; text-decoration: none; font-weight: 700; }
            .notes-box { background: rgba(247, 148, 29, 0.05); border-left: 3px solid #F7941D; padding: 12px 16px; border-radius: 0 8px 8px 0; margin-top: 15px; font-size: 13px; color: #C2D3E5; }
            .btn-group { display: flex; gap: 12px; margin-top: 24px; }
            .btn { display: inline-block; padding: 12px 20px; border-radius: 6px; font-weight: 700; font-size: 13px; text-decoration: none; text-align: center; }
            .btn-primary { background: #F7941D; color: #050d14 !important; }
            .btn-secondary { background: rgba(255,255,255,0.08); color: #FFFFFF !important; border: 1px solid #1e3a5f; }
            .footer { padding: 16px 24px; background: #050d14; border-top: 1px solid #1e3a5f; text-align: center; font-size: 12px; color: #8FA6BE; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">🚀 Inbound Commercial Lead</span>
              <h1 class="title">${clientCompany}</h1>
              <div style="font-size: 12px; color: #8FA6BE; margin-top: 4px;">Captured via ${source} • ${timestamp}</div>
            </div>
            <div class="content">
              <div class="lead-card">
                <div class="field-row">
                  <span class="field-label">Contact Name:</span>
                  <span class="field-value">${clientName}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Company:</span>
                  <span class="field-value">${clientCompany}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Direct Email:</span>
                  <span class="field-value"><a href="mailto:${clientEmail}">${clientEmail}</a></span>
                </div>
                <div class="field-row">
                  <span class="field-label">Direct Phone:</span>
                  <span class="field-value"><a href="tel:${clientPhone}">${clientPhone}</a></span>
                </div>
                <div class="field-row">
                  <span class="field-label">Service Requested:</span>
                  <span class="field-value" style="color: #10b981; font-weight: 700;">${serviceType}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Facility Size:</span>
                  <span class="field-value">${squareFootage} sq ft</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Facility Type:</span>
                  <span class="field-value">${facilityType}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Frequency:</span>
                  <span class="field-value">${cleaningFreq}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Address / Location:</span>
                  <span class="field-value">${address}</span>
                </div>
              </div>

              <div style="font-size: 13px; font-weight: 700; color: #8FA6BE; margin-bottom: 6px;">CLIENT MESSAGE / SPECIAL REQUIREMENTS:</div>
              <div class="notes-box">
                "${notes}"
              </div>

              <div class="btn-group" style="margin-top: 25px;">
                <a href="https://otis-cleaning.vercel.app/internal/crm" class="btn btn-primary" style="margin-right: 10px;">📊 Open in CRM</a>
                <a href="https://otis-cleaning.vercel.app/internal/bidding_engine" class="btn btn-secondary">⚡ Price in Bidding Engine</a>
              </div>
            </div>
            <div class="footer">
              OTIS Autonomous Commercial Cleaning ERP • Montreal, QC<br>
              Direct Executive Support &amp; Lead Routing
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NEW COMMERCIAL CLEANING LEAD CAPTURED
=====================================
Company: ${clientCompany}
Contact Name: ${clientName}
Email: ${clientEmail}
Phone: ${clientPhone}
Service: ${serviceType}
Size: ${squareFootage} sq ft
Type: ${facilityType}
Frequency: ${cleaningFreq}
Address: ${address}
Notes: ${notes}

Source: ${source}
Timestamp: ${timestamp}
Review in OTIS CRM: https://otis-cleaning.vercel.app/internal/crm
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('[LEAD EMAIL DISPATCHED]', info.messageId, 'to', toEmail);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error('[LEAD EMAIL FAILED]', err.message);
    return { sent: false, error: err.message };
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    if (req.method === 'GET') {
      if (req.query.action === 'test_email') {
        const testLead = {
          id: 'TEST-' + Math.floor(1000 + Math.random() * 9000),
          name: 'Jean-Philippe Tremblay',
          company: 'Clinique Dentaire Mont-Royal',
          business: 'Clinique Dentaire Mont-Royal (Dental Clinic)',
          email: 'jp.tremblay@test-clinic.ca',
          phone: '(514) 840-9922',
          service: 'Medical & Dental Clinic Sanitation',
          size: '3,200',
          type: 'Dental / Healthcare',
          frequency: '5x per week',
          address: '4200 Boulevard Saint-Laurent, Montréal, QC',
          notes: 'Looking for a daily evening disinfection service under Quebec CPEEP standards. Please send proposal.',
          source: 'System Diagnostic Test'
        };
        const emailResult = await sendLeadNotificationEmail(testLead);
        return res.status(200).json({ success: true, test: true, emailResult });
      }

      const leads = await getCollection('leads');
      return res.status(200).json(leads);
    }

    if (req.method === 'POST') {
      const lead = req.body || {};
      if (!lead.id) lead.id = 'LEAD-' + Math.floor(1000 + Math.random() * 9000);
      if (!lead.timestamp) lead.timestamp = new Date().toISOString();

      // 1. Persist lead in Firestore / mock storage
      const savedLead = await addDocument('leads', lead);
      console.log('[LEAD STORED]', savedLead.id, savedLead.companyName || savedLead.business);

      // 2. Dispatch instant notification email to info@otiscc.ca
      const emailResult = await sendLeadNotificationEmail(savedLead);

      return res.status(201).json({
        success: true,
        source: isFirebaseActive() ? 'firestore' : 'simulation',
        lead: savedLead,
        notification: emailResult
      });
    }

    if (req.method === 'PUT' || req.method === 'PATCH') {
      const { id, ...updateData } = req.body || {};
      const targetId = id || req.query.id;
      if (!targetId) {
        return res.status(400).json({ error: 'Missing lead id for update' });
      }

      const updated = await updateDocument('leads', targetId, updateData);
      return res.status(200).json({
        success: true,
        lead: updated
      });
    }

    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  } catch (err) {
    console.error('[LEADS API ERROR]', err);
    return res.status(500).json({ error: 'Failed to process leads: ' + err.message });
  }
}
