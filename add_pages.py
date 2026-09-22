import json

new_pages = [
    {
        "en_path": "services/residential-cleaning.html",
        "fr_path": "fr/services/nettoyage-residentiel.html",
        "en_title": "Residential Cleaning Services Montreal",
        "fr_title": "Services de Nettoyage Résidentiel Montréal",
        "en_h1": "Premium Residential Cleaning Services",
        "fr_h1": "Services de Nettoyage Résidentiel Premium",
        "en_hero": "otis-hero-condo.jpg",
        "en_desc": "Trusted residential cleaning services in Montreal. Move-in, move-out, and deep cleaning for homes and apartments.",
        "fr_desc": "Services de nettoyage résidentiel de confiance à Montréal. Emménagement, déménagement et grand ménage pour maisons et appartements."
    },
    {
        "en_path": "services/deep-cleaning.html",
        "fr_path": "fr/services/grand-menage.html",
        "en_title": "Deep Cleaning Services Montreal",
        "fr_title": "Services de Grand Ménage Montréal",
        "en_h1": "Thorough Deep Cleaning & Sanitization",
        "fr_h1": "Grand Ménage et Désinfection Minutieuse",
        "en_hero": "otis-hero-condo.jpg",
        "en_desc": "Detailed deep cleaning services for Montreal homes and businesses. We clean the hidden dirt and grime.",
        "fr_desc": "Services de grand ménage détaillés pour les maisons et entreprises de Montréal. Nous nettoyons la saleté incrustée."
    }
]

with open('mass_build_fixed.py', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('for p in pages:', 'pages.extend(' + str(new_pages) + ')\nfor p in pages:')

with open('mass_build_fixed2.py', 'w', encoding='utf-8') as f:
    f.write(c)
