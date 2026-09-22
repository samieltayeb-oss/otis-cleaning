import re
with open('docs/OTIS_V2_11_SENIOR_RECONCILIATION.md', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('Because the Tennant model is unknown, prompts will specify "a generic professional walk-behind compact auto-scrubber"', 'The Tennant 5280 is confirmed. Prompts will specify a walk-behind 20-inch pad-assist auto-scrubber.')
text = text.replace('1. Exact Tennant model number?\n', '')
text = text.replace('2. Actual General Liability coverage amount?\n', '')
text = text.replace('3. Is 2447 Ave Madison a publishable physical address or just a mailing proxy?\n', '')
text = text.replace('- **Insurance:** Use "Fully Insured".', '- **Insurance:** Use "$2M General Liability Insurance".')
text = text.replace('- **Address:** Use "Serving Greater Montreal" and omit street address.', '- **Address:** Use "2447 Ave Madison, Montreal, QC H4B 2T5".')
text = text.replace('- **Equipment:** Use generic "professional auto-scrubbing equipment" instead of "Tennant T300".', '- **Equipment:** Use "Tennant 5280 auto-scrubber".')

with open('docs/OTIS_V2_11_SENIOR_RECONCILIATION.md', 'w', encoding='utf-8') as f:
    f.write(text)
