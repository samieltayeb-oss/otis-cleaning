import re

with open('internal/command-center.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the auth-overlay HTML
content = re.sub(r'<!-- EXECUTIVE AUTHENTICATION GATE OVERLAY -->.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)

# Let's just remove the JS check function entirely and add logout
# Instead of complex regex, let's just write a script to replace the logout function

content = re.sub(r'function lockConsole\(\) \{.*?\}', 'function lockConsole() { window.location.href = "/api/internal/logout"; }', content, flags=re.DOTALL)
content = re.sub(r'async function verifySession\(\) \{.*?return false;\s*\}', 'async function verifySession() { return true; }', content, flags=re.DOTALL)
content = re.sub(r'async function checkPin\(\) \{.*?\}', 'async function checkPin() { }', content, flags=re.DOTALL)

with open('internal/command-center.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed client auth overlay and updated logout.")
