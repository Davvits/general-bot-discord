const  { Events, ChannelType } = require('discord.js')
const atendimentoInteraction = require('./../interacoes/atendimentoMenu.js')
module.exports = {
    name: Events.InteractionCreate,
    execute: async ( interaction ) => {

        
        if(interaction.isChatInputCommand()) {

            const command = interaction.client.commands.get(interaction.commandName)

            if(!command) return console.log(`Nenhuma comando encotrado com o nome ${interaction.commandName}`)

            try {
                await command.execute(interaction)
            } catch (error) {
                console.log(error)
                if(interaction.replied || interaction.deferred ) await interaction.followUp({content: "Houve um erro na execução"})
                else await interaction.reply({ content: 'Houve um erro na execução'})
            }
        }


        if(interaction.isStringSelectMenu()){
        
            const nameInteração = interaction.customId

            if(interaction.values[0] === 'ticket'){
                try {
                    atendimentoInteraction.execute(interaction)
                } catch (error) {
                    console.log(error)
                }
                
            }
        }
    }
}