import glob
import re

html_files = glob.glob('services/*.html') + glob.glob('fr/services/*.html') + glob.glob('sectors/*.html') + glob.glob('fr/secteurs/*.html')

hero_map = {
    'turnover-cleaning': 'otis-hero-condo.jpg',
    'nettoyage-fin-de-bail': 'otis-hero-condo.jpg',
    
    'commercial-cleaning': 'otis-hero-commercial-cleaning.jpg',
    'entretien-commercial': 'otis-hero-commercial-cleaning.jpg',
    
    'office-cleaning': 'otis-hero-office-cleaning.jpg',
    'entretien-bureaux': 'otis-hero-office-cleaning.jpg',
    
    'post-renovation': 'otis-hero-post-renovation.jpg',
    'nettoyage-apres-renovation': 'otis-hero-post-renovation.jpg',
    
    'floor-maintenance': 'otis-hero-floor-maintenance.jpg',
    'entretien-planchers': 'otis-hero-floor-maintenance.jpg',
    
    'clinic-cleaning': 'otis-hero-clinic.jpg',
    'nettoyage-cliniques': 'otis-hero-clinic.jpg',
    
    'retail-cleaning': 'otis-hero-retail.jpg',
    'nettoyage-commerces': 'otis-hero-retail.jpg',
    
    'condo-cleaning': 'otis-hero-condo.jpg',
    'nettoyage-espaces-communs': 'otis-hero-condo.jpg',
    
    'school-cleaning': 'otis-hero-school.jpg',
    'nettoyage-ecoles': 'otis-hero-school.jpg',
    
    'event-cleaning': 'otis-hero-event.jpg',
    'nettoyage-evenementiel': 'otis-hero-event.jpg'
}

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove the visible text
    content = content.replace('/* GLOBAL STYLE INJECTED */', '')

    # 2. Fix the mojibake in the dropdown menu and clean up
    content = content.replace('dY? Deep Clean', '✨ Deep Clean')
    content = content.replace('dY" Move In / Move Out', '📦 Move In / Move Out')
    content = content.replace('dY?-,? Post-Construction', '🏗️ Post-Construction')
    content = content.replace('dY 1 Janitorial', '🏢 Janitorial')
    content = content.replace('dY? Commercial Cleaning', '💼 Commercial Cleaning')
    content = content.replace('dYZ% Events Cleaning', '🎟️ Events Cleaning')
    content = content.replace('dY  Carpet Services', '🧵 Carpet Services')
    content = content.replace('o" Floor Waxing', '✨ Floor Waxing')
    # and for French if we had it translated? The nav was injected from English, so it's all english right now.
    
    # 3. Fix the background-image url to match the page topic
    filename = file.replace('\\', '/').split('/')[-1].replace('.html', '')
    correct_hero = hero_map.get(filename, 'otis-hero-commercial-cleaning.jpg')
    
    # Replace any existing otis-hero-*.jpg with the correct one
    content = re.sub(r'url\(\'/imgs/otis-hero-[^\.]+\.jpg\'\)', f"url('/imgs/{correct_hero}')", content)

    # 4. Make sure h1 doesn't look glitched. 
    # Just in case, add a subtle text shadow to h1 to ensure it lifts off the background cleanly.
    content = re.sub(r'h1\s*\{\s*font-size:\s*3rem;\s*margin-bottom:\s*1rem;\s*max-width:\s*600px;\s*line-height:\s*1.2;\s*\}', 
                     'h1 { font-size: 4rem; margin-bottom: 1rem; max-width: 800px; line-height: 1.1; text-shadow: 0 4px 20px rgba(0,0,0,0.5); }', 
                     content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed hero images, mojibake, and injected styles.")
