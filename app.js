const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.on("ready", () => {
  console.log("BOT ready");
});

client.on("message", (msg) => {
  if (msg.content ===`${config.prefix}test`) {
    msg.reply("working"+`${msg.author.username}id:${msg.author.id}`);
  }
});


client.login(config.tokken);

console.log("nibba")