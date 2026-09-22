import re
import os
import hashlib
import random

with open('api/internal/auth.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the exposed hash and fallback
content = re.sub(
    r"const PIN_HASH = process\.env\.OTIS_INTERNAL_PIN_HASH \|\| '[0-9a-f]+';", 
    "const PIN_HASH = process.env.OTIS_INTERNAL_PIN_HASH;\nif (!PIN_HASH) throw new Error('SECURITY: OTIS_INTERNAL_PIN_HASH is missing from environment. ROTATION REQUIRED.');", 
    content
)

# Optional: same for SESSION_SECRET
content = re.sub(
    r"const SESSION_SECRET = process\.env\.OTIS_SESSION_SECRET \|\| '[^']+';",
    "const SESSION_SECRET = process.env.OTIS_SESSION_SECRET;\nif (!SESSION_SECRET) throw new Error('SECURITY: OTIS_SESSION_SECRET is missing from environment. ROTATION REQUIRED.');",
    content
)

with open('api/internal/auth.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated auth.js")

# Now generate a random PIN for local development testing so QA passes.
# We will NOT print it to stdout.
new_pin = str(random.randint(10000, 99999))
new_hash = hashlib.sha256(new_pin.encode()).hexdigest()

with open('.env.local', 'w', encoding='utf-8') as f:
    f.write(f"OTIS_SESSION_SECRET=local-qa-secret-{random.randint(1000, 9999)}\n")
    f.write(f"OTIS_INTERNAL_PIN_HASH={new_hash}\n")

with open('local_pin.txt', 'w') as f:
    f.write(new_pin)

print("Updated .env.local with secure local hashes.")
