// ==============================================================================
// OTIS Commercial Cleaning - Bruno AI SMS Dispatch Engine (Twilio REST)
// ==============================================================================
import https from 'https';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { to, message, jobLocation, lockboxCode } = req.body || {};

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromPhone = process.env.TWILIO_PHONE_NUMBER || process.env.TWILIO_FROM_NUMBER;

    let smsBody = message;
    if (!smsBody && lockboxCode) {
      smsBody = `[OTIS DISPATCH - BRUNO] New Shift at ${jobLocation || 'Client Site'}. Lockbox Security Code: ${lockboxCode}. Please clock in upon arrival via the cleaner portal.`;
    }

    if (!to) {
      return res.status(400).json({ error: 'Missing recipient phone number ("to")' });
    }

    // LIVE TWILIO DISPATCH
    if (accountSid && authToken && fromPhone) {
      const postData = new URLSearchParams({
        To: to,
        From: fromPhone,
        Body: smsBody || 'OTIS Dispatch Notification'
      }).toString();

      const authHeader = 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64');

      const twilioResult = await new Promise((resolve, reject) => {
        const twilioReq = https.request({
          hostname: 'api.twilio.com',
          port: 443,
          path: `/2010-04-01/Accounts/${accountSid}/Messages.json`,
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
          }
        }, (twilioRes) => {
          let data = '';
          twilioRes.on('data', chunk => data += chunk);
          twilioRes.on('end', () => {
            try {
              const json = JSON.parse(data);
              resolve({ status: twilioRes.statusCode, data: json });
            } catch (e) {
              resolve({ status: twilioRes.statusCode, data });
            }
          });
        });

        twilioReq.on('error', reject);
        twilioReq.write(postData);
        twilioReq.end();
      });

      if (twilioResult.status >= 200 && twilioResult.status < 300) {
        return res.status(200).json({
          success: true,
          mode: 'twilio_live',
          sid: twilioResult.data.sid,
          to: to,
          message: smsBody
        });
      } else {
        return res.status(200).json({
          success: false,
          mode: 'twilio_error',
          error: twilioResult.data
        });
      }
    }

    // SIMULATED FALLBACK IF TWILIO NOT YET CONFIGURED
    return res.status(200).json({
      success: true,
      mode: 'bruno_simulated',
      note: 'Twilio credentials not configured in Vercel. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER to transmit physical SMS.',
      simulated_to: to,
      simulated_body: smsBody
    });

  } catch (err) {
    console.error('[SMS DISPATCH ERROR]', err);
    return res.status(500).json({ error: 'Failed to dispatch SMS: ' + err.message });
  }
}
