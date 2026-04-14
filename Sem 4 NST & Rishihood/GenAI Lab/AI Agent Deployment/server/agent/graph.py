from langgraph.graph import StateGraph, START, END

from .state import ReviewState
from .nodes import extract_github_data, code_mentor_review


# Initialize graph builder with state schema
builder = StateGraph(ReviewState)


# Add nodes
builder.add_node("data_extractor", extract_github_data)
builder.add_node("code_mentor", code_mentor_review)


# Define flow (edges)
builder.add_edge(START, "data_extractor")
builder.add_edge("data_extractor", "code_mentor")
builder.add_edge("code_mentor", END)


# Compile graph into executable app
github_reviewer_app = builder.compile()