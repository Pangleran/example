// set 2 statusActivity
client.on('ready', async () => {
  setInterval(async () => {
    client.user.setActivity('status 1', {
      type: 'PLAYING'
    });
    await client.user.setActivity('status 2', {
      type: 'STREAMING',
      url: 'url'
    });
  }, 10000); // every 10 seconds
});
