import os
import glob
import re

html_files = glob.glob('*.html') + glob.glob('fr/*.html') + glob.glob('services/*.html') + glob.glob('fr/services/*.html') + glob.glob('sectors/*.html') + glob.glob('fr/secteurs/*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    is_fr = '/fr/' in file or file.startswith('fr\\') or file.startswith('fr/')

    # Fix footer buttons in index.html to standard links
    content = re.sub(r'<button class="flink" onclick="nav\(\'home\'\)">([^<]+)</button>', r'<a class="flink" href="/" style="display:block;text-decoration:none;color:inherit;">\1</a>', content)
    content = re.sub(r'<button class="flink" onclick="nav\(\'about\'\)">([^<]+)</button>', r'<a class="flink" href="/#about" style="display:block;text-decoration:none;color:inherit;">\1</a>', content)
    content = re.sub(r'<button class="flink" onclick="nav\(\'gallery\'\)">([^<]+)</button>', r'<a class="flink" href="/#gallery" style="display:block;text-decoration:none;color:inherit;">\1</a>', content)
    content = re.sub(r'<button class="flink" onclick="nav\(\'pricing\'\)">([^<]+)</button>', r'<a class="flink" href="/#pricing" style="display:block;text-decoration:none;color:inherit;">\1</a>', content)
    content = re.sub(r'<button class="flink" onclick="nav\(\'contact\'\)">([^<]+)</button>', r'<a class="flink" href="/#contact" style="display:block;text-decoration:none;color:inherit;">\1</a>', content)
    content = re.sub(r'<button class="flink" onclick="nav\(\'quote\'\)" style="([^"]+)">([^<]+)</button>', r'<a class="flink" href="/#quote" style="\1;display:block;text-decoration:none;">\2</a>', content)

    # In French, adjust the roots
    if is_fr:
        content = content.replace('href="/"', 'href="/fr/"')
        content = content.replace('href="/#about"', 'href="/fr/#about"')
        content = content.replace('href="/#pricing"', 'href="/fr/#pricing"')
        content = content.replace('href="/#gallery"', 'href="/fr/#gallery"')
        content = content.replace('href="/#contact"', 'href="/fr/#contact"')
        content = content.replace('href="/#quote"', 'href="/fr/#quote"')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Fixed footer links in {len(html_files)} pages.")
