const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
  checkUpdate: false
});

client.on('ready', async () => {
  console.log(client.user.tag);
});

client.on('messageCreate', async (m) => {
  // code
});

client.login(process.env.token)
