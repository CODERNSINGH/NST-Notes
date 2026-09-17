function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`message-row ${isUser ? "user-row" : "assistant-row"}`}>
      {!isUser && (
        <div className="avatar">
          AI
        </div>
      )}

      <div className={`message ${isUser ? "user-message" : "assistant-message"}`}>
        {message.content}
      </div>
    </div>
  );
}

export default ChatMessage;