// ==============================================================================
// OTIS Commercial Cleaning - Valérie AI Proposal & Cold Email Drafter
// ==============================================================================
import https from 'https';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { target, leadName, industry, address, language = 'fr' } = req.body || {};
    const business = target || leadName || 'Entreprise Commerciale';
    const sector = industry || 'Espace Corporatif';
    const location = address || 'Grand Montréal';
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const langInstruction = language === 'fr'
          ? "Rédigez le courriel en français québécois impeccable, formel et persuasif (vouvoiement)."
          : "Write the email in highly polished, formal Quebec-compliant English.";

        const systemPrompt = `You are Valérie, Director of Sales and Proposal Architect for OTIS Commercial Cleaning in Montreal, Quebec.
Draft an executive, highly targeted cold outreach pitch ("The Pre-Winter Wedge") for:
Business: ${business}
Sector: ${sector}
Location: ${location}

Strategic Requirements:
1. Explain how winter salt/calcium degrades commercial floor sealant without high-speed mechanical scrubbers.
2. Emphasize OTIS's full compliance with the Quebec CPEEP cleaning decree ($23.00/h legal wage floor), protecting building owners and managers from joint liability fines (responsabilité solidaire) under Article 14.
3. Propose a free 10-minute compliance inspection and on-site Tennant mechanical scrubber demonstration by Zan.
4. Keep under 130 words.
${langInstruction}`;

        const payload = JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ parts: [{ text: `Generate cold pitch for ${business}` }] }],
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 1000,
            thinkingConfig: { thinkingBudget: 0 }
          }
        });

        const draft = await new Promise((resolve, reject) => {
          const draftReq = https.request({
            hostname: 'generativelanguage.googleapis.com',
            port: 443,
            path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload)
            }
          }, (draftRes) => {
            let data = '';
            draftRes.on('data', chunk => data += chunk);
            draftRes.on('end', () => {
              try {
                const parsed = JSON.parse(data);
                const parts = parsed.candidates?.[0]?.content?.parts || [];
                const text = parts.map(p => p.text).filter(Boolean).join('\n');
                resolve(text);
              } catch (e) {
                reject(e);
              }
            });
          });
          draftReq.on('error', reject);
          draftReq.write(payload);
          draftReq.end();
        });

        if (draft && draft.trim().length > 0) {
          return res.status(200).json({ email: draft, draft, mode: 'gemini_live' });
        }
      } catch (geminiErr) {
        console.warn('[DRAFT API] Gemini call failed, using Valérie fallback:', geminiErr.message);
      }
    }

    // High-Fidelity Valérie Fallback Template
    const fallbackDraft = language === 'fr'
      ? `Objet : Entretien pré-hivernal & Conformité Décret CPEEP — ${business}

Bonjour,

Avec l'arrivée prochaine de la saison froide, les accumulations de sel et de calcium représentent un risque majeur de détérioration pour les planchers de ${business}.

Au-delà de la propreté, la réglementation québécoise (Décret sur l'entretien ménager CPEEP) impose désormais un taux horaire légal strict de 23,00 $/h. Faire appel à des sous-traitants non conformes expose directement les propriétaires et gestionnaires à des sanctions pour responsabilité conjointe.

OTIS Nettoyage Commercial garantit une conformité légale totale et l'utilisation d'équipements autolaveurs Tennant de grade industriel.

Zan, notre fondateur, peut passer réaliser une évaluation technique sans engagement de 10 minutes dans vos locaux à ${location}.

Seriez-vous ouvert à une courte démonstration cette semaine ?

Cordialement,

Valérie | Direction des Ventes
OTIS Nettoyage Commercial
Tél. : (514) 555-OTIS | info@otiscc.ca`
      : `Subject: Pre-Winter Floor Protection & Quebec CPEEP Compliance — ${business}

Hello,

With winter approaching, calcium and salt buildup cause irreversible deterioration to commercial floor surfaces at ${business}.

Beyond visual cleanliness, Quebec's collective decree (CPEEP) mandates a strict legal parity wage floor of $23.00/h. Commercial property managers face direct joint-and-several liability fines under Article 14 if subcontractors pay below decree rates.

OTIS Commercial Cleaning guarantees 100% legal decree compliance, backed by industrial Tennant high-speed auto-scrubbers and $5,000,000 commercial liability coverage.

Zan, our operator, is offering a complimentary 10-minute on-site assessment at your ${location} facility this week.

Would you be open to a brief walkthrough on Tuesday or Wednesday?

Best regards,

Valérie | Sales Architect
OTIS Commercial Cleaning
Phone: (514) 555-OTIS | info@otiscc.ca`;

    return res.status(200).json({
      email: fallbackDraft,
      draft: fallbackDraft,
      mode: 'valerie_simulated'
    });

  } catch (error) {
    console.error('[DRAFT API ERROR]', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
