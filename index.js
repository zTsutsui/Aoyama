/* 
      Coded by Tsutsui#3661, Started by July 4th 20222, Almost my birthday. 
*/

// Grabbing token from config.json
const { token } = require('./config.json')

// Getting required classes
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// If the bot is online, it will log that it's ready in the Console / Terminal
client.on('ready', (c) => {
      console.log(`Bot is ready! As: ${c.user.tag}`)
})

// Message Event
client.on('messageCreate', (message) => {
      if (message.content.toLowerCase().startsWith("-ping")) {
            message.reply("**Pong!**")
      }
})

// Login into the bot with its token
client.login(token)