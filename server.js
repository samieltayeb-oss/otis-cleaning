/**
 * OTIS Commercial Cleaning — Unified Local & Serverless Dev Server
 * Bridges local development with Vercel Serverless /api functions
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import firebaseHandler from './api/firebase.js';
import odooSyncHandler from './api/odoo_sync.js';
import inboundEmailHandler from './api/inbound_email.js';
import authHandler from './api/auth.js';
import leadsHandler from './api/leads.js';
import chatHandler from './api/chat.js';
import draftHandler from './api/draft.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3457;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8'
};

const apiRoutes = {
  '/api/firebase': firebaseHandler,
  '/api/odoo_sync': odooSyncHandler,
  '/api/inbound_email': inboundEmailHandler,
  '/api/auth': authHandler,
  '/api/leads': leadsHandler,
  '/api/chat': chatHandler,
  '/api/draft': draftHandler
};

// Vercel Serverless Function Compatibility Adapter
function adaptVercelRequest(req, res, callback) {
  let bodyBuffer = '';
  req.on('data', chunk => bodyBuffer += chunk);
  req.on('end', () => {
    // Parse query
    const urlObj = new URL(req.url, `http://localhost:${PORT}`);
    req.query = Object.fromEntries(urlObj.searchParams.entries());

    // Parse body
    if (bodyBuffer) {
      try {
        req.body = JSON.parse(bodyBuffer);
      } catch (e) {
        req.body = bodyBuffer;
      }
    } else {
      req.body = {};
    }

    // Enhance response with Express/Vercel helpers
    res.status = function(code) {
      res.statusCode = code;
      return res;
    };

    res.json = function(data) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(data));
      return res;
    };

    callback();
  });
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Twilio-Email-Event-Webhook-Signature, X-Twilio-Email-Event-Webhook-Timestamp');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Check if pathname matches an API route (with or without trailing slash or .js)
  const cleanApiPath = pathname.replace(/\.js$/, '').replace(/\/$/, '');
  const handler = apiRoutes[cleanApiPath];

  if (handler) {
    adaptVercelRequest(req, res, async () => {
      try {
        await handler(req, res);
      } catch (err) {
        console.error(`[SERVER ERROR] ${pathname}:`, err);
        if (!res.writableEnded) {
          res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
      }
    });
    return;
  }

  // Serve static files
  if (pathname === '/') pathname = '/agent_hub.html';
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n====================================================`);
  console.log(`🏢 OTIS COMMERCIAL CLEANING - 8-AGENT ERP & SERVERLESS ENGINE`);
  console.log(`Port: ${PORT} (ESM Node.js)`);
  console.log(`- /api/firebase      : Firestore Collections & Admin Layer`);
  console.log(`- /api/odoo_sync     : Odoo ERP XML-RPC Synchronization`);
  console.log(`- /api/inbound_email : SendGrid Inbound Parse Webhook & Clara AI`);
  console.log(`- /api/auth          : Executive JWT & PIN Access Control`);
  console.log(`- /api/leads         : CRM Leads Pipeline`);
  console.log(`- /api/chat          : 24/7 Bilingual Inbound Concierge`);
  console.log(`- /api/draft         : Valérie Cold Email Pitch Drafter`);
  console.log(`\nExecutive ERP Console : http://localhost:${PORT}/agent_hub.html`);
  console.log(`Public Customer Site  : http://localhost:${PORT}/otis-final-v2_11.html`);
  console.log(`====================================================\n`);
});
