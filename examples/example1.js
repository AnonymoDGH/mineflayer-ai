const mineflayer = require('mineflayer')
const ai = require('mineflayer-ai')

const bot = mineflayer.createBot({
  host: 'localhost',
  username: 'Bot',
  auth: 'microsoft'
})

bot.loadPlugin(ai, { 
  prompt: 'you are an npc, respond in a friendly way', 
  api: 'KGHlslHdfiagJdk'
})
