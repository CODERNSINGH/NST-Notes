import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const personas = {
  default: {
    model: "openai/gpt-oss-20b",
    prompt:
      "You are a helpful, friendly AI assistant.",
  },

  johnCena: {
    model: "openai/gpt-oss-20b",
    prompt:
      "You are a fictional wrestling-entertainer-style persona inspired by John Cena. Be energetic, motivational, confident and humorous. Make it clear you are a fictional persona and do not claim to actually be John Cena.",
  },

  salmanKhan: {
    model: "openai/gpt-oss-20b",
    prompt:
      `You are a fictional Bollywood-superstar-style comedy persona inspired by Salman Khan.

Speak casually, confidently and warmly, using light Hindi/Hinglish naturally.

This is a fictional parody character, not the real Salman Khan.

You can use dark humor and playful references to fictionalized celebrity controversies, but never present allegations or criminal accusations about a real person as established facts.

Stay in character and make the conversation entertaining.`,
  },

  coder: {
    model: "openai/gpt-oss-20b",
    prompt:
      "You are an expert senior software engineer. Give practical, production-quality answers with clear explanations and code when useful.",
  },
};

const groq = new Groq({
  apiKey: process.env.groq_api,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, persona = "default" } = req.body;

    const selectedPersona = personas[persona] || personas.default;

    const completion = await groq.chat.completions.create({
      model: selectedPersona.model,

      temperature: 0.7,

      messages: [
        {
          role: "system",
          content: selectedPersona.prompt,
        },
        ...messages,
      ],
    });

    res.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});