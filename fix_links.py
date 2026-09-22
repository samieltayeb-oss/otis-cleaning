import os

with open('template_en.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Fix deep clean link
c = c.replace('href="/services/turnover-cleaning">🧽 Deep Clean', 'href="/services/deep-cleaning">🧽 Deep Clean')
# Fix All residential link
c = c.replace('href="/services/turnover-cleaning">All Residential', 'href="/services/residential-cleaning">All Residential')

with open('template_en.html', 'w', encoding='utf-8') as f:
    f.write(c)

with open('template_fr.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Fix deep clean link
c = c.replace('href="/fr/services/nettoyage-fin-de-bail">🧽 Grand Ménage', 'href="/fr/services/grand-menage">🧽 Grand Ménage')
# Fix All residential link
c = c.replace('href="/fr/services/nettoyage-fin-de-bail">Tous les Résidentiels', 'href="/fr/services/nettoyage-residentiel">Tous les Résidentiels')

with open('template_fr.html', 'w', encoding='utf-8') as f:
    f.write(c)
