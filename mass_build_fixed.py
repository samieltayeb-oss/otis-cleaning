import os
import shutil

en_template = "template_en.html"
fr_template = "template_fr.html"

os.makedirs("sectors", exist_ok=True)
os.makedirs("fr/secteurs", exist_ok=True)

pages = [
    {
        "en_path": "services/office-cleaning.html",
        "fr_path": "fr/services/entretien-bureaux.html",
        "en_title": "Premium Office Cleaning Montreal",
        "fr_title": "Entretien de Bureaux Premium à Montréal",
        "en_h1": "Professional Office Cleaning in Montreal",
        "fr_h1": "Entretien de Bureaux Professionnel à Montréal",
        "en_hero": "otis-hero-office-cleaning.jpg",
        "en_desc": "Keep your Montreal office pristine with our dedicated corporate cleaning teams. Transparent pricing and secure protocols.",
        "fr_desc": "Gardez votre bureau de Montréal impeccable grâce à nos équipes d'entretien corporatif dédiées. Tarifs transparents et protocoles sécurisés."
    },
    {
        "en_path": "services/turnover-cleaning.html",
        "fr_path": "fr/services/nettoyage-fin-de-bail.html",
        "en_title": "Move-In & Move-Out Turnover Cleaning Montreal",
        "fr_title": "Ménage Fin de Bail & Déménagement Montréal",
        "en_h1": "Spotless Turnover Cleaning Services",
        "fr_h1": "Ménage de Déménagement et Fin de Bail",
        "en_hero": "otis-hero-office-cleaning.jpg", # Fallback
        "en_desc": "Comprehensive move-in and move-out cleaning for Montreal property managers and tenants.",
        "fr_desc": "Nettoyage complet d'emménagement et de déménagement pour les gestionnaires immobiliers et locataires de Montréal."
    },
    {
        "en_path": "services/post-renovation.html",
        "fr_path": "fr/services/nettoyage-apres-renovation.html",
        "en_title": "Post-Renovation Cleaning Montreal",
        "fr_title": "Nettoyage Après Rénovation Montréal",
        "en_h1": "Detailed Post-Construction & Reno Cleanup",
        "fr_h1": "Nettoyage Détaillé Après Rénovation",
        "en_hero": "otis-hero-post-renovation.jpg",
        "en_desc": "Remove fine dust and construction debris with our professional post-renovation cleaning services in Montreal.",
        "fr_desc": "Éliminez la fine poussière et les débris de construction grâce à nos services professionnels de nettoyage après rénovation à Montréal."
    },
    {
        "en_path": "services/floor-maintenance.html",
        "fr_path": "fr/services/entretien-planchers.html",
        "en_title": "Commercial Floor Maintenance & Auto-Scrubbing",
        "fr_title": "Entretien de Planchers et Récurage Commercial",
        "en_h1": "Heavy-Duty Floor Scrubbing & Maintenance",
        "fr_h1": "Récurage et Entretien de Planchers Robustes",
        "en_hero": "otis-hero-floor-maintenance.jpg",
        "en_desc": "Restore your hard floors with our industrial Tennant auto-scrubbers and specialized commercial floor maintenance.",
        "fr_desc": "Restaurez vos planchers durs avec nos autolaveuses industrielles Tennant et notre entretien de planchers commercial spécialisé."
    },
    {
        "en_path": "sectors/clinic-cleaning.html",
        "fr_path": "fr/secteurs/nettoyage-cliniques.html",
        "en_title": "Medical Clinic Cleaning Services Montreal",
        "fr_title": "Nettoyage de Cliniques Médicales Montréal",
        "en_h1": "Strict Medical Clinic Cleaning Protocols",
        "fr_h1": "Protocoles Stricts de Nettoyage de Cliniques",
        "en_hero": "otis-hero-clinic.jpg",
        "en_desc": "Ensure a hygienic environment for your patients with our specialized medical and clinic cleaning services.",
        "fr_desc": "Assurez un environnement hygiénique pour vos patients grâce à nos services spécialisés de nettoyage médical et de cliniques."
    },
    {
        "en_path": "sectors/retail-cleaning.html",
        "fr_path": "fr/secteurs/nettoyage-commerces.html",
        "en_title": "Retail Store Cleaning Montreal",
        "fr_title": "Entretien de Commerces et Boutiques Montréal",
        "en_h1": "Impeccable Retail & Shop Cleaning",
        "fr_h1": "Entretien Impeccable de Commerces",
        "en_hero": "otis-hero-retail.jpg",
        "en_desc": "Create a welcoming shopping experience with our reliable retail and store cleaning services across Montreal.",
        "fr_desc": "Créez une expérience de magasinage accueillante grâce à nos services fiables de nettoyage de commerces et boutiques à Montréal."
    },
    {
        "en_path": "sectors/condo-cleaning.html",
        "fr_path": "fr/secteurs/nettoyage-espaces-communs.html",
        "en_title": "Condo Building & Common Area Cleaning Montreal",
        "fr_title": "Entretien d'Espaces Communs & Condos Montréal",
        "en_h1": "Strata & Condo Common Area Maintenance",
        "fr_h1": "Entretien d'Espaces Communs de Condos",
        "en_hero": "otis-hero-condo.jpg",
        "en_desc": "Keep your residential building's lobbies, hallways, and common areas spotless for your residents.",
        "fr_desc": "Gardez les halls d'entrée, les corridors et les espaces communs de votre immeuble résidentiel impeccables pour vos résidents."
    },
    {
        "en_path": "sectors/school-cleaning.html",
        "fr_path": "fr/secteurs/nettoyage-ecoles.html",
        "en_title": "School & Daycare Cleaning Montreal",
        "fr_title": "Entretien d'Écoles et Garderies Montréal",
        "en_h1": "Safe, Thorough School & Daycare Cleaning",
        "fr_h1": "Nettoyage Sécuritaire et Minutieux d'Écoles",
        "en_hero": "otis-hero-school.jpg",
        "en_desc": "Maintain a healthy learning environment with our specialized cleaning services for Montreal schools and daycares.",
        "fr_desc": "Maintenez un environnement d'apprentissage sain grâce à nos services spécialisés de nettoyage pour les écoles et garderies de Montréal."
    },
    {
        "en_path": "sectors/event-cleaning.html",
        "fr_path": "fr/secteurs/nettoyage-evenementiel.html",
        "en_title": "Event Venue Cleaning Montreal",
        "fr_title": "Nettoyage Événementiel Montréal",
        "en_h1": "Pre & Post Event Venue Cleaning",
        "fr_h1": "Nettoyage Avant et Après Événement",
        "en_hero": "otis-hero-event.jpg",
        "en_desc": "Fast, reliable cleaning turnarounds for Montreal event venues, concert halls, and conference centers.",
        "fr_desc": "Services de nettoyage rapides et fiables pour les salles d'événements, salles de concert et centres de conférence de Montréal."
    }
]

