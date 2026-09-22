import os

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
                with open(filepath, 'r', encoding='latin-1') as f:
                    content = f.read()
            
            orig = content
            # Fix deep clean link
            content = content.replace('href="/services/turnover-cleaning">🧽 Deep Clean', 'href="/services/deep-cleaning">🧽 Deep Clean')
            # Fix All residential link
            content = content.replace('href="/services/turnover-cleaning">All Residential', 'href="/services/residential-cleaning">All Residential')
            
            # Fix FR links
            content = content.replace('href="/fr/services/nettoyage-fin-de-bail">🧽 Grand Ménage', 'href="/fr/services/grand-menage">🧽 Grand Ménage')
            content = content.replace('href="/fr/services/nettoyage-fin-de-bail">Tous les Résidentiels', 'href="/fr/services/nettoyage-residentiel">Tous les Résidentiels')

            if orig != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed links in {filepath}")
