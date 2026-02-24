import requests
import json

# Trying the direct /materials endpoint with different query parameters
USER_ID = "2517179"
URL = f"https://www.geogebra.org/api/users/{USER_ID}/materials"

def test_direct_api():
    params = {
        "limit": 10,
        "offset": 0
    }
    
    print(f"GET {URL}...")
    try:
        r = requests.get(URL, params=params)
        print(f"Status: {r.status_code}")
        if r.status_code == 200:
             try:
                data = r.json()
                print("Success! JSON Keys:", data.keys())
             except:
                print("Not JSON.")
                print(r.text[:200])
        else:
            print("Failed.")
    except Exception as e:
        print(f"Error URL 1: {e}")
            
    # Also try the v1.0 endpoint which sometimes work better
    v1_url = f"https://api.geogebra.org/v1.0/users/{USER_ID}/materials"
    print(f"GET {v1_url}...")
    try:
        r = requests.get(v1_url, params=params)
        print(f"Status: {r.status_code}")
        if r.status_code == 200:
             print("Success V1!")
             data = r.json()
             if isinstance(data, dict):
                 print("Keys:", data.keys())
             elif isinstance(data, list):
                 print(f"List of {len(data)} items")
    except Exception as e:
        print(f"Error V1: {e}")

if __name__ == "__main__":
    test_direct_api()
