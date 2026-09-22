import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove mobile menu internal links
content = re.sub(r'<a href=\"/\" class=\"mm-link\" style=\"color:var\(--orange\); font-weight:700; text-decoration:none;\">.*?</a>', '', content, flags=re.DOTALL)
content = re.sub(r'<a href=\"/erp\.html\" class=\"mm-link\" style=\"color:var\(--orange\); font-weight:700; text-decoration:none;\">.*?</a>', '', content, flags=re.DOTALL)
content = re.sub(r'<a href=\"/crm\.html\" class=\"mm-link\" style=\"color:var\(--orange\); font-weight:700; text-decoration:none;\">.*?</a>', '', content, flags=re.DOTALL)
content = re.sub(r'<a href=\"/leads\.html\" class=\"mm-link\" style=\"color:var\(--orange\); font-weight:700; text-decoration:none;\">.*?</a>', '', content, flags=re.DOTALL)
content = re.sub(r'<a href=\"/\" class=\"nav-cta\" style=\"background:rgba\(247,148,29,0\.15\);border:1px solid var\(--bO\);color:var\(--orange\);[^\"]+\">.*?</a>', '', content, flags=re.DOTALL)
content = re.sub(r'<a href=\"agent_hub\.html\" style=\"background:#eab308;[^\"]+\">.*?</a>', '', content, flags=re.DOTALL)

# Add footer links
# Search for <div class="footer-links"> or similar structure.
# Let's insert before "Built by <a href='https://nexorayyc.io'" or similar
footer_internal = '''
    <div class="f-col">
      <h4 style="color:var(--white); margin-bottom:1rem; font-size:1.1rem; font-weight:800;">Internal</h4>
      <a href="/internal/blueprint" style="color:var(--gray); text-decoration:none; margin-bottom:0.5rem; display:block;">Executive Blueprint</a>
      <a href="/internal/command-center" style="color:var(--gray); text-decoration:none; margin-bottom:0.5rem; display:block;">Command Center</a>
    </div>
'''

content = content.replace('<div class="footer-bottom">', footer_internal + '<div class="footer-bottom">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Links removed and footer updated.")
