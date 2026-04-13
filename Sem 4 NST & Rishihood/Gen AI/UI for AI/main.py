import streamlit as st
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load the model and tokenizer
@st.cache_resource
def load_model():
    model_name = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
    model = AutoModelForCausalLM.from_pretrained(model_name, dtype=torch.float16 if torch.cuda.is_available() else torch.float32)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    return model, tokenizer

model, tokenizer = load_model()

# Title with some flair
st.title("🤖 Crazy Cool Dream Hallucinator Chatbot 🚀")
st.markdown("Welcome to the wild world of AI hallucinations! Chat with the TinyLlama Dream Hallucinator and see what crazy responses you get. 🌈✨")

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat messages from history on app rerun
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Accept user input
if prompt := st.chat_input("What's on your mind? Dream big! 💭"):
    # Add user message to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})
    # Display user message in chat message container
    with st.chat_message("user"):
        st.markdown(prompt)

    # Display assistant response in chat message container
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        full_response = ""
        # Tokenize the input
        inputs = tokenizer(prompt, return_tensors="pt", padding=True, truncation=True)
        # Generate response
        with torch.no_grad():
            outputs = model.generate(
                **inputs,
                max_length=inputs['input_ids'].shape[1] + 100,  # Generate up to 100 new tokens
                do_sample=True,
                temperature=0.4,  # A bit higher for more creativity
                top_p=0.9,
                num_return_sequences=1,
                pad_token_id=tokenizer.eos_token_id
            )
        # Decode the response
        response = tokenizer.decode(outputs[0][inputs['input_ids'].shape[1]:], skip_special_tokens=True)
        # Simulate streaming by showing the response
        message_placeholder.markdown(response)
    # Add assistant response to chat history
    st.session_state.messages.append({"role": "assistant", "content": response})

# Add some fun elements
st.markdown("---")
st.markdown("💡 **Tip:** This model loves to hallucinate wild stories. Ask it about dreams, fantasies, or anything imaginative!")
st.markdown("🔥 Built with ❤️ using Hugging Face Transformers and Streamlit.")


