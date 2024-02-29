import { Bot } from "mineflayer";
import { Ai } from "./Ai"; // Path to your Ai class definition

// **Secure API Key Management (Critical!):**
// - Never store or expose your API key directly in the code.
// - Use secure environment variables or other secure retrieval methods.
// **Placeholder for security best practices:**
const apiKey = "<<YOUR_SECURE_API_KEY>>"; // Replace with your securely obtained API key

export function plugin(bot: Bot): void {
  // Create an instance of the Ai class with secure API key handling
  const ai = new Ai(bot, apiKey);

  // Associate the Ai instance with the bot using an appropriate property name
  bot.ai = ai; // Assuming Ai is a valid property for Bot instances

  // Consider error handling for `Api` initialization within your Ai class
}
