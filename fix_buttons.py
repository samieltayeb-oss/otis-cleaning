import re

def fix_lang_btn(file_path, text, href):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the lang-btn
    pattern = r'<a[^>]*id="lang-btn"[^>]*>.*?</a>'
    
    # We want it to look like a subtle, nice pill button next to the Orange Quote button.
    # The quote button is .nav-cta { background: var(--orange); border-radius: 20px; ... }
    # So we give the lang button similar dimensions but dark background.
    replacement = f'<a href="{href}" id="lang-btn" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.1); color:#fff; border-radius:20px; padding:6px 14px; font-size:0.85rem; font-weight:600; margin-right:1rem; border:1px solid rgba(255,255,255,0.2); transition:background 0.2s;">{text}</a>'
    
    content = re.sub(pattern, replacement, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_lang_btn('fr/index.html', 'EN', '/')
fix_lang_btn('index.html', 'FR', '/fr/')

print("Fixed buttons in both files.")
