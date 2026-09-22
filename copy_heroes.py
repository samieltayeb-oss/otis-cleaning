import os
import shutil
import glob

artifact_dir = r"C:\Users\mcreg\.gemini\antigravity\brain\43271bb9-1e18-4ee7-a23e-a6638970be50"
target_dir = "imgs"

mapping = {
    "otis_hero_office_cleaning": "otis-hero-office-cleaning.jpg",
    "otis_hero_post_renovation_cleaning": "otis-hero-post-renovation.jpg",
    "otis_hero_condo_cleaning": "otis-hero-condo.jpg",
    "otis_hero_clinic_cleaning": "otis-hero-clinic.jpg",
    "otis_hero_retail_cleaning": "otis-hero-retail.jpg",
    "otis_hero_floor_maintenance": "otis-hero-floor-maintenance.jpg",
    "otis_hero_event_venue_cleaning": "otis-hero-event.jpg",
    "otis_hero_school_cleaning": "otis-hero-school.jpg"
}

for prefix, new_name in mapping.items():
    # Find the artifact file
    files = glob.glob(os.path.join(artifact_dir, f"{prefix}_*.jpg"))
    if files:
        latest = max(files, key=os.path.getctime)
        shutil.copy(latest, os.path.join(target_dir, new_name))
        print(f"Copied {os.path.basename(latest)} to {new_name}")
    else:
        print(f"Warning: No artifact found for {prefix}")

