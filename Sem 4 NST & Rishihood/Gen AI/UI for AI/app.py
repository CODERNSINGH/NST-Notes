from flask import Flask, render_template, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)

# Load the model and tokenizer
model_name = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
model = AutoModelForCausalLM.from_pretrained(model_name, dtype=torch.float16 if torch.cuda.is_available() else torch.float32)
tokenizer = AutoTokenizer.from_pretrained(model_name)
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data['message']
    # Tokenize input
    inputs = tokenizer(user_message, return_tensors="pt", padding=True, truncation=True)
    # Generate response
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_length=inputs['input_ids'].shape[1] + 100,
            do_sample=True,
            temperature=0.8,
            top_p=0.9,
            num_return_sequences=1,
            pad_token_id=tokenizer.eos_token_id
        )
    response = tokenizer.decode(outputs[0][inputs['input_ids'].shape[1]:], skip_special_tokens=True)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)