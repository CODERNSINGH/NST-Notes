from dotenv import load_dotenv
load_dotenv()

import os
import requests
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
from .state import ReviewState


# Initialize Groq LLM
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7
)


def extract_github_data(state: ReviewState):
    username = state["username"]

    github_token = os.getenv("GITHUB_TOKEN")
    headers = {"Authorization": f"Bearer {github_token}"} if github_token else {}

    try:
        # User API
        user_url = f"https://api.github.com/users/{username}"
        user_resp = requests.get(user_url, headers=headers)

        # Repos API (fixed URL string)
        repos_url = f"https://api.github.com/users/{username}/repos?sort=updated&per_page=5"
        repos_resp = requests.get(repos_url, headers=headers)

        if user_resp.status_code == 200 and repos_resp.status_code == 200:
            repos_data = repos_resp.json()

            repo_names = [repo["name"] for repo in repos_data]

            languages = list({
                repo["language"]
                for repo in repos_data
                if repo["language"]
            })

            real_data = {
                "recent_repos": repo_names,
                "primary_languages": languages,
                "public_repos_count": user_resp.json().get("public_repos", 0),
            }

            return {"github_data": real_data}

        else:
            return {
                "github_data": {
                    "error": f"API Error: User '{username}' not found."
                }
            }

    except Exception as e:
        return {
            "github_data": {
                "error": str(e)
            }
        }


def code_mentor_review(state: ReviewState):
    username = state["username"]
    data = state["github_data"]

    prompt = f""" You are an encouraging Code Mentor.
                  Review this GitHub portfolio data for '{username}'.
                 Data:
                {data}

                Write a short, professional review.
                - Highlight strengths based on languages used
                - Suggest 1–2 actionable improvements (e.g., docs, tests, structure)
                """

    response = llm.invoke([
        HumanMessage(content=prompt)
    ])

    return {
        "feedback": response.content
    }