import os
import glob
import re

html_files = glob.glob('internal/*.html')

for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Replace src="imgs/ with src="/imgs/
        new_content = re.sub(r'src=["\']imgs/', 'src="/imgs/', content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                f.write(new_content)
            print(f"Fixed {file_path}")
    except Exception as e:
        print(f"Error on {file_path}: {e}")

print("Done")
