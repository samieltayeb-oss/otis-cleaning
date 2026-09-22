import re

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

nav = re.search(r'<nav>.*?</nav>', c, flags=re.DOTALL)
if nav:
    with open('nav_extract.html', 'w', encoding='utf-8') as f:
        f.write(nav.group(0))

footer = re.search(r'<footer.*?>.*?</footer>', c, flags=re.DOTALL)
if footer:
    with open('footer_extract.html', 'w', encoding='utf-8') as f:
        f.write(footer.group(0))

style = re.search(r'<style>.*?</style>', c, flags=re.DOTALL)
if style:
    with open('style_extract.html', 'w', encoding='utf-8') as f:
        f.write(style.group(0))
