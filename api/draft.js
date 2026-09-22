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
        const langPrompt = language === 'fr'
          ? "Rédigez le courriel en français québécois impeccable, formel et persuasif (vouvoiement)."
          : "Write the email in highly polished, formal Quebec-compliant English.";

        const prompt = `Vous êtes Valérie, Architecte des Ventes pour OTIS Nettoyage Commercial à Montréal.
Rédigez un courriel de prospection percutant ("The Pre-Winter Wedge") pour:
Entreprise: ${business}
Secteur: ${sector}
Emplacement: ${location}

Éléments stratégiques obligatoires:
1. L'impact du sel et du calcium hivernal sur leurs revêtements de sol.
2. La conformité stricte au Décret CPEEP (salaire légal de 23,00 $/h) protégeant le client contre la responsabilité conjointe et les amendes de la CNESST.
3. Proposition d'un audit de conformité gratuit de 10 minutes et d'une démonstration sans engagement de décapage/récurage mécanique avec équipement Tennant.
4. Moins de 130 mots. Ton exécutif, expert, rassurant.

${langPrompt}`;

        const payload = JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.6, maxOutputTokens: 250 }
        });

        const draft = await new Promise((resolve, reject) => {
          const draftReq = https.request({
            hostname: 'generativelanguage.googleapis.com',
            port: 443,
            path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
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
                const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
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

        if (draft) {
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
      : `Subject: Pre-Winter Floor Defense & CPEEP Compliance — ${business}

Hello,

With the upcoming winter weather, road salt and calcium buildup pose an immediate threat to the flooring assets at ${business}.

Beyond aesthetics, the Quebec CPEEP cleaning decree mandates a strict $23.00/h legal wage. Utilizing non-compliant providers exposes property managers directly to joint-liability fines under Quebec law.

OTIS Commercial Cleaning guarantees 100% legal compliance, eco-certified neutral cleaners, and industrial Tennant scrubbing technology.

Zan, our founder, is available for a brief 10-minute technical evaluation at your ${location} facility.

Would you be open to a quick walkthrough this week?

Sincerely,

Valérie | Proposal Architect
OTIS Commercial Cleaning
(514) 555-OTIS | info@otiscc.ca`;

    return res.status(200).json({ email: fallbackDraft, draft: fallbackDraft, mode: 'valerie_simulated' });

  } catch (error) {
    console.error('[DRAFT API ERROR]', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
