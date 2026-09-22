import json
from bs4 import BeautifulSoup
import re

files_en = ['index.html', 'services/commercial-cleaning.html']
files_fr = ['fr/index.html', 'fr/services/entretien-commercial.html']

for file in files_en + files_fr:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update Address in Footer
    # Looking for variants of "Greater Montreal Area,<br>Quebec, Canada"
    content = re.sub(r'Greater Montreal Area,<br>\s*Quebec, Canada', '2447 Ave Madison<br>Montreal, QC H4B 2T5', content)
    content = re.sub(r'Grande Région de Montréal,<br>\s*Québec, Canada', '2447 Ave Madison<br>Montréal, QC H4B 2T5', content)
    content = re.sub(r'Serving Greater Montreal Area', '2447 Ave Madison, Montreal, QC H4B 2T5', content)
    content = re.sub(r'Desservant la Grande Région de Montréal', '2447 Ave Madison, Montréal, QC H4B 2T5', content)
    
    # 2. Add Insurance
    # I'll replace the "Proudly Canadian 🍁" or add it next to "ISSA Canada Member"
    if file in files_en:
        if '$2M General Liability Insurance' not in content:
            content = content.replace('ISSA Canada Member', 'ISSA Canada Member<br>$2M General Liability Insurance')
            # For the pilot page standard list:
            content = content.replace('<li>Trash and recycling removal</li>', '<li>Trash and recycling removal</li>\n          <li>Fully covered by $2M General Liability Insurance</li>')
    else:
        if 'Assurance responsabilité civile de 2 M$' not in content:
            content = content.replace('Membre de ISSA Canada', 'Membre de ISSA Canada<br>Assurance responsabilité civile de 2 M$')
            # For the pilot page standard list:
            content = content.replace('<li>Collecte des déchets et du recyclage</li>', '<li>Collecte des déchets et du recyclage</li>\n          <li>Couvert par une assurance responsabilité civile de 2 M$</li>')

    # 3. Phone check
    # Ensure all phones are +1 (438) 935-9725
    content = re.sub(r'\+1 \(\d{3}\) \d{3}-\d{4}', '+1 (438) 935-9725', content)

    # 4. JSON-LD Structured Data
    # For LocalBusiness, let's update address
    if 'application/ld+json' in content:
        # We can use regex to inject the address into the JSON-LD
        if '"address"' not in content:
            # Add it if missing
            json_addr = ',"address": {"@type": "PostalAddress", "streetAddress": "2447 Ave Madison", "addressLocality": "Montreal", "addressRegion": "QC", "postalCode": "H4B 2T5", "addressCountry": "CA"}'
            content = content.replace('"addressCountry": "CA"', '"addressCountry": "CA"' + json_addr)
            # Actually, let's just do a string replace on the region if they just had "Montreal"
            if '"addressRegion": "QC"' not in content:
                content = re.sub(r'"address":\s*\{[^\}]+\}', '{"@type": "PostalAddress", "streetAddress": "2447 Ave Madison", "addressLocality": "Montreal", "addressRegion": "QC", "postalCode": "H4B 2T5", "addressCountry": "CA"}', content)
        else:
            # Replace existing address block
            content = re.sub(r'"address":\s*\{[^\}]+\}', '"address": {"@type": "PostalAddress", "streetAddress": "2447 Ave Madison", "addressLocality": "Montreal", "addressRegion": "QC", "postalCode": "H4B 2T5", "addressCountry": "CA"}', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated HTML files with Zan's confirmed details.")
