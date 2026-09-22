# OTIS NANO BANANA VISUAL SYSTEM: SERVICE HERO PROMPTS
**Project:** OTIS Service Pages V2.11  
**Agent:** Nano Banana Visual Director (`2e1642f9`)  
**Date:** 2026-09-22  

## MASTER PRODUCTION NOTES (APPLIES TO ALL)

### Aspect Ratio & Resolution
- **Aspect Ratio:** 16:9 (Landscape)
- **Target Resolution:** 1920x1080 (Minimum)

### Composition Rules (STRICT)
- **Left-Third Rule:** The left 33% of the image MUST be relatively clear, dark, and free of highly distracting focal points or faces. This is the "safe zone" for the H1 typography and primary CTA buttons.
- **Focal Point:** The primary subject (cleaner, equipment, pristine room) must be positioned in the center-right or far-right of the frame.
- **Lighting:** Cinematic, realistic, cool-toned (blues/grays) mixed with warm practical lighting to evoke a premium, reliable atmosphere.
- **Realism:** Must look like genuine corporate photography, not hyper-stylized CGI. Skin textures, fabric folds, and lighting should be photorealistic.

### CSS Overlay Implementation
To ensure text legibility across all devices, the following CSS gradient overlay MUST be applied over these images in production:
```css
background-image: linear-gradient(90deg, rgba(8,13,26,0.88) 0%, rgba(8,13,26,0.45) 45%, rgba(8,13,26,0) 100%), url('/imgs/otis-hero-[service].jpg');
```

---

## 1. Office Cleaning
**Filename:** `otis-hero-office-cleaning.jpg`
**Prompt:**
> Cinematic corporate photography, 16:9. A pristine, modern open-plan office space at dusk. In the center-right of the frame, an out-of-focus professional cleaner in a dark navy blue uniform is wiping down a glass conference table. The left side of the frame is a dark, smooth, out-of-focus wall and deep shadow, leaving ample negative space for text. Cool blue ambient light coming from the floor-to-ceiling windows, contrasted with warm amber interior lighting. High-end, pristine, spotless, trustworthy, professional cleaning service. Shot on Sony A7R IV, 35mm lens, f/2.8 for shallow depth of field. 

## 2. General Commercial Cleaning
**Filename:** `otis-hero-commercial-cleaning.jpg`
**Prompt:**
> Wide architectural interior shot of a high-end commercial building lobby at night, 16:9. Gleaming polished stone floors reflecting subtle recessed lighting. On the right side, a discreet professional janitorial cart with neatly organized microfiber cloths and neutral cleaning supplies. The left third of the image is deeply shadowed and clear for typography. The atmosphere is quiet, secure, and impeccably maintained. Cool, professional color grading, ultra-realistic, highly detailed, 8k resolution.

## 3. Clinic / Medical Office Cleaning
**Filename:** `otis-hero-clinic-cleaning.jpg`
**Prompt:**
> High-end clinical photography, 16:9. A sterile, modern dental or medical clinic waiting area and reception desk. Center-right: A gloved hand holding a microfiber cloth, carefully sanitizing a high-touch countertop surface. The left third of the frame is intentionally dark and empty, dominated by a smooth grey wall in deep shadow. Lighting is bright and clinical on the right, fading to deep, moody shadows on the left. Hygienic, compliant, safe, pristine. Photorealistic, 50mm lens, soft lighting.

## 4. Retail / Shop Cleaning
**Filename:** `otis-hero-retail-cleaning.jpg`
**Prompt:**
> Premium commercial photography, 16:9. The interior of a high-end Montreal boutique or retail store before opening hours. Gleaming, streak-free interior glass partitions and spotless hard floors. On the far right, a silhouette of a professional cleaner finishing the floor. The left side of the image features a dark, out-of-focus display structure, providing perfectly clear negative space for text overlay. Luxurious, clean, inviting, ready for customers. Cinematic lighting, photorealistic.

## 5. Post-Renovation / Post-Construction Cleaning
**Filename:** `otis-hero-post-renovation-cleaning.jpg`
**Prompt:**
> Professional architectural photography, 16:9. A newly finished commercial interior space transitioning from construction to pristine readiness. Right side: A worker in a neat dark uniform using a HEPA vacuum on a brand new hardwood or VCT floor, removing fine dust. The space looks brand new and spotless. Left side: Deep shadows against a finished dark grey wall, providing clean negative space. Sharp focus, dramatic lighting highlighting the cleanliness and lack of dust. High-resolution, realistic.

## 6. Apartment / Condo Cleaning
**Filename:** `otis-hero-condo-cleaning.jpg`
**Prompt:**
> Real estate interior photography, 16:9. A luxurious, modern condominium living area with floor-to-ceiling windows overlooking a city skyline. Right side: Sunbeams hitting a flawlessly clean hardwood floor and pristine modern furniture. Left side: Intentionally composed with dark, out-of-focus foreground elements (like a dark wall or large plant silhouette) to create negative space for text. Warm, inviting, immaculate, premium residential turnover. Photorealistic, wide-angle lens.

## 7. Interior Window Cleaning
**Filename:** `otis-hero-window-cleaning.jpg`
**Prompt:**
> Close-up cinematic action shot, 16:9. Center-right: A professional squeegee gliding across an interior frosted glass partition in a corporate boardroom, leaving a streak-free, crystal-clear path. A hand in a nitrile glove is visible. Left side: The glass is out of focus and heavily shadowed, creating a dark, uniform background for typography. Crisp, satisfying cleanliness, professional technique. Macro photography, f/1.8, highly detailed water droplets and reflections.

## 8. Floor Maintenance
**Filename:** `otis-hero-floor-maintenance.jpg`
**Prompt:**
> Industrial commercial photography, 16:9. A gleaming, high-gloss VCT (vinyl composite tile) floor in a commercial corridor stretching into the background. Right side: The lower half of a professional walk-behind Tennant automatic floor scrubber, leaving a path of perfectly clean, shining floor. Left side: Dark, out-of-focus foreground wall and deep shadows, perfect for text. The floor reflects the overhead lights like a mirror. Professional, heavy-duty, meticulous. 8k, ultra-realistic.

## 9. Event Venue Cleaning
**Filename:** `otis-hero-event-venue-cleaning.jpg`
**Prompt:**
> Cinematic wide shot, 16:9. A large, elegant event hall or gala venue during post-event teardown, but returning to a pristine state. Right side: A cleaning crew member in the distance, efficiently sweeping or mopping the vast hardwood floor. Left side: Deep, moody shadows in the foreground, leaving a large block of dark negative space for text overlay. Professional, swift, reliable. High contrast, realistic lighting.

## 10. School / Education Facility Cleaning
**Filename:** `otis-hero-school-cleaning.jpg`
**Prompt:**
> Professional commercial photography, 16:9. A bright, modern school corridor or daycare center, perfectly sanitized and gleaming. Right side: A spotless floor with colorful (but muted) lockers or cubbies out of focus in the background. Left side: A dark, smooth wall in deep shadow providing ideal negative space for a headline. Safe, hygienic, trustworthy, ready for students. Soft, natural lighting mixed with bright overheads, highly realistic.
