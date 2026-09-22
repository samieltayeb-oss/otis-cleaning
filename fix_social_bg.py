import re

with open("internal/social_center.html", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Fix background-image: url('imgs/...) -> url('/imgs/...)
new_content = re.sub(r"url\(['\"]imgs/", "url('/imgs/", content)

if new_content != content:
    with open("internal/social_center.html", "w", encoding="utf-8", errors="ignore") as f:
        f.write(new_content)
    print("Fixed background-image paths in social_center.html")
else:
    print("Nothing to fix")
