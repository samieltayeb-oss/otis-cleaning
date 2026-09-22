import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update phone number
content = content.replace('(514) 555-OTIS', '+1 (438) 935-9725')

# 2. Update address
content = re.sub(r'2447 Ave Madison,<br>Montreal H4B2T5, QC', 'Greater Montreal Area,<br>Quebec, Canada', content)
content = re.sub(r'2447 Ave Madison, Montreal H4B 2T5', 'Greater Montreal Area, Quebec', content)

# 3. Clean up certifications in footer (lines ~1437)
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

# 5. Remove Exterior Window Cleaning and Power Washing from pricing
content = re.sub(r'<div class="price-row">.*?Exterior Window Cleaning.*?</div>', '', content, flags=re.IGNORECASE|re.DOTALL)
content = re.sub(r'<div class="price-row">.*?Exterior Power Washing.*?</div>', '', content, flags=re.IGNORECASE|re.DOTALL)
content = re.sub(r'<li>.*?Exterior Window Cleaning.*?</li>', '', content, flags=re.IGNORECASE|re.DOTALL)
content = re.sub(r'<li>.*?Exterior Power Washing.*?</li>', '', content, flags=re.IGNORECASE|re.DOTALL)
content = re.sub(r'Exterior Window Cleaning \(\$4-\$10/panneau\)', '', content)
content = re.sub(r'Exterior Power Washing \(\$0\.15-\$0\.30/sq ft\)', '', content)

# 6. Add Canonical, hreflang, OG tags right after <head>
# Only add if not already there
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
# In the Nav bar, there might be links to /internal/blueprint or /internal/command-center
# We should remove them from header/nav if they exist.
# The user mentioned: "remove from primary/public navigation. Place discreet access in footer under: Internal Access"
nav_links_to_remove = [
    '<a href="/internal/blueprint">Blueprint</a>',
    '<a href="/internal/command-center">Command Center</a>',
    '<a href="/internal/blueprint" class="nav-btn">Blueprint</a>',
    '<a href="/internal/command-center" class="nav-btn">Command Center</a>'
]
for link in nav_links_to_remove:
    content = content.replace(link, '')

# Add internal access to footer if not there
if 'Internal Access' not in content:
    footer_internal = """<div class="footer-col-title">Internal Access</div>
    <p style="font-size:.8rem;color:var(--gray2);line-height:1.8">
      <a href="/internal/blueprint" style="color:var(--gray2);text-decoration:none">Blueprint</a><br>
      <a href="/internal/command-center" style="color:var(--gray2);text-decoration:none">Command Center</a>
    </p>"""
    # Just append a new col before the copyright or inside footer-grid
    content = content.replace('</div></div><div class="footer-bottom">', '</div><div>' + footer_internal + '</div></div><div class="footer-bottom">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done index.html cleanup")
