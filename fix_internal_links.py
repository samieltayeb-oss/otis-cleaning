import os
import glob
import re

internal_files = glob.glob('internal/*.html') + glob.glob('*.html')

for file in internal_files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        with open(file, 'r', encoding='latin-1') as f:
            content = f.read()
    
    # Replace any relative or absolute link to the old prototype with the root domain /
    content = re.sub(r'href="otis-final-v2_11\.html"', 'href="/"', content)
    content = re.sub(r'href="/otis-final-v2_11\.html"', 'href="/"', content)
    content = re.sub(r'href="/otis-final-v2_11"', 'href="/"', content)
    
    try:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed to write {file}: {e}")

print("Fixed all old prototype links in internal dashboards.")
