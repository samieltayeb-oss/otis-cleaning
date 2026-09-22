import os
import glob
import re

html_files = glob.glob('services/*.html') + glob.glob('fr/services/*.html') + glob.glob('sectors/*.html') + glob.glob('fr/secteurs/*.html')

google_fonts = """<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add Google Fonts link if not present
    if "fonts.googleapis.com" not in content:
        content = content.replace('</head>', f'{google_fonts}\n</head>')

    # Update body font
    content = re.sub(
        r'body\s*\{\s*font-family:\s*-apple-system,\s*BlinkMacSystemFont,\s*"Segoe UI",\s*Roboto,\s*sans-serif;', 
        "body { font-family: 'DM Sans', sans-serif;", 
        content
    )

    # Add Syne to headings
    if "h1, h2, h3 { font-family: 'Syne', sans-serif;" not in content:
        content = content.replace('</style>', "\nh1, h2, h3 { font-family: 'Syne', sans-serif; font-weight: 800; letter-spacing: -0.02em; }\n</style>")

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Applied typography design system to {len(html_files)} pages.")
