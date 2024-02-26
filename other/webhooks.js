const { WebhookClient } = require('discord.js');
const webhook = new WebhookClient({
  url: process.env.urlWebhook
});

// sent to webhooks

webhook.send({
  content: 'text',
  avatar: 'urlAvatar',
  username: 'nameWebhook',
  embeds: [{
    // code
  }]
  files: [// ur file]
});

// edit old webhooks

webhook.edit('idWebhook', {
  // code
});
