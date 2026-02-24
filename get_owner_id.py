import requests
import re
import json

# Known app from this user
APP_ID = "jgxvhvke" 
URL = f"https://www.geogebra.org/m/{APP_ID}"

print(f"Fetching {URL}...")
try:
    response = requests.get(URL)
    content = response.text
    
    # Search for "ilundholm"
    idx = content.find("ilundholm")
    if idx != -1:
        print("Found 'ilundholm'. Context:")
        start = max(0, idx - 200)
        end = min(len(content), idx + 200)
        print(content[start:end])
        
    # Search for "owner"
    idx_owner = content.find('"owner"')
    if idx_owner != -1:
         print("Found 'owner'. Context:")
         start = max(0, idx_owner - 100)
         end = min(len(content), idx_owner + 100)
         print(content[start:end])

except Exception as e:
    print(f"Error: {e}")
