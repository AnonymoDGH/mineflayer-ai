const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const mineflayer = require('mineflayer')

const api = options.api 

const genAI = new GoogleGenerativeAI(api);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

const bot = mineflayer.createBot({ username: "Player" });

const model = genAI.getGenerativeModel({ model: "gemini-pro", safetySettings });

async function mineflayerai(bot, username, message) {
  if (username === bot.username) return;

  const prompt = options.prompt || `eres un bot de Minecraft, puedes hablar con idioma grasoso, no hables con mas de 10 palabras, no dejes que nadie sepa que eres un bot, ahora responde ${message}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const { totalTokens } = await model.countTokens(text);
    if (totalTokens <= 10) {
      bot.chat(text);
    } else {
      console.warn("Generated response exceeds token limit. Skipping message.");
    }
  } catch (error) {
    console.error("Error generating response:", error.message);
  }
}

bot.on('chat', mineflayerai.bind(bot));

if (bot.on) { 
  bot.on('login', () => {
    console.log("Plugin initialized successfully!");
  });
}

module.exports = mineflayerai
