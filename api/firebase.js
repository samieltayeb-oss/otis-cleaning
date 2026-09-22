// ==============================================================================
// OTIS Commercial Cleaning - Firebase Admin & Firestore Serverless Layer
// ==============================================================================
import admin from 'firebase-admin';

let isConfigured = false;
let db = null;
let auth = null;

// In-Memory / Ephemeral Fallback Store for Local Simulation & Offline Dev
const mockStore = {
  leads: [
    {
      id: 'LEAD-101',
      companyName: 'Clinique Dentaire Notre-Dame',
      address: '5252 Rue Sherbrooke Ouest, Montreal, QC',
      googleRating: 4.8,
      status: 'pending',
      valerieDraft: 'Bonjour Dr. Tremblay, suite à notre analyse...',
      timestamp: new Date().toISOString()
    },
    {
      id: 'LEAD-102',
      companyName: 'Atelier Nord Architecture',
      address: '5333 Avenue Casgrain, Mile End, Montreal, QC',
      googleRating: 4.9,
      status: 'approved',
      valerieDraft: 'Bonjour, nos équipes opèrent le samedi...',
      timestamp: new Date().toISOString()
    }
  ],
  internal_inbox: [
    {
      id: 'INBOX-1',
      from_email: 'dr.tremblay@cliniquendg.ca',
      from_name: 'Dr. Michel Tremblay',
      subject: 'Re: Entretien Hivernal - Plancher',
      body_text: 'Bonjour Valérie,\n\nOui, nos planchers sont en mauvais état à cause du sel de l\'hiver dernier. Faites-vous le décapage et cirage la fin de semaine?\n\nNous avons environ 2,500 pieds carrés.\n\nMerci,\nDr. Tremblay',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      ai_draft_reply: 'Bonjour Dr. Tremblay,\n\nAbsolument. Nos équipes opèrent le samedi et dimanche pour ne pas déranger vos patients. Pour 2,500 pc, nous pouvons vous envoyer une soumission officielle. Zan peut passer faire une évaluation rapide ce mardi à 14h00. Est-ce que ça vous convient?'
    },
    {
      id: 'INBOX-2',
      from_email: 'direction@gestionxyz.ca',
      from_name: 'Gestion Immobilière XYZ',
      subject: 'Demande de Soumission - 10,000 pc',
      body_text: 'Nous avons un immeuble commercial de 10,000 pc au centre-ville à faire nettoyer 5x par semaine. Pouvez-vous nous fournir une estimation conforme au décret CPEEP?',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      ai_draft_reply: 'Bonjour,\n\nMerci de contacter OTIS. Nos contrats respectent scrupuleusement le taux horaire de 23,00 $/h du décret CPEEP. Zan préparera un devis détaillé suite à une visite technique de 10 minutes.'
    }
  ],
  qa_reports: [
    {
      id: 'QA-1',
      locationId: 'LOC-EPIC',
      cleanerId: 'CREW-ALPHA',
      check1: true,
      check2: true,
      score: 98.4,
      photos: ['imgs/real_floor_1.jpg', 'imgs/real_floor_2.jpg'],
      timestamp: new Date().toISOString()
    }
  ]
};

// Initialize Firebase Admin if credentials are supplied
if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (projectId && clientEmail && privateKey) {
    try {
      if (privateKey.includes('\\n')) {
        privateKey = privateKey.replace(/\\n/g, '\n');
      }

      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey
        }),
        databaseURL: `https://${projectId}.firebaseio.com`
      });

      db = admin.firestore();
      auth = admin.auth();
      isConfigured = true;
      console.log('[FIREBASE] Connected successfully to Firestore:', projectId);
    } catch (error) {
      console.error('[FIREBASE] Admin initialization failed:', error.message);
    }
  } else {
    console.warn('[FIREBASE] Credentials not detected in environment. Running in SIMULATION mode.');
  }
} else {
  db = admin.firestore();
  auth = admin.auth();
  isConfigured = true;
}

export { admin, db, auth };
export const isFirebaseActive = () => isConfigured;

// Helper: Query collection
export async function getCollection(name) {
  if (isConfigured && db) {
    try {
      const snap = await db.collection(name).get();
      return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
      console.error(`[FIREBASE] Error reading collection ${name}:`, err.message);
    }
  }
  return mockStore[name] || [];
}

// Helper: Add document
export async function addDocument(name, data) {
  if (isConfigured && db) {
    try {
      const ref = await db.collection(name).add({
        ...data,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
      return { id: ref.id, ...data };
    } catch (err) {
      console.error(`[FIREBASE] Error adding to collection ${name}:`, err.message);
    }
  }
  const id = `${name.toUpperCase().slice(0, 4)}-${Math.floor(1000 + Math.random() * 9000)}`;
  const item = { id, ...data, timestamp: data.timestamp || new Date().toISOString() };
  if (!mockStore[name]) mockStore[name] = [];
  mockStore[name].unshift(item);
  return item;
}

// Helper: Update document
export async function updateDocument(name, id, updateData) {
  if (isConfigured && db) {
    try {
      await db.collection(name).doc(id).set(updateData, { merge: true });
      return { id, ...updateData };
    } catch (err) {
      console.error(`[FIREBASE] Error updating ${name}/${id}:`, err.message);
    }
  }
  if (mockStore[name]) {
    const idx = mockStore[name].findIndex(item => item.id === id);
    if (idx !== -1) {
      mockStore[name][idx] = { ...mockStore[name][idx], ...updateData };
      return mockStore[name][idx];
    }
  }
  return { id, ...updateData };
}

// Default Vercel Serverless Function Handler: /api/firebase
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const { collection = 'leads', action, id } = req.query;

  try {
    if (action === 'status') {
      return res.status(200).json({
        status: 'online',
        firebase_configured: isConfigured,
        mode: isConfigured ? 'production_firestore' : 'simulation_fallback',
        available_collections: ['leads', 'internal_inbox', 'qa_reports']
      });
    }

    if (req.method === 'GET') {
      const records = await getCollection(collection);
      return res.status(200).json({
        source: isConfigured ? 'firestore' : 'simulation',
        collection,
        count: records.length,
        data: records
      });
    }

    if (req.method === 'POST') {
      const payload = req.body || {};
      const created = await addDocument(collection, payload);
      return res.status(201).json({
        source: isConfigured ? 'firestore' : 'simulation',
        success: true,
        data: created
      });
    }

    if (req.method === 'PUT' || req.method === 'PATCH') {
      const targetId = id || req.body?.id;
      if (!targetId) {
        return res.status(400).json({ error: 'Missing document id for update' });
      }
      const updated = await updateDocument(collection, targetId, req.body);
      return res.status(200).json({
        source: isConfigured ? 'firestore' : 'simulation',
        success: true,
        data: updated
      });
    }

    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
