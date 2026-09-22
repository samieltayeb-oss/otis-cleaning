import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Remove the entire internal div block we injected earlier
content = re.sub(
    r'\s*<div class="f-col">\s*<h4 style="color:var\(--white\).*?Internal.*?</div>\s*',
    '\n    ',
    content,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8', errors='ignore') as f:
    f.write(content)

print("Footer internal links removed.")
