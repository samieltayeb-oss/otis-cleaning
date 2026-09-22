#!/usr/bin/env python3
"""
OTIS Commercial Cleaning — Python Development & API Server
Greater Montreal Commercial Operations & Executive Command Center

Handles:
- Static file serving from workspace root
- GET  /api/leads -> returns current leads from leads.json
- POST /api/leads -> receives inbound lead, prepends to leads.json, returns 200 OK
"""

import http.server
import socketserver
import os
import json
import mimetypes
from urllib.parse import urlparse, unquote

PORT = int(os.environ.get('PORT', 3000))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LEADS_FILE = os.path.join(BASE_DIR, 'leads.json')

class OtisRequestHandler(http.server.BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_HEAD(self):
        self.do_GET(head_only=True)

    def do_GET(self, head_only=False):
        parsed = urlparse(self.path)
        pathname = unquote(parsed.path)

        if pathname == '/api/leads':
            leads = []
            if os.path.exists(LEADS_FILE):
                try:
                    with open(LEADS_FILE, 'r', encoding='utf-8') as f:
                        leads = json.load(f)
                except Exception as e:
                    print(f"Error reading {LEADS_FILE}: {e}")
            
            body = json.dumps(leads, ensure_ascii=False, indent=2).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            if not head_only:
                self.wfile.write(body)
            return

        if pathname == '/' or pathname == '':
            pathname = '/index.html'

        safe_path = os.path.normpath(pathname.lstrip('/'))
        file_path = os.path.join(BASE_DIR, safe_path)

        if not os.path.isfile(file_path):
            not_found = b"<h1>404 Not Found</h1><p>Resource not found on OTIS Command Center.</p>"
            self.send_response(404)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(not_found)))
            self.end_headers()
            if not head_only:
                self.wfile.write(not_found)
            return

        mime_type, _ = mimetypes.guess_type(file_path)
        if not mime_type:
            if file_path.endswith('.html'): mime_type = 'text/html; charset=utf-8'
            elif file_path.endswith('.json'): mime_type = 'application/json; charset=utf-8'
            elif file_path.endswith('.js'): mime_type = 'application/javascript; charset=utf-8'
            elif file_path.endswith('.css'): mime_type = 'text/css; charset=utf-8'
            else: mime_type = 'application/octet-stream'

        try:
            with open(file_path, 'rb') as f:
                content = f.read()
            self.send_response(200)
            self.send_header('Content-Type', mime_type)
            self.send_header('Content-Length', str(len(content)))
            self.end_headers()
            if not head_only:
                self.wfile.write(content)
        except Exception as e:
            err_msg = f"500 Internal Error: {e}".encode('utf-8')
            self.send_response(500)
            self.send_header('Content-Type', 'text/plain')
            self.send_header('Content-Length', str(len(err_msg)))
            self.end_headers()
            self.wfile.write(err_msg)

    def do_POST(self):
        parsed = urlparse(self.path)
        pathname = unquote(parsed.path)

        if pathname == '/api/leads':
            length = int(self.headers.get('Content-Length', 0))
            raw_data = self.rfile.read(length).decode('utf-8')
            try:
                lead = json.loads(raw_data) if raw_data else {}
                import random, datetime
                if not lead.get('id'):
                    lead['id'] = f"LEAD-{random.randint(1000, 9999)}"
                if not lead.get('timestamp'):
                    lead['timestamp'] = datetime.datetime.utcnow().isoformat() + 'Z'

                leads = []
                if os.path.exists(LEADS_FILE):
                    try:
                        with open(LEADS_FILE, 'r', encoding='utf-8') as f:
                            leads = json.load(f)
                    except Exception:
                        leads = []
                
                leads.insert(0, lead)
                with open(LEADS_FILE, 'w', encoding='utf-8') as f:
                    json.dump(leads, f, ensure_ascii=False, indent=2)

                print(f"[LEAD RECEIVED] {lead.get('name')} ({lead.get('business', lead.get('service'))})")

                resp = json.dumps({"success": True, "lead": lead}).encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(resp)))
                self.end_headers()
                self.wfile.write(resp)
            except Exception as e:
                resp = json.dumps({"error": str(e)}).encode('utf-8')
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(resp)))
                self.end_headers()
                self.wfile.write(resp)
            return

        self.send_response(404)
        self.end_headers()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), OtisRequestHandler) as httpd:
        print("====================================================")
        print(f"  OTIS Commercial Cleaning Platform Server (Python)")
        print(f"  Running on: http://localhost:{PORT}/")
        print(f"  Executive Command Center: http://localhost:{PORT}/")
        print(f"  Customer Prototype:      http://localhost:{PORT}/otis-final-v2_11.html")
        print(f"  Leads API:               http://localhost:{PORT}/api/leads")
        print("====================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
