// ==============================================================================
// OTIS Commercial Cleaning - Clara AI Inbound Chatbot API
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
    const { message, messages } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY;

    let userPrompt = message;
    if (!userPrompt && Array.isArray(messages) && messages.length > 0) {
      userPrompt = messages[messages.length - 1].content;
    }

    if (!userPrompt) {
      return res.status(400).json({ error: 'Missing message in request body' });
    }

    // Call Gemini API if key is configured
    if (apiKey) {
      try {
        const systemPrompt = `You are Clara, the 24/7 Bilingual Inbound Concierge for OTIS Commercial Cleaning in Montreal, Quebec.
You work directly for Zan, the owner and operator.
Your primary goals:
1. Qualify inbound commercial leads (offices, medical/dental clinics, daycares, condo syndicates).
2. Gather: approximate square footage, cleaning frequency, business name, and phone number.
3. Automatically match user's language (Quebec French or English).
4. Emphasize OTIS's compliance with the Quebec CPEEP cleaning decree ($23/h legal wage parity) protecting building owners from co-liability fines.
5. Keep answers courteous, concise (under 80 words), and professional. Offer a 10-minute site walkthrough with Zan.`;

        const payload = JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ parts: [{ text: userPrompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
        });

        const reply = await new Promise((resolve, reject) => {
          const geminiReq = https.request({
            hostname: 'generativelanguage.googleapis.com',
            port: 443,
            path: `/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload)
            }
          }, (geminiRes) => {
            let data = '';
            geminiRes.on('data', chunk => data += chunk);
            geminiRes.on('end', () => {
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
          geminiReq.on('error', reject);
          geminiReq.write(payload);
          geminiReq.end();
        });

        if (reply) {
          return res.status(200).json({ reply, mode: 'gemini_live' });
        }
      } catch (geminiErr) {
        console.warn('[CHAT API] Gemini call failed, using Clara fallback:', geminiErr.message);
      }
    }

    // Intelligent Fallback simulation
    const isFrench = /bonjour|salut|prix|combien|estimation|devis|nettoyage|service|bureau|clinique/i.test(userPrompt);
    const reply = isFrench
      ? `Bonjour ! Je suis Clara, concierge IA pour OTIS Nettoyage Commercial à Montréal. Nous desservons les cliniques et espaces corporatifs avec des contrats conformes au décret CPEEP ($23/h). Quelle est la superficie approximative de vos locaux et le meilleur numéro pour que Zan communique avec vous ?`
      : `Hello! I'm Clara, AI Concierge for OTIS Commercial Cleaning in Montreal. We specialize in medical clinics and corporate facilities under Quebec's CPEEP compliance standards. What is your approximate square footage, and what is the best number for Zan to reach you for a quick walkthrough?`;

    return res.status(200).json({ reply, mode: 'clara_simulated' });

  } catch (error) {
    console.error('[CHAT API ERROR]', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
