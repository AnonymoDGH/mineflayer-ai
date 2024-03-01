<h1 align="center">mineflayer-ai</h1>
<p align="center"><i>A chat with artificial intelligence, defines the prompt and speaks without problems</i></p>

<p align="center">
  <img src="https://github.com/AnonymoDGH/mineflayer-ai/workflows/Build/badge.svg" />
  <img src="https://img.shields.io/npm/v/mineflayer-ai" />
  <img src="https://img.shields.io/github/repo-size/AnonymoDGH/mineflayer-ai" />
  <img src="https://img.shields.io/npm/dm/mineflayer-ai" />
  <img src="https://img.shields.io/github/contributors/AnonymoDGH/mineflayer-ai" />
  <img src="https://img.shields.io/github/license/AnonymoDGH/mineflayer-ai" />
</p>

---

### Getting Started

Install the plugin in Node with:
```bash
npm install mineflayer-ai
```

This plugin has a relies on [random-plugin]() for a-b-c. That plugin should be loaded first.

### Simple Bot

The brief description goes here.

```js
// Create your bot
const mineflayer = require('mineflayer')
const ai = require('mineflayer-ai')

const bot = mineflayer.createBot({
  host: 'localhost',
  username: 'Bot',
  auth: 'microsoft'
})

bot.loadPlugin(ai, { 
  // Define your prompt
  prompt: 'you are an npc, respond in a friendly way', 
  // Get your api here (https://aistudio.google.com/app/apikey)
  api: 'YOU_API'
})

```

### Documentation

[API](https://github.com/AnonymoDGH/mineflayer-ai/blob/master/docs/api.md)

[Examples](https://github.com/AnonymoDGH/mineflayer-ai/tree/master/examples)

### License

This project uses the [MIT](https://github.com/AnonymoDGH/mineflayer-ai/blob/master/LICENSE) license.

### Contributions

I do not know?
