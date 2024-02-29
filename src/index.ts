import { Bot } from 'mineflayer';
import { ai } from "./ai";

export function plugin(bot: Bot)
{
    const ai = new ai(bot);
    bot.ai = ai;
}

declare module "mineflayer" {
    interface Bot {
        ai: ai;
    }
}
