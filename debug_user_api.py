import requests
import json

URL = "https://www.geogebra.org/api/json.php"

def get_user_id():
    payload = {
        "request": {
            "-api": "1.0.0",
            "task": {
                "-type": "fetch",
                "fields": {
                    "field": [
                        {"-name": "id"},
                        {"-name": "username"},
                        {"-name": "url"}
                    ]
                },
                "filters": {
                    "field": [
                        {"-name": "username", "#text": "ilundholm"}
                    ]
                },
                "limit": {"-num": "1"}
            }
        }
    }
    
    print(f"POSTing to {URL} to find user...")
    try:
        r = requests.post(URL, json=payload)
        if r.status_code == 200:
            print("Response:", r.text[:500])
            items = r.json().get('responses', {}).get('response', {}).get('item', {})
            if items:
                 print("Found User Item:", items)
            else:
                 print("No user found.")
        else:
            print(f"Failed: {r.status_code}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    get_user_id()
