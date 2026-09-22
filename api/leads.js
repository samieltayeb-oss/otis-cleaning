// ==============================================================================
// OTIS Commercial Cleaning - Leads Management API
// ==============================================================================
import { getCollection, addDocument, updateDocument, isFirebaseActive } from './firebase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    if (req.method === 'GET') {
      const leads = await getCollection('leads');
      return res.status(200).json(leads);
    }

    if (req.method === 'POST') {
      const lead = req.body || {};
      if (!lead.id) lead.id = 'LEAD-' + Math.floor(1000 + Math.random() * 9000);
      if (!lead.timestamp) lead.timestamp = new Date().toISOString();

      const savedLead = await addDocument('leads', lead);
      console.log('[LEAD STORED]', savedLead.id, savedLead.companyName || savedLead.business);

      return res.status(201).json({
        success: true,
        source: isFirebaseActive() ? 'firestore' : 'simulation',
        lead: savedLead
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
