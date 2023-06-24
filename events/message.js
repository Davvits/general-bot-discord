const  { Events,  ActionRowBuilder, EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require('discord.js')
const embedAtendimento = require('./../embeds/atendimento.js')
const menuAtendimento = require('./../menus/atendimento.js')

module.exports = {
    name: Events.MessageCreate,
    execute: async ( message ) => {

        console.log(message.channelId)
        if(!message.content.startsWith("$")) return
        //Deleta bundle de mensagens do chennel
        if(message.content === '$deleteAll'){

            try {
                message.channel.messages.fetch()
                    .then(msgs => {
                        message.channel.bulkDelete(msgs)
                    })
            } catch (error) {
                 console.log("Erro ao tentar apagar mensagens")
            }
            finally {
                return message.delete()
            }

        }

        if(message.content === '$init') {
            try {
                message.channel.send({embeds: [embedAtendimento(message)], components: [menuAtendimento]})

            } catch (error) {
                console.log(error)
            }
           
            finally{
                await message.delete()
            }

        }
    }
}