import re
import glob

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# 1. Extract style block
style_match = re.search(r'<style>.*?</style>', index_html, flags=re.DOTALL)
global_style = style_match.group(0) if style_match else ""

# 2. Extract nav block
nav_match = re.search(r'<nav>.*?</nav>', index_html, flags=re.DOTALL)
global_nav = nav_match.group(0) if nav_match else ""

# 3. Extract footer block
footer_match = re.search(r'<footer.*?>.*?</footer>', index_html, flags=re.DOTALL)
global_footer = footer_match.group(0) if footer_match else ""

# 4. Clean up nav block (remove onclick="nav('...')")
global_nav = re.sub(r'onclick="nav\(\'home\'\);return false"', '', global_nav)
global_nav = re.sub(r'onclick="nav\(\'about\'\);return false"', '', global_nav)
global_nav = re.sub(r'onclick="nav\(\'pricing\'\);return false"', '', global_nav)
global_nav = re.sub(r'onclick="nav\(\'gallery\'\);return false"', '', global_nav)
global_nav = re.sub(r'onclick="nav\(\'contact\'\);return false"', '', global_nav)
global_nav = re.sub(r'onclick="nav\(\'quote\'\)"', '', global_nav)
global_nav = re.sub(r'onclick="toggleMob\(\)"', '', global_nav)

# 5. Fix nav links to absolute paths
global_nav = global_nav.replace('id="nl-home" class="active" href="#"', 'href="/"')
global_nav = global_nav.replace('id="nl-about" href="#"', 'href="/#about"')
global_nav = global_nav.replace('id="nl-pricing" href="#"', 'href="/#pricing"')
global_nav = global_nav.replace('id="nl-gallery" href="#"', 'href="/#gallery"')
global_nav = global_nav.replace('id="nl-contact" href="#"', 'href="/#contact"')
global_nav = global_nav.replace('class="nav-cta"', 'class="nav-cta" onclick="window.location.href=\'/#quote\'"')

# 6. Extract mobile menu script?
# The user wants the hamburger menu to work. We need the mobile menu HTML and JS.
mob_menu_match = re.search(r'<div id="mob-menu".*?</div>\s*</div>', index_html, flags=re.DOTALL)
global_mob_menu = mob_menu_match.group(0) if mob_menu_match else ""

mob_overlay_match = re.search(r'<div id="mob-overlay".*?</div>', index_html, flags=re.DOTALL)
global_mob_overlay = mob_overlay_match.group(0) if mob_overlay_match else ""

# We'll just provide a simplified vanilla JS for the hamburger menu.
mobile_js = """
<script>
function toggleMob() {
    var m = document.getElementById('mob-menu');
    var o = document.getElementById('mob-overlay');
    var b = document.getElementById('hbg');
    if(!m) return;
    if(m.classList.contains('open')) {
        m.classList.remove('open');
        if(o) o.classList.remove('open');
        if(b) b.classList.remove('open');
        document.body.style.overflow = '';
    } else {
        m.classList.add('open');
        if(o) o.classList.add('open');
        if(b) b.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}
</script>
"""

# Let's apply this to all service pages
html_files = glob.glob('services/*.html') + glob.glob('fr/services/*.html') + glob.glob('sectors/*.html') + glob.glob('fr/secteurs/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine if it's french
    is_fr = '/fr/' in file
    
    # We will replace the <header> with the new <nav>
    # Find the current <header>
    content = re.sub(r'<header>.*?</header>', global_nav + '\n' + global_mob_overlay + '\n' + global_mob_menu, content, flags=re.DOTALL)

    # We will replace the <footer> with the new <footer>
    content = re.sub(r'<footer.*?>.*?</footer>', global_footer, content, flags=re.DOTALL)

    # We will inject the global style before the local style so local overrides it
    if "/* GLOBAL STYLE INJECTED */" not in content:
        content = content.replace('<style>', global_style + '\n/* GLOBAL STYLE INJECTED */\n<style>')

    # Add the mobile JS before </body>
    if "function toggleMob()" not in content:
        content = content.replace('</body>', mobile_js + '\n</body>')

    # If it's french, fix the links in the nav and footer
    if is_fr:
        content = content.replace('href="/"', 'href="/fr/"')
        content = content.replace('href="/#about"', 'href="/fr/#about"')
        content = content.replace('href="/#pricing"', 'href="/fr/#pricing"')
        content = content.replace('href="/#gallery"', 'href="/fr/#gallery"')
        content = content.replace('href="/#contact"', 'href="/fr/#contact"')
        content = content.replace('href="/fr/" id="lang-btn"', 'href="/" id="lang-btn"')
        content = content.replace('>FR<', '>EN<')

    # Fix the toggleMob onclick that I removed earlier by accident!
    content = content.replace('id="hbg">', 'id="hbg" onclick="toggleMob()">')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Synchronized global header and footer to {len(html_files)} pages.")
