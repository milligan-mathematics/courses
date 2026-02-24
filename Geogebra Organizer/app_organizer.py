from flask import Flask, render_template, jsonify, request
import json
import os
import geogebra_scraper

app = Flask(__name__)

# Use absolute paths to ensure files are found regardless of where the script is run from
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MAP_FILE = os.path.join(BASE_DIR, "curriculum_map.json")
# ../_data/apps.json
APPS_FILE = os.path.join(BASE_DIR, "..", "_data", "apps.json")

def load_map():
    if os.path.exists(MAP_FILE):
        try:
            with open(MAP_FILE, 'r') as f:
                data = json.load(f)
                # print(f"Loaded map with {len(data.get('courses', {}))} courses")
                return data
        except Exception as e:
            print(f"Error loading map: {e}")
            return {"courses": {}, "mappings": {}}
    else:
        print(f"Map file not found at: {MAP_FILE}")
    return {"courses": {}, "mappings": {}}

def save_map(data):
    with open(MAP_FILE, 'w') as f:
        json.dump(data, f, indent=2)

@app.route('/')
def index():
    return render_template('dashboard.html')

@app.route('/api/data')
def get_data():
    # Load raw scraped apps
    if os.path.exists(APPS_FILE):
        with open(APPS_FILE, 'r') as f:
            apps_data = json.load(f)
            apps_list = apps_data.get('apps', [])
            last_updated = apps_data.get('last_updated', 'Unknown')
    else:
        apps_list = []
        last_updated = 'Never'

    # Load curriculum map
    curriculum = load_map()
    mappings = curriculum.get('mappings', {})
    courses = curriculum.get('courses', {})
    
    print(f"DEBUG: Returning {len(courses)} courses to frontend.")

    # Merge data
    organized_apps = []
    
    # Track stats
    stats = {
        "total": len(apps_list),
        "organized": 0,
        "last_updated": last_updated
    }
    
    for app in apps_list:
        app_id = app['id']
        
        # Check if mapped
        if app_id in mappings:
            mapping = mappings[app_id]
            app['course'] = mapping.get('course')
            app['chapter'] = mapping.get('chapter')
            app['is_manual'] = True
            stats['organized'] += 1
        else:
            # Keep original scraped category as a hint, but mark as Unorganized for the UI if desired
            # Or map the scraped category to a "course" if possible
            app['course'] = app.get('category', 'Uncategorized')
            app['chapter'] = "Unsorted"
            app['is_manual'] = False
            
        organized_apps.append(app)
        
    return jsonify({
        "apps": organized_apps,
        "courses": courses,
        "stats": stats
    })

@app.route('/api/organize', methods=['POST'])
def organize_app():
    data = request.json
    app_id = data.get('id')
    course = data.get('course')
    chapter = data.get('chapter')
    
    if not app_id or not course:
        return jsonify({"success": False, "error": "Missing data"}), 400
        
    curriculum = load_map()
    
    # Ensure mappings dict exists
    if "mappings" not in curriculum:
        curriculum["mappings"] = {}
        
    # Update mapping
    curriculum["mappings"][app_id] = {
        "course": course,
        "chapter": chapter
    }
    
    save_map(curriculum)
    return jsonify({"success": True})

@app.route('/api/sync', methods=['POST'])
def sync_apps():
    try:
        # Run the scraper logic
        result = geogebra_scraper.scrape_geogebra_profile()
        # Ensure we save it to the file needed
        if result:
            geogebra_scraper.save_manifest(result) # This saves to ../_data/apps.json
            return jsonify({"success": True, "count": len(result)})
        return jsonify({"success": False, "error": "No data found"}), 500
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    print("Starting GeoGebra Organizer...")
    print("Open http://localhost:5000 in your browser")
    app.run(debug=True, port=5000)
