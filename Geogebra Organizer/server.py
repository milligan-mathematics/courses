from mcp.server.fastmcp import FastMCP
import geogebra_scraper

# Initialize FastMCP server
mcp = FastMCP("GeoGebra Tools")

@mcp.tool()
def sync_geogebra_apps() -> str:
    """
    Scrapes the user's GeoGebra profile and updates the _data/apps.json file.
    Returns a summary of the action.
    """
    try:
        apps = geogebra_scraper.scrape_geogebra_profile()
        if apps:
            geogebra_scraper.save_apps(apps)
            return f"Successfully scraped and saved {len(apps)} apps to _data/apps.json"
        else:
            return "No apps found or error during scraping."
    except Exception as e:
        return f"Error executing scraper: {str(e)}"

if __name__ == "__main__":
    mcp.run()
