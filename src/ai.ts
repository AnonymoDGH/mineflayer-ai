import { Bot } from "mineflayer";
import { GoogleGenerativeAI } from "@google/generative-ai";
/**
 * The main pvp manager plugin class.
 */
export class ai
{

    /**
     * The current target. This value should never be assigned to from outside the plugin.
     */
    prompt?: string;

    /**
     * The movements object to pass to pathfinder when creating the follow entity goal. Assign
     * to null in order to avoid passing any movement config to pathfinder. (If you plan on using
     * your own)
     */
    ai?: GoogleGenerativeAI;

    /**

    /**
     * Creates a new instance of the PVP plugin.
     *
     * @param bot - The bot this plugin is being attached to.
     */

    /*
     * Function prompt
     */
    prompt(bot: Bot, prompt: string): void {
        const prompt = text
        this.prompt = prompt;
    }

    ai(): void {

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  bot.chat(text);
}

run();
    }