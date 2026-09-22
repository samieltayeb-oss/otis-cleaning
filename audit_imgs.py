import re, os

with open("index.html", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

refs = re.findall(r'src=["\']/?(imgs/[^"\']+)["\']', content)
refs = list(set(refs))

actual = ["imgs/" + f for f in os.listdir("imgs")]

for ref in sorted(refs):
    exact = ref in actual
    if not exact:
        close = [a for a in actual if a.lower() == ref.lower()]
        print(f"MISMATCH: {ref}  -> actual: {close}")
