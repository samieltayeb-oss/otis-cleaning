with open('OTIS_PROJECT_TRUTH.md', 'a', encoding='utf-8') as f:
    f.write("\n\n## PENDING OWNER CONFIRMATIONS (DO NOT PUBLISH UNTIL VERIFIED)\n")
    f.write("- **Exact Tennant auto scrubber model:** Unverified. Use generic 'professional auto-scrubbing equipment'.\n")
    f.write("- **Active general liability insurance & coverage amount:** Unverified. Do not publish ANY insurance claims/badges.\n")
    f.write("- **Address:** 2447 Ave Madison, Montreal H4B 2T5 is unverified. Use 'Serving Greater Montreal, Quebec'. Do not include in LocalBusiness schema.\n")
    f.write("- **UL EcoLogo products:** Unverified. Hide/remove badge.\n")
    f.write("- **Chemicals:** Unverified. Do not infer EcoLogo, Health Canada disinfectants, low-VOC, or medical-grade claims.\n")
    f.write("- **Phone:** +1 (438) 935-9725. (Use as truth for now, but keep marked as awaiting Zan's final confirmation).\n")
print("Updated truth file")
