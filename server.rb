require 'webrick'
require 'json'
require 'net/http'
require 'uri'
require 'fileutils'

PORT = 3456
PUBLIC_DIR = File.expand_path(__dir__)
LEADS_FILE = File.join(PUBLIC_DIR, 'leads.json')
GEMINI_API_KEY = ENV['GEMINI_API_KEY'] || ''

def read_leads
  return JSON.parse(File.read(LEADS_FILE)) if File.exist?(LEADS_FILE)
  []
rescue
  []
end

def save_leads(leads)
  File.write(LEADS_FILE, JSON.pretty_generate(leads))
end

def call_gemini(payload)
  uri = URI("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=#{GEMINI_API_KEY}")
  request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
  request.body = payload.to_json

  response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(request)
  end

  data = JSON.parse(response.body)
  if response.is_a?(Net::HTTPSuccess)
    return data.dig('candidates', 0, 'content', 'parts', 0, 'text') || ''
  else
    raise data.dig('error', 'message') || 'Gemini API Error'
  end
end

server = WEBrick::HTTPServer.new(
  Port: PORT,
  DocumentRoot: PUBLIC_DIR,
  DirectoryIndex: ['index.html']
)

# CORS Options
server.mount_proc '/' do |req, res|
  res['Access-Control-Allow-Origin'] = '*'
  res['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
  res['Access-Control-Allow-Headers'] = 'Content-Type'
  
  if req.request_method == 'OPTIONS'
    res.status = 204
  elsif req.path == '/api/leads'
    if req.request_method == 'GET'
      res.content_type = 'application/json'
      res.body = read_leads.to_json
    elsif req.request_method == 'POST'
      begin
        lead = JSON.parse(req.body)
        lead['id'] ||= "LEAD-#{rand(1000..9999)}"
        lead['timestamp'] ||= Time.now.utc.iso8601
        
        leads = read_leads
        leads.unshift(lead)
        save_leads(leads)
        
        res.content_type = 'application/json'
        res.body = { success: true, lead: lead }.to_json
      rescue => e
        res.status = 400
        res.body = { error: 'Invalid JSON' }.to_json
      end
    end
  elsif req.path == '/api/chat' && req.request_method == 'POST'
    begin
      payload = JSON.parse(req.body)
      contents = payload['messages'].map do |msg|
        {
          'role' => msg['role'] == 'assistant' ? 'model' : 'user',
          'parts' => [{ 'text' => msg['content'] }]
        }
      end

      system_prompt = <<~PROMPT
        You are the OTIS Customer Success AI (Bilingual: English & Quebec French).
        You work for OTIS Commercial Cleaning in Montreal. 
        Your primary goal is to qualify inbound leads by asking:
        1. Are they looking for commercial or residential cleaning?
        2. What is the approximate square footage?
        3. What is their name and phone number so Zan (the owner) can call them back?
        Be highly professional, polite, and concise. Do not give exact pricing. If they ask for a quote, explain that you need their square footage and phone number for Zan to provide an accurate estimate.
        Switch languages automatically based on the user's language.
      PROMPT

      reply = call_gemini({
        'systemInstruction' => { 'parts' => [{ 'text' => system_prompt }] },
        'contents' => contents,
        'generationConfig' => { 'temperature' => 0.7 }
      })

      res.content_type = 'application/json'
      res.body = { reply: reply }.to_json
    rescue => e
      res.status = 500
      res.body = { error: e.message }.to_json
    end
  elsif req.path == '/api/draft' && req.request_method == 'POST'
    begin
      payload = JSON.parse(req.body)
      lang_instruction = payload['language'] == 'fr' ? "Write the email in highly professional Quebec French (not France French). Use 'vous'." : "Write the email in highly professional English."
      
      prompt = <<~PROMPT
        You are Zan, the owner of OTIS Commercial Cleaning in Montreal. 
        Draft a cold B2B outreach email for the following lead:
        Business Name: #{payload['leadName']}
        Industry/Category: #{payload['industry'] || 'Commercial Business'}
        Address: #{payload['address'] || 'Montreal Area'}
        
        Strategy to use: "The Pre-Winter Wedge". 
        - Mention the upcoming winter season and salt/calcium buildup on floors.
        - Mention the March 2026 CPEEP decree and CNESST compliance. 
        - *Crucial detail*: Mention that the new Decree Legal Wage is strictly 23/h. Many cheap subcontractors are underpaying their staff, which makes the property owner (the client) legally and financially co-responsible for massive fines. 
        - Offer a free 10-minute compliance audit and a free demonstration of high-speed floor scrubbing with our Tennant equipment.
        - Keep it under 150 words. Do not be overly salesy. Be authoritative, helpful, and position OTIS as the risk-management choice.
        
        #{lang_instruction}
      PROMPT

      draft = call_gemini({
        'contents' => [{ 'parts' => [{ 'text' => prompt }] }],
        'generationConfig' => { 'temperature' => 0.6 }
      })

      res.content_type = 'application/json'
      res.body = { draft: draft }.to_json
    rescue => e
      res.status = 500
      res.body = { error: e.message }.to_json
    end
  else
    # Let WEBrick handle standard static file serving if it's not our API routes
    
    file_handler = WEBrick::HTTPServlet::FileHandler.new(server, PUBLIC_DIR)
    file_handler.do_GET(req, res)
  end
end

trap('INT') { server.shutdown }

puts "\n===================================================="
puts "🤖 OTIS AI SERVER RUNNING ON RUBY"
puts "Port: #{PORT}"
puts "API Key Loaded: YES"
puts "Customer Prototype: http://localhost:#{PORT}/otis-final-v2_11.html"
puts "CRM Dashboard:      http://localhost:#{PORT}/crm.html"
puts "====================================================\n\n"

server.start
