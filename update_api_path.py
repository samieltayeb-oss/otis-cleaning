import re

with open('internal/command-center.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('/api/ledger_sync', '/api/internal/ledger_sync')

with open('internal/command-center.html', 'w', encoding='utf-8') as f:
    f.write(content)
