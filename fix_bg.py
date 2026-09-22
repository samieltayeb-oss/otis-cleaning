import os
import glob

html_files = glob.glob('services/*.html') + glob.glob('fr/services/*.html') + glob.glob('sectors/*.html') + glob.glob('fr/secteurs/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace inline light gray background with navy2
    content = content.replace('background: var(--light-gray)', 'background: #0F1628')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed inline light gray backgrounds.")
