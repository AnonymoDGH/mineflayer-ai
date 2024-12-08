# mineflayer-ai

## Overview

The `mineflayer-ai` plugin provides AI-powered chat capabilities for Minecraft bots using the `mineflayer` library. It leverages the Google Generative AI API to generate responses to chat messages.

## Installation

To install the `mineflayer-ai` plugin, you can use npm:

```sh
npm install mineflayer-ai
```

## Usage

### Importing the Plugin

First, import the `mineflayer` library and the `mineflayer-ai` plugin:

```javascript
const mineflayer = require('mineflayer');
const ai = require('mineflayer-ai');
```

### Creating a Bot

Create a bot instance using `mineflayer`:

```javascript
const bot = mineflayer.createBot({
  host: 'localhost',
  username: 'Bot',
  auth: 'microsoft'
});
```

### Loading the Plugin

Load the `mineflayer-ai` plugin with the desired configuration:

```javascript
bot.loadPlugin(ai, { 
  prompt: 'you are an npc, respond in a friendly way', 
  api: 'YOUR_API_KEY'
});
```

### Configuration Options

- `prompt` (string): The initial prompt to guide the AI's responses.
- `api` (string): The API key for the Google Generative AI service.

### Events

- `chat`: The bot will listen for chat messages and respond using the AI.

## Example

Here is a complete example of how to use the `mineflayer-ai` plugin:

```javascript
const mineflayer = require('mineflayer');
const ai = require('mineflayer-ai');

const bot = mineflayer.createBot({
  host: 'localhost',
  username: 'Bot',
  auth: 'microsoft'
});

bot.loadPlugin(ai, { 
  prompt: 'you are an npc, respond in a friendly way', 
  api: 'YOUR_API_KEY'
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  console.log(`Received message from ${username}: ${message}`);
});

bot.on('login', () => {
  console.log("Bot has logged in and is ready to chat!");
});
```

## API Documentation

For detailed API documentation, see the [API Documentation](docs/api.md).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
