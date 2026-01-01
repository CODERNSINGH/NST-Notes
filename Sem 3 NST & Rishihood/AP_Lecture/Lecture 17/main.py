from serpapi import GoogleSearch
import requests
from bs4 import BeautifulSoup
import time

# 🔑 Replace with your own SerpApi key
API_KEY = "697c3cc2634d231bd96fc1ecfcc8d5bba72e0c3e28ea606a81081ece9927414d"

def fetch_metadata(url):
    """Extract title & meta description from a LinkedIn page."""
    try:
        headers = {"User-Agent": "Mozilla/5.0"}
        html = requests.get(url, headers=headers, timeout=10).text
        soup = BeautifulSoup(html, "html.parser")

        title = soup.find("title").get_text(strip=True) if soup.find("title") else "No title"
        desc_tag = soup.find("meta", {"name": "description"})
        description = desc_tag["content"].strip() if desc_tag and desc_tag.get("content") else "No description"
        return {"title": title, "description": description}

    except Exception as e:
        return {"title": "Error", "description": str(e)}

def search_linkedin_profiles(query, num_results=10):
    """Use SerpApi to search LinkedIn profiles via Google Search."""
    print(f"\n🔍 Searching LinkedIn for: {query}")

    params = {
        "engine": "google",
        "q": f'site:linkedin.com/in "{query}"',
        "num": num_results,
        "api_key": API_KEY
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    links = []
    for res in results.get("organic_results", []):
        link = res.get("link")
        if link and "linkedin.com/in" in link:
            links.append(link)

    profiles = []
    for link in links:
        print(f"🌐 Fetching metadata for: {link}")
        meta = fetch_metadata(link)
        profiles.append({
            "url": link,
            "title": meta["title"],
            "description": meta["description"]
        })
        time.sleep(1)

    return profiles


def main():
    query = input("Enter role or keywords (e.g. React developer Bangalore): ").strip()
    profiles = search_linkedin_profiles(query)

    print("\n📊 Extracted LinkedIn Metadata:\n")
    for i, p in enumerate(profiles, start=1):
        print(f"{i}. {p['title']}")
        print(f"   URL: {p['url']}")
        print(f"   Description: {p['description']}\n")


if __name__ == "__main__":
    main()
