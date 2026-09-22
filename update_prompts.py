import re
with open('docs/OTIS_NANO_BANANA_SERVICE_HERO_PROMPTS.md', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('A generic professional walk-behind compact auto-scrubber machine (no brand logos)', 'A generic professional walk-behind compact auto-scrubber machine (no brand logos, resembling a utilitarian 20-inch pad-assist model like the Tennant 5280)')

with open('docs/OTIS_NANO_BANANA_SERVICE_HERO_PROMPTS.md', 'w', encoding='utf-8') as f:
    f.write(text)
