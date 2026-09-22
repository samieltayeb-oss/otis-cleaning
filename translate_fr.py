import os
import shutil

translations = {
    'lang="en"': 'lang="fr"',
    '<title>OTIS | Premium Commercial Cleaning Montreal</title>': '<title>OTIS | Entretien Ménager Commercial Premium à Montréal</title>',
    'Elevate Your Corporate Workspace': 'Rehaussez Votre Espace Corporatif',
    'Reliable, professional commercial cleaning services for Montreal businesses.': 'Services d\'entretien ménager commercial fiables et professionnels pour les entreprises de Montréal.',
    'Get a Quote': 'Obtenir une Soumission',
    'Request a Quote': 'Demander une Soumission',
    'Call Now': 'Appeler Maintenant',
    'Our Services': 'Nos Services',
    'Commercial Cleaning': 'Entretien Ménager Commercial',
    'Office Cleaning': 'Entretien de Bureaux',
    'Janitorial Services': 'Services de Conciergerie',
    'Post-Renovation Cleaning': 'Nettoyage Après Rénovation',
    'Floor Maintenance': 'Entretien de Planchers',
    'Move-In/Move-Out': 'Ménage Fin de Bail',
    'Deep Cleaning': 'Grand Ménage',
    'Interior Window Detailing': 'Lavage de Vitres Intérieur',
    'Clinic Cleaning': 'Nettoyage de Cliniques',
    'Retail Cleaning': 'Entretien de Commerces',
    'Condo Cleaning': "Entretien d\\'Espaces Communs", # escaped for JS
    'School Cleaning': "Entretien d\\'Établissements Scolaires", # escaped for JS
    'Event Cleaning': 'Nettoyage Événementiel',
    'Why OTIS?': 'Pourquoi OTIS?',
    'Transparent Pricing': 'Tarification Transparente',
    'No Hidden Fees': 'Aucun Frais Caché',
    'Same Crew Every Time': 'La Même Équipe à Chaque Fois',
    'Standardized Programs': 'Programmes Standardisés',
    'Dedicated Cleaning Team': 'Équipe d\'Entretien Dévouée',
    'Serving Greater Montreal, Quebec': 'Desservant la Grande Région de Montréal, Québec',
    'Greater Montreal Area,<br>Quebec, Canada': 'Grande Région de Montréal,<br>Québec, Canada',
    'About Us': 'À Propos',
    'Contact': 'Contact',
    'Internal Access': 'Accès Interne',
    'ISSA Canada Member': 'Membre de ISSA Canada',
    'Get a free quote today': 'Obtenez une soumission gratuite dès aujourd\'hui',
    'Schedule an on-site facility walkthrough': 'Planifier une visite d\'évaluation sur place',
    'We clean before patients arrive - every single day.': 'Nous nettoyons avant l\'arrivée de vos clients - chaque jour.',
    'Commercial-Grade Products': 'Produits de Qualité Commerciale',
    'Strict Protocol Standards': 'Normes de Protocoles Strictes',
    'Effective commercial cleaning agents.': 'Agents de nettoyage commerciaux efficaces.',
    'Professional Scrubbing & Maintenance': 'Entretien et Récurage Professionnel',
    'Auto-Scrubbing': 'Autolaveuse',
    'Thoroughly cleaned': 'Soigneusement nettoyé',
    'Effectively removes dirt and grime': 'Élimine efficacement la saleté et la crasse',
    'Add-on Services Available': 'Services Additionnels Disponibles',
    '<html lang="en">': '<html lang="fr">'
}

# 1. Translate fr/index.html
with open('index.html', 'r', encoding='utf-8') as f:
    fr_content = f.read()

for eng, fr in translations.items():
    fr_content = fr_content.replace(eng, fr)

# Let's fix the language switcher if there is one.
# If not, let's insert one into the nav.
lang_switcher_en = '<a href="/fr/" class="lang-switcher" style="margin-left:1rem;color:var(--gray2);text-decoration:none;font-weight:600;">FR</a>'
lang_switcher_fr = '<a href="/" class="lang-switcher" style="margin-left:1rem;color:var(--gray2);text-decoration:none;font-weight:600;">EN</a>'

if 'class="lang-switcher"' not in fr_content:
    fr_content = fr_content.replace('</nav>', f'{lang_switcher_fr}</nav>')
else:
    fr_content = fr_content.replace(lang_switcher_en, lang_switcher_fr)

with open('fr/index.html', 'w', encoding='utf-8') as f:
    f.write(fr_content)

print("Translated fr/index.html with escaped quotes.")
