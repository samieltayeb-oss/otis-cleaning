import os
import glob
import re

html_files = glob.glob('services/*.html') + glob.glob('fr/services/*.html') + glob.glob('sectors/*.html') + glob.glob('fr/secteurs/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add --orange to :root
    if '--orange: #F7941D' not in content:
        content = re.sub(r':root\s*\{', ':root { --orange: #F7941D; --orange2: #E07B0A;', content)

    # Fix .btn
    content = re.sub(r'\.btn\s*\{\s*background:\s*var\(--blue\)[^\}]+\}', '.btn { background: var(--orange); color: white; padding: 0.55rem 1.3rem; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; font-family: \'DM Sans\', sans-serif; transition: background 0.2s, transform 0.15s; border: none; }', content)
    content = re.sub(r'\.btn:hover\s*\{\s*background:\s*var\(--light-blue\)[^\}]+\}', '.btn:hover { background: var(--orange2); transform: translateY(-1px); }', content)

    # Fix Logo
    content = re.sub(r'<a href="/" class="logo">OTIS</a>', '<a href="/" class="logo" style="display:flex;align-items:center;"><img src="/imgs/otis-logo.png" alt="OTIS Commercial Cleaning" style="height:32px;object-fit:contain;"></a>', content)
    content = re.sub(r'<a href="/fr/" class="logo">OTIS</a>', '<a href="/fr/" class="logo" style="display:flex;align-items:center;"><img src="/imgs/otis-logo.png" alt="OTIS Commercial Cleaning" style="height:32px;object-fit:contain;"></a>', content)

    # Make the header background dark like the original OTIS design? 
    # Original is var(--navy) #080D1A
    # The user screenshot showed a white header background.
    # If we want it to match the main site perfectly, the header should be dark.
    # Let's change the header background to #080D1A and the nav links to white.
    # Actually, many OTIS pages might have a white header inside services.
    # BUT the user specifically said "this look like not OTIS". OTIS uses a dark theme nav!
    # Let's update header { background: #fff; to header { background: #080D1A; border-bottom: 1px solid rgba(255,255,255,0.07);
    content = re.sub(r'header\s*\{\s*background:\s*#fff;', 'header { background: #080D1A; border-bottom: 1px solid rgba(255,255,255,0.07);', content)
    content = re.sub(r'nav a\s*\{\s*color:\s*var\(--gray\);', 'nav a { color: #fff;', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Fixed design system on {len(html_files)} pages.")
