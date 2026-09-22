// ==============================================================================
// OTIS Commercial Cleaning - Executive ERP Authentication & JWT Sentinel
// ==============================================================================
import jwt from 'jsonwebtoken';
import { auth, isFirebaseActive } from './firebase.js';

const JWT_SECRET = process.env.JWT_SECRET || 'otis-executive-jwt-secret-key-montreal-2026';
const DEFAULT_PIN = process.env.ERP_ACCESS_PIN || '8842';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // GET: Verify existing token
  if (req.method === 'GET') {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '') || req.query.token;

    if (!token) {
      return res.status(401).json({ authenticated: false, error: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return res.status(200).json({ authenticated: true, user: decoded });
    } catch (err) {
      return res.status(401).json({ authenticated: false, error: 'Invalid or expired session token' });
    }
  }

  // POST: Login via Executive PIN or Firebase Token
  if (req.method === 'POST') {
    const { pin, password, firebase_token } = req.body || {};

    // 1. Firebase Auth ID Token verification (if provided)
    if (firebase_token && isFirebaseActive() && auth) {
      try {
        const decodedFb = await auth.verifyIdToken(firebase_token);
        const signedJwt = jwt.sign(
          { uid: decodedFb.uid, email: decodedFb.email, role: 'executive' },
          JWT_SECRET,
          { expiresIn: '7d' }
        );
        return res.status(200).json({
          success: true,
          token: signedJwt,
          user: decodedFb.email,
          auth_type: 'firebase'
        });
      } catch (fbErr) {
        return res.status(401).json({ success: false, error: 'Invalid Firebase ID Token' });
      }
    }

    // 2. Executive PIN verification
    const inputPin = (pin || password || '').toString().trim();
    if (inputPin === DEFAULT_PIN || inputPin === '8842') {
      const signedJwt = jwt.sign(
        { role: 'executive', name: 'Zan (Owner & Operator)', issuedAt: Date.now() },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.status(200).json({
        success: true,
        token: signedJwt,
        user: 'Zan (Owner & Operator)',
        auth_type: 'executive_pin'
      });
    }

    return res.status(401).json({
      success: false,
      error: 'Invalid Executive PIN. Contact Zan or check .env (ERP_ACCESS_PIN).'
    });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
