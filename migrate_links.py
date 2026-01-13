import os
import re

ROOT_DIR = r"c:\Users\ilundholm\OneDrive - Milligan University\Courses GitHub Repo"

def migrate_links():
    for root, dirs, files in os.walk(ROOT_DIR):
        if any(x in root for x in ["_site", ".git", "_layouts", "_includes", "assets"]):
            continue
            
        if "index.md" in files:
            path = os.path.join(root, "index.md")
            # Skip root index
            if os.path.normpath(path) == os.path.normpath(os.path.join(ROOT_DIR, "index.md")):
                continue
                
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Check if it already has activities
            if "activities:" in content:
                print(f"Skipping {path} - already has activities")
                continue

            # Extract links: - [Title](url.html)
            # Use dotall if necessary, but standard markdown links are usually single line
            links = re.findall(r'-\s+\[(.*?)\]\((.*?)\)', content)
            if not links:
                continue
                
            print(f"Migrating {len(links)} links for {path}")
            
            # Remove the Interactive Demos header and the links from the body
            # This is a bit aggressive but matches the user's current format
            new_body = re.sub(r'## Interactive Demos\s*', '', content)
            new_body = re.sub(r'-\s+\[.*?\]\(.*?\)\s*', '', new_body)
            
            # Prepare activities YAML
            activities_yaml = "activities:\n"
            for title, url in links:
                activities_yaml += f'  - title: "{title}"\n    url: "{url}"\n    type: "Interactive Demo"\n'
            
            # Insert into Front Matter
            # Front matter is between the first and second ---
            parts = new_body.split("---", 2)
            if len(parts) >= 3:
                # Add activities to the end of the front matter block
                parts[1] = parts[1].rstrip() + "\n" + activities_yaml
                new_content = "---" + parts[1] + "---" + parts[2]
            else:
                print(f"Error: Could not parse front matter for {path}")
                continue
                
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_content)

if __name__ == "__main__":
    migrate_links()
    print("Migration complete!")
