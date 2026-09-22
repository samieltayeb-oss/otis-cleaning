import re, glob

files = glob.glob("internal/*.html")
for filepath in files:
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        new_content = re.sub(r"url\(['\"]imgs/", "url('/imgs/", content)
        if new_content != content:
            with open(filepath, "w", encoding="utf-8", errors="ignore") as f:
                f.write(new_content)
            print(f"Fixed: {filepath}")
    except Exception as e:
        print(f"Error {filepath}: {e}")
print("Done")
