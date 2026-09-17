import { useEffect, useRef, useState } from "react";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  // Available AI personas
  const personas = [
    {
      id: "default",
      name: "AI Assistant",
    },
    {
      id: "johnCena",
      name: "John Cena",
    },
    {
      id: "salmanKhan",
      name: "Salman Khan",
    },
    {
      id: "coder",
      name: "Senior Developer",
    },
  ];

  // Chat messages
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! How can I help you today?",
    },
  ]);

  // Selected persona
  const [persona, setPersona] = useState("default");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Used for automatic scrolling
  const chatEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Send message to backend
  const sendMessage = async (text) => {
    const userMessage = {
      role: "user",
      content: text,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    // Show user's message immediately
    setMessages(updatedMessages);

    // Show loading indicator
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3001/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            messages: updatedMessages,
            persona: persona,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      // Add AI response
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect to the AI. Please make sure the server is running.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Start a new conversation
  const newChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hey! How can I help you today?",
      },
    ]);
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">

        <div>
          <h1>AI Chat</h1>

          <span>
            Powered by Groq
          </span>
        </div>

        {/* Persona Selector */}

        <select
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
          className="persona-select"
        >
          {personas.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>

        {/* New Chat */}

        <button
          className="new-chat-button"
          onClick={newChat}
        >
          New chat
        </button>

      </header>

      {/* ================= CHAT ================= */}

      <main className="chat">

        <div className="messages">

          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
            />
          ))}

          {/* Loading indicator */}

          {loading && (
            <div className="message-row assistant-row">

              <div className="avatar">
                AI
              </div>

              <div className="message assistant-message typing">

                <span />
                <span />
                <span />

              </div>

            </div>
          )}

          <div ref={chatEndRef} />

        </div>

      </main>

      {/* ================= INPUT ================= */}

      <footer className="footer">

        <ChatInput
          onSend={sendMessage}
          disabled={loading}
        />

        <p>
          AI can make mistakes. Check important information.
        </p>

      </footer>

    </div>
  );
}

export default App;