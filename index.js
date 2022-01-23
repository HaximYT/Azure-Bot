const Discord = require("discord.js");
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}!`)
})
