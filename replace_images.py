import os
import re

html_files = [os.path.join(r, f) for r, d, files in os.walk('.') if 'OTIS_Full_Project' not in r for f in files if f.endswith('.html')]

mapping = {
    'Offices': 'imgs/offices.png',
    'Shops': 'imgs/shops and businesses.png',
    'Condos': 'imgs/Apartments & Condos.png',
    'Events': 'imgs/Events & Venues.png',
    'Clinics': 'imgs/Clinics & Medical.png',
    'Schools': 'imgs/Schools & Education.png'
}

for path in html_files:
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    for alt_tag, img_path in mapping.items():
        pattern = r'<img src=.data:image/[^>]+. alt=.' + alt_tag + r'.>'
        replacement = f'<img src=\"{img_path}\" alt=\"{alt_tag}\" style=\"width:100%; height:100%; object-fit:cover;\">'
        content = re.sub(pattern, replacement, content)
    
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)

print('Images replaced successfully!')
