const embedTicket = require('./../embeds/novoTicketEmbed.js')
const  { ChannelType } = require('discord.js')

module.exports = {
    name:'atendimento',
    async execute(interaction){
        const thread = interaction.channel.threads.cache.find(thread => thread.name === interaction.user.id.toString())

        if(!thread){
            interaction.channel.threads.create({
                name: interaction.user.id,
                type: ChannelType.PrivateThread,
                reason: 'nao sei oq nao seio oq la'
            }).then(ticket => {
                ticket.members.add(interaction.user.id)
                interaction.reply({ephemeral: true, content: "Ticket "+ticket.name+" aberto"})
                ticket.send({content: `<@&${1121778136221220927n}> !!`, embeds: [embedTicket(interaction)]})

            }) 
        } 
        
        else if(thread.archived) {
            thread.setArchived(false)
            thread.members.add(interaction.user.id)
            thread.send({content: `<@&${1121778136221220927n}> ${interaction.user} !!`})
            thread.send({embeds:[embedTicket(interaction)]})
            interaction.reply({ephemeral: true, content: "Ticket "+thread.name+" aberto"})
        }

        else {
            await interaction.reply({ content:'Voce ja tem um atendimento aberto em andamento', ephemeral:true})
                .then(msg => {
                    setTimeout(() => {
                        msg.delete()
                    }, 3000);
                })
        }
    }
}