import requests
from bs4 import BeautifulSoup
import json
import re

url = "https://www.geogebra.org/u/ilundholm"
print(f"Fetching {url}...")
# Use headers to mimic a browser
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
response = requests.get(url, headers=headers)
content = response.text

# Look for Redux state or GGB state
# often window.__PRELOADED_STATE__ or similar

print("Searching for state variables...")
matches = re.findall(r'window\.__[A-Z_]+__\s*=\s*({.*?});', content, re.DOTALL)
for match in matches:
    print(f"Found JSON object length: {len(match)}")
    try:
        data = json.loads(match)
        print("Keys:", data.keys())
    except:
        print("Could not parse JSON")

# Check for specific GGB param
match_ggb = re.search(r'data-param-app="true"', content)
if match_ggb:
    print("Found GGB Applet embedding.")

# Check for material cards in raw HTML
soup = BeautifulSoup(content, 'html.parser')
cards = soup.find_all(class_=re.compile("material"))
print(f"Found {len(cards)} elements with 'material' class")

# Look for specific material tokens to see how many we got structure-wise
links = soup.find_all('a', href=re.compile(r'/m/'))
print(f"Found {len(links)} material links")