with open(en_template, 'r', encoding='utf-8') as f:
    en_html = f.read()
with open(fr_template, 'r', encoding='utf-8') as f:
    fr_html = f.read()

for p in pages:
    # 1. Process EN
    html = en_html
    # Title
    html = html.replace("OTIS | Premium Commercial Cleaning Montreal", f"OTIS | {p['en_title']}")
    # H1
    html = html.replace("Reliable Commercial Cleaning for Montreal Businesses", p['en_h1'])
    # Meta Description
    html = html.replace("Professional commercial cleaning services in Greater Montreal. Reliable teams, transparent pricing, and standardized protocols. Request a free quote today.", p['en_desc'])
    # Hero Image
    html = html.replace("otis-hero-commercial-cleaning.jpg", p['en_hero'])
    
    # Hreflang and Canonical URLs
    en_slug = p['en_path'].replace(".html", "")
    fr_slug = p['fr_path'].replace(".html", "")
    html = html.replace("/services/commercial-cleaning", f"/{en_slug}")
    html = html.replace("/fr/services/entretien-commercial", f"/{fr_slug}")
    
    # Breadcrumbs/Nav Link fixes
    # No dynamic breadcrumbs found, but we ensure lang-switcher points to fr_slug
    
    with open(p['en_path'], 'w', encoding='utf-8') as f:
        f.write(html)
    
    # 2. Process FR
    html = fr_html
    # Title
    html = html.replace("OTIS | Entretien Ménager Commercial Premium à Montréal", f"OTIS | {p['fr_title']}")
    # H1
    html = html.replace("Entretien Ménager Commercial Fiable à Montréal", p['fr_h1'])
    # Meta Description
    html = html.replace("Services professionnels d'entretien ménager commercial dans la grande région de Montréal. Équipes fiables, prix transparents et protocoles standardisés.", p['fr_desc'])
    # Hero Image
    html = html.replace("otis-hero-commercial-cleaning.jpg", p['en_hero'])
    
    # Hreflang and Canonical URLs
    html = html.replace("/services/commercial-cleaning", f"/{en_slug}")
    html = html.replace("/fr/services/entretien-commercial", f"/{fr_slug}")
    
    with open(p['fr_path'], 'w', encoding='utf-8') as f:
        f.write(html)

print("Mass-build of 18 pages completed successfully.")
