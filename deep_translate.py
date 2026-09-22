import re

# Load the file
with open('fr/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the EN button styling
content = content.replace('<a href="/" id="lang-btn" class="nav-btn-lang" style="text-decoration:none;display:flex;align-items:center;justify-content:center;">EN</a>',
                          '<a href="/" id="lang-btn" class="nav-btn-lang" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;background:#1a1f2e;color:#fff;border-radius:20px;padding:6px 14px;font-size:0.85rem;font-weight:600;margin-right:1rem;border:1px solid rgba(255,255,255,0.1);">EN</a>')

# Translations for the rest of the page
translations = {
    # Hero leftovers
    'Professional Cleaning, Done Right.': 'Un entretien professionnel, fait dans les règles de l\'art.',
    'OTIS delivers consistent, high-quality cleaning for businesses<br>and homes across Montreal. Reliable. Insured. Member of ISSA Canada.': 'OTIS assure un entretien ménager commercial rigoureux et<br>conforme pour les édifices et entreprises de Montréal. Fiable. Assuré. Membre de ISSA Canada.',
    'We respond within 2 business hours': 'Nous répondons en moins de 2 heures ouvrables',
    
    # Radar
    'LIVE DISPATCH RADAR': 'RADAR DE DÉPLOIEMENT EN DIRECT',
    'ACTIVE CREWS': 'ÉQUIPES ACTIVES',
    'AVG RESPONSE': 'RÉPONSE MOY.',
    'DECREE LEGAL WAGE': 'SALAIRE DÉCRET',
    'Clients Served': 'Clients Desservis',
    'Google Rating': 'Évaluation Google',
    'CNESST Conforme': 'Conforme CNESST',

    # Sectors
    'WHO WE SERVE': 'QUI NOUS DESSERVONS',
    'Sectors We Cover': 'Secteurs Couverts',
    'From corporate towers to clinics and schools &mdash; consistent quality in every<br>space across Montreal.': 'Des tours corporatives aux cliniques et écoles &mdash; une qualité constante dans chaque<br>espace à travers Montréal.',
    'Offices': 'Bureaux',
    'Shops': 'Commerces',
    'Condos': 'Condos',
    'Events': 'Événements',
    'Clinics': 'Cliniques',
    'Schools': 'Écoles',
    'Commercial': 'Commercial',
    'Residential': 'Résidentiel',
    'Medical': 'Médical',
    'Education': 'Éducation',
    'View Details &rarr;': 'Voir les Détails &rarr;',

    # How it works
    'How It Works': 'Comment Ça Fonctionne',
    'Simple. Reliable. Consistent.': 'Simple. Fiable. Constant.',
    'Request a Quote': 'Demander une Soumission',
    'Call, email, or fill our form. We respond within 2 hours with clear pricing.': 'Appelez, écrivez-nous ou remplissez notre formulaire. Nous répondons en 2 heures avec des tarifs clairs.',
    'We Build Your Plan': 'Nous Bâtissons Votre Plan',
    'A custom cleaning plan that fits your schedule and budget.': 'Un plan d\'entretien sur mesure qui respecte votre horaire et votre budget.',
    'Our Team Gets to Work': 'Notre Équipe se Met au Travail',
    'ISSA-certified professionals arrive on time and clean to the highest standards.': 'Des professionnels certifiés arrivent à l\'heure et nettoient selon les plus hauts standards.',
    'You Enjoy the Results': 'Vous Profitez des Résultats',
    'Walk into a spotless space. We follow up to ensure 100% satisfaction.': 'Entrez dans un espace impeccable. Nous faisons un suivi pour assurer 100% de satisfaction.',

    # Bottom CTA
    'READY TO GET STARTED?': 'PRÊT À COMMENCER ?',
    'Your Clean Space Is One Call Away': 'Votre Espace Propre N\'est Qu\'à Un Appel',
    'Get a Free Quote': 'Obtenir une Soumission Gratuite',
    'View Our Work': 'Voir Nos Réalisations',

    # Footer
    'Professional cleaning for businesses<br>and homes across Montreal since 2020.': 'Entretien professionnel pour entreprises<br>et résidences à travers Montréal depuis 2020.',
    'COMPANY': 'ENTREPRISE',
    'Home': 'Accueil',
    'Who We Are': 'À Propos',
    'Gallery': 'Réalisations',
    'Pricing': 'Tarifs',
    'Contact Us': 'Nous Joindre',
    'Get a Free Quote &rarr;': 'Obtenir une Soumission &rarr;',
    'RESIDENTIAL': 'RÉSIDENTIEL',
    'All Residential': 'Tous les Services Résidentiels',
    'Deep Clean': 'Grand Ménage',
    'Move In / Move Out': 'Ménage Fin de Bail',
    'Post-Construction': 'Nettoyage Après Construction',
    'COMMERCIAL': 'COMMERCIAL',
    'All Commercial': 'Tous les Services Commerciaux',
    'Commercial Cleaning': 'Entretien Ménager Commercial',
    'Janitorial Services': 'Services de Conciergerie',
    'Events Cleaning': 'Nettoyage Événementiel',
    'Carpet Services': 'Nettoyage de Tapis',
    'Floor Waxing': 'Cirage de Planchers',
    'CERTIFICATIONS': 'CERTIFICATIONS',
    'ISSA Canada Member': 'Membre de ISSA Canada',
    'Conforme CNESST': 'Conforme CNESST', # Already French, but good to list
    'Proudly Canadian 🍁': 'Fièrement Canadien 🍁',
    '📍 Greater Montreal Area,<br>Quebec, Canada': '📍 Grande Région de Montréal,<br>Québec, Canada',
    'INTERNAL': 'INTERNE',
    'Executive Blueprint': 'Blueprint Exécutif',
    'Command Center': 'Centre de Commande',
    '© 2026 OTIS Maintenance. All rights reserved.': '© 2026 OTIS Maintenance. Tous droits réservés.',
    'Privacy Policy': 'Politique de Confidentialité',
    'Terms of Service': 'Conditions de Service'
}

for eng, fr in translations.items():
    content = content.replace(eng, fr)

# Write it back
with open('fr/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied deep French translations to fr/index.html and fixed EN button styling.")
