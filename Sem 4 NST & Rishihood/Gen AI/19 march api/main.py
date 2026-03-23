from groq import Groq

# your API key
client = Groq()

MODEL = "openai/gpt-oss-20b"   # change here if needed



def ask_llm(prompt):
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content



if __name__ == "__main__":
    user_prompt = input("You: ")
    answer = ask_llm(user_prompt)
    print("\nLLM:", answer, "\n")
