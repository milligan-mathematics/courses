import requests
from bs4 import BeautifulSoup

url = "https://www.geogebra.org/u/ilundholm?offset=24"
print(f"Fetching {url}")
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser')
links = soup.find_all('a', href=True)
count = 0
for link in links:
    if '/m/' in link['href']:
        count += 1
print(f"Found {count} material links on page with offset=24")
