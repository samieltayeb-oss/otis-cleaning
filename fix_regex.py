import os
import re

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or 'imgs' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except UnicodeDecodeError:
                continue
            
            orig = content
            # Fix EN links
            content = re.sub(r'href="/services/turnover-cleaning"([^>]*>.*?Deep Clean.*?</a>)', r'href="/services/deep-cleaning"\1', content, flags=re.IGNORECASE|re.DOTALL)
            content = re.sub(r'href="/services/turnover-cleaning"([^>]*>.*?All Residential.*?</a>)', r'href="/services/residential-cleaning"\1', content, flags=re.IGNORECASE|re.DOTALL)
            
            # Fix FR links
            content = re.sub(r'href="/fr/services/nettoyage-fin-de-bail"([^>]*>.*?Grand M.*?nage.*?</a>)', r'href="/fr/services/grand-menage"\1', content, flags=re.IGNORECASE|re.DOTALL)
            content = re.sub(r'href="/fr/services/nettoyage-fin-de-bail"([^>]*>.*?Tous les R.*?sidentiels.*?</a>)', r'href="/fr/services/nettoyage-residentiel"\1', content, flags=re.IGNORECASE|re.DOTALL)

            if orig != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed regex links in {filepath}")
