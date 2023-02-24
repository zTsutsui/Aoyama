/* 
      Coded by Tsutsui#3661, Started by July 4th 20222, Almost my birthday. 
*/

// I'm alive

const { token } = require('./config.json')
const { Client, Intents, MessageEmbed } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const { MessageActionRow, MessageButton } = require('discord.js');

client.on('ready', (c) => {
      console.log(`Bot is ready! As: ${c.user.tag}`)
})

let prefix = "-"

client.on('messageCreate', async (message) => {
      if (message.author.bot) return

      if (message.content.toLowerCase().startsWith(prefix + 'ping')) {
            const msg = message.content.split(' ').slice(1).join(' ')
            
            if (!msg) {
                  message.reply("**Pong!**")
            } else message.reply(`**An error has occurred, cannot execute *\"${msg}\"***`)
      }

      if (message.content.toLowerCase().startsWith(prefix + 'button')) {
            const filter = i => i.customId === 'primary' && i.user.id === message.author.id;
            const collector = message.channel.createMessageComponentCollector({ filter, time: 1000 * 15 });
            const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Press here!')
					.setStyle('SUCCESS'),
			);
            const embed = new MessageEmbed().setColor("GREEN").setTitle("Testing Button Feature!")

            collector.on('collect', async i => {
                  if (i.customId === 'primary') {
                        await i.update({ embeds: [embed.setTitle("Button has been clicked, thanks!")], components: [] });
                        collector.stop()
                  }
            });

            collector.on('end', collected => {
                  console.log(`Finished collecting, collected ${collected.size} item`)
            })

            await message.reply({ embeds: [embed], components: [row] });
      }

      

})

client.login(token)
