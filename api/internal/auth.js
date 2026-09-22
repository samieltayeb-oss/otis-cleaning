import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const SESSION_SECRET = process.env.OTIS_SESSION_SECRET || 'fallback-secret-otis-2026';
// Expected hash for PIN. (e.g. SHA-256 of 8842 is 5aa765d61d8327c3f392efae5dfdf02a2468305c6d3bc01e69b50bf699477e77)
const PIN_HASH = process.env.OTIS_INTERNAL_PIN_HASH || '5aa765d61d8327c3f392efae5dfdf02a2468305c6d3bc01e69b50bf699477e77'; 

// Simple rate limiter (in-memory, per-instance)
const rateLimit = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  
  // Rate limiting check (max 5 attempts per 15 minutes)
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  
  let record = rateLimit.get(ip);
  if (!record) {
    record = { count: 0, firstAttempt: now };
    rateLimit.set(ip, record);
  }
  
  if (now - record.firstAttempt > windowMs) {
    record.count = 0;
    record.firstAttempt = now;
  }
  
  if (record.count >= 5) {
    return res.status(429).json({ success: false, error: 'Too many attempts. Try again later.' });
  }

  const { pin } = req.body || {};
  const inputPin = (pin || '').toString().trim();
  
  // Hash the input PIN using SHA-256
  const inputHash = crypto.createHash('sha256').update(inputPin).digest('hex');

  // Constant-time comparison
  let isValid = false;
  try {
    if (inputHash.length === PIN_HASH.length) {
      isValid = crypto.timingSafeEqual(Buffer.from(inputHash), Buffer.from(PIN_HASH));
    }
  } catch (e) {
    isValid = false;
  }

  if (isValid) {
    // Reset rate limit on success
    rateLimit.delete(ip);
    
    // Create JWT
    const token = jwt.sign({ authenticated: true, role: 'executive' }, SESSION_SECRET, { expiresIn: '12h' });
    
    // Set HttpOnly cookie
    res.setHeader('Set-Cookie', `otis_internal_session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=43200`);
    
    return res.status(200).json({ success: true });
  } else {
    record.count += 1;
    return res.status(401).json({ success: false, error: 'Access denied.' });
  }
}
