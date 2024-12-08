const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const mineflayer = require('mineflayer');
const { API_KEY, PROMPT } = process.env;

const genAI = new GoogleGenerativeAI(API_KEY);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_LOW,
  },
];

const bot = mineflayer.createBot({ username: "Player" });

const model = genAI.getGenerativeModel({ model: "gemini-pro", safetySettings });

async function generateResponse(prompt: string): Promise<string | null> {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const { totalTokens } = await model.countTokens(text);

    if (totalTokens <= 10) {
      return text;
    } else {
      console.warn("Generated response exceeds token limit. Skipping message.");
      return null;
    }
  } catch (error: unknown) {
    console.error("Error generating response:", (error as Error).message);
    return null;
  }
}

async function mineflayerai(bot: mineflayer.Bot, username: string, message: string) {
  if (username === bot.username) return;

  const prompt = PROMPT || `eres un bot de Minecraft, puedes hablar con idioma grasoso, no hables con mas de 10 palabras, no dejes que nadie sepa que eres un bot, ahora responde ${message}`;

  const response = await generateResponse(prompt);
  if (response) {
    bot.chat(response);
  }
}

bot.on('chat', mineflayerai.bind(bot));

bot.on('login', () => {
  console.log("Plugin initialized successfully!");
});

module.exports = mineflayerai;
