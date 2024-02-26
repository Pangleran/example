const tokens = process.env.token;
  
for (const token of tokens) {
  
  const client = new Client({
    // code
  });

  client.on('ready', async () => {
    // code
  });

  client.on('messageCreate', async (m) => {
    // code
  });

  client.login(token)
}
