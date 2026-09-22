import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update phone number
content = content.replace('(514) 555-OTIS', '+1 (438) 935-9725')

# 2. Update address
content = content.replace('2447 Ave Madison,<br>Montreal H4B2T5, QC', 'Greater Montreal Area,<br>Quebec, Canada')
content = content.replace('2447 Ave Madison, Montreal H4B 2T5', 'Greater Montreal Area, Quebec')

# 3. Clean up certifications in footer
content = content.replace('Fully Insured &amp; Bonded<br>', '')
content = content.replace('UL Eco-Certified<br>', '')
content = content.replace('WCB Compliant<br>', '')
content = content.replace('ISSA Canada Certified', 'ISSA Canada Member')
content = content.replace('ISSA Certified Team', 'Dedicated Cleaning Team')
content = content.replace('ISSA-Certified Programs', 'Standardized Programs')
content = content.replace('ISSA-Certified Standards', 'Standardized Protocols')
content = content.replace('ISSA Certified', 'ISSA Canada Member')
content = content.replace('??? Fully Insured & Bonded\\n', '')
content = content.replace('?? UL Eco-Certified\\n', '')
content = content.replace('?? Conforme CNESST', '')

# 4. Remove unsupported claims
content = content.replace('Health Authority Standards', 'Strict Protocol Standards')
content = content.replace('Medical-Safe Products', 'Commercial-Grade Products')
content = content.replace('Hospital-grade disinfectants effective against pathogens.', 'Effective commercial cleaning agents.')
content = content.replace('Medical-Grade Disinfection', 'Commercial Surface Cleaning')
content = content.replace('100% disinfected', 'Thoroughly cleaned')
content = content.replace('Eliminates all germs', 'Effectively removes dirt and grime')
content = content.replace('Diamond Mirror Finish', 'Professional Scrubbing & Maintenance')
content = content.replace('High-Speed Buffing', 'Auto-Scrubbing')

# 5. Handle pricing rows by just hiding them using CSS or replacing the text
content = content.replace('Exterior Window Cleaning', 'Interior Window Detailing')
content = content.replace('Exterior Power Washing', 'Add-on Services Available')

# 6. Add Canonical, hreflang, OG tags right after <head>
if '<link rel="canonical"' not in content:
    head_tags = """<head>
<link rel="canonical" href="https://otis-cleaning.vercel.app/">
<link rel="alternate" hreflang="en-CA" href="https://otis-cleaning.vercel.app/">
<link rel="alternate" hreflang="fr-CA" href="https://otis-cleaning.vercel.app/fr/">
<link rel="alternate" hreflang="x-default" href="https://otis-cleaning.vercel.app/">
<meta property="og:url" content="https://otis-cleaning.vercel.app/">
<meta property="og:locale" content="en_CA">
<meta property="og:locale:alternate" content="fr_CA">"""
    content = content.replace('<head>', head_tags, 1)

# 7. Internal Links move to footer
nav_links_to_remove = [
    '<a href="/internal/blueprint">Blueprint</a>',
    '<a href="/internal/command-center">Command Center</a>',
    '<a href="/internal/blueprint" class="nav-btn">Blueprint</a>',
    '<a href="/internal/command-center" class="nav-btn">Command Center</a>'
]
for link in nav_links_to_remove:
    content = content.replace(link, '')

if 'Internal Access' not in content:
    footer_internal = """<div class="footer-col-title">Internal Access</div>
    <p style="font-size:.8rem;color:var(--gray2);line-height:1.8">
      <a href="/internal/blueprint" style="color:var(--gray2);text-decoration:none">Blueprint</a><br>
      <a href="/internal/command-center" style="color:var(--gray2);text-decoration:none">Command Center</a>
    </p>"""
    content = content.replace('</div></div><div class="footer-bottom">', '</div><div>' + footer_internal + '</div></div><div class="footer-bottom">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done index.html cleanup safely")
