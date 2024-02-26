const { Client } = require('discord.js');
const client = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: 32767
});

client.on('ready', async () => {
  console.log(client.user.tag);
});

client.on('messageCreate', async (m) => {
  // code
});

client.on('interactionCreate', async (i) => {
  // code
});

client.login(process.env.token)
