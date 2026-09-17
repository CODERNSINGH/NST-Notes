import { useState } from "react";

function ChatInput({ onSend, disabled }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = input.trim();

    if (!message || disabled) return;

    onSend(message);

    setInput("");
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Message AI..."
        disabled={disabled}
      />

      <button type="submit" disabled={disabled || !input.trim()}>
        ↑
      </button>
    </form>
  );
}

export default ChatInput;