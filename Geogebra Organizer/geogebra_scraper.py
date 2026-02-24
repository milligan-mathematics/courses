import requests
import json
import os
import datetime

# Provided by user
USER_ID = "5932872"
# Output path adjusted for running inside "Geogebra Organizer"
OUTPUT_FILE = os.path.join("..", "_data", "apps.json")
HTML_OUTPUT = "index.html"

def get_user_materials(user_id, limit=50, offset=0):
    """
    Fetches materials for a user using the internal GeoGebra API V1.0
    """
    url = f"https://api.geogebra.org/v1.0/users/{user_id}/materials"
    params = {
        "limit": limit,
        "offset": offset,
        "embed": "creator,tags", 
        "order": "-modified" 
    }
    
    try:
        print(f"Requesting API: {url} with offset={offset}")
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"API Request failed: {e}")
        return None

def fetch_all_materials(user_id):
    all_materials = []
    offset = 0
    limit = 50
    
    while True:
        data = get_user_materials(user_id, limit=limit, offset=offset)
        
        # API v1.0 returns a list directly for this endpoint
        if not data:
            print("No data received or API error.")
            break
            
        if isinstance(data, list):
            items = data
        elif isinstance(data, dict) and 'error' in data:
            print(f"API Error: {data['error']}")
            break
        else:
            # Fallback for unexpected structure
            items = []
            
        if not items:
            print("No more items found.")
            break
            
        print(f"Fetched {len(items)} items (offset {offset})")
        
        for item in items:
            all_materials.append(process_material(item))
            
        if len(items) < limit:
            break
            
        offset += limit
        
    return all_materials

def process_material(item):
    mat_id = item.get('id')
    title = item.get('title') or "Untitled"
    # Construct URL
    mat_url = f"https://www.geogebra.org/m/{mat_id}"
    
    # Improved categorization logic
    category = "Uncategorized"
    title_lower = title.lower()
    
    if "211" in title_lower or "matrix" in title_lower or "linear" in title_lower or "subspace" in title_lower or "vector" in title_lower:
        category = "Linear Algebra (Math 211)"
    elif "212" in title_lower or "integral" in title_lower or "series" in title_lower or "calculus" in title_lower or "derivative" in title_lower:
        category = "Calculus 2 (Math 212)"
    elif "351" in title_lower or "multivariable" in title_lower:
        category = "Multivariable (Math 351)"
        
    return {
        "id": str(mat_id),
        "title": title,
        "type": item.get('type'),
        "category": category,
        "url": mat_url,
        "thumbnail": item.get('thumbUrl'), 
        "modified": item.get('date_modified')
    }

def save_manifest(apps):
    manifest = {
        "last_updated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "count": len(apps),
        "apps": sorted(apps, key=lambda x: (x['category'], x['title']))
    }
    
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
    print(f"Saved {len(apps)} apps to {OUTPUT_FILE} (Timestamp: {manifest['last_updated']})")

def generate_dashboard_html(manifest):
    """
    Generates a standalone HTML file with embedded data.
    This allows viewing the dashboard without a Jekyll server.
    """
    # (Simplified for server usage, but keeping for standalone fallback)
    html_content = f"""<!-- Standalone fallback -->"""
    with open(HTML_OUTPUT, 'w', encoding='utf-8') as f:
        f.write(html_content)

def scrape_geogebra_profile():
    print(f"Starting deep scrape for user ID {USER_ID}...")
    materials = fetch_all_materials(USER_ID)
    return materials

if __name__ == "__main__":
    apps = scrape_geogebra_profile()
    if apps:
         save_manifest(apps)
