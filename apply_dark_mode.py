import os
import glob
import re

html_files = glob.glob('services/*.html') + glob.glob('fr/services/*.html') + glob.glob('sectors/*.html') + glob.glob('fr/secteurs/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply inline style to lang-switcher
    pill_style = 'style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.1); color:#fff; border-radius:20px; padding:6px 14px; font-size:0.85rem; font-weight:600; margin-left:1.5rem; border:1px solid rgba(255,255,255,0.2); transition:background 0.2s;"'
    content = re.sub(r'class="lang-switcher"', f'class="lang-switcher" {pill_style}', content)

    # Make sure text below hero uses white or gray? 
    # The body text defaults to color: var(--gray) which is #4a4a4a.
    # The footer background is var(--blue), color white.
    # Is the main page dark-mode everywhere?
    # Actually, the user just said "this look like not OTIS". 
    # In index.html, it's dark mode overall: `body { background: var(--navy); color: var(--white); }`.
    # Let's change the service pages to dark mode as well!
    # Wait, the card backgrounds: var(--light-gray) -> change to var(--card) (#141C2E)
    # the text color: var(--gray) -> change to var(--gray2) (#B0BBC9)
    # It's better to just swap them to the dark theme!
    
    # 1. Body background and text color
    content = re.sub(r'body\s*\{\s*font-family:[^;]+;\s*margin:\s*0;\s*color:\s*var\(--gray\);', 
                     'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; background: #080D1A; color: #B0BBC9;', 
                     content)

    # 2. Update :root to include standard dark colors
    if '--card: #141C2E' not in content:
        content = re.sub(r':root\s*\{', ':root { --card: #141C2E; --text: #B0BBC9;', content)

    # 3. Update the section headings
    content = re.sub(r'h2\s*\{\s*color:\s*var\(--blue\);', 'h2 { color: #fff;', content)
    content = re.sub(r'\.card h3\s*\{\s*color:\s*var\(--blue\);', '.card h3 { color: #fff;', content)

    # 4. Update the card background
    content = re.sub(r'\.card\s*\{\s*background:\s*var\(--light-gray\);', '.card { background: var(--card); border: 1px solid rgba(255,255,255,0.07);', content)

    # 5. Update FAQ header color
    content = re.sub(r'\.faq h4\s*\{\s*color:\s*var\(--blue\);', '.faq h4 { color: #fff;', content)

    # 6. Update the footer background
    # It currently says: footer { background: var(--blue); color: white; ... }
    content = re.sub(r'footer\s*\{\s*background:\s*var\(--blue\);', 'footer { background: #0F1628; border-top: 1px solid rgba(255,255,255,0.07);', content)

    # 7. Update CTA bottom link (the one that said "color: var(--blue)")
    content = re.sub(r'style="color:\s*var\(--blue\);\s*font-weight:\s*600;\s*text-decoration:\s*none;"', 'style="color: var(--orange); font-weight: 600; text-decoration: none;"', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Applied dark mode design system to {len(html_files)} pages.")
