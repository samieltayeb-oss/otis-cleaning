import re

with open('internal/command-center.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'function lockExecutiveSession\(\) \{.*?\}', 'function lockExecutiveSession() { window.location.href = "/api/internal/logout"; }', content, flags=re.DOTALL)

with open('internal/command-center.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Logout fixed.")
