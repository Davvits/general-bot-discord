const { SlashCommandBuilder , PermissionFlagsBits, EmbedBuilder} = require('discord.js')

const permissoes = require('./../../embeds/permissoes')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription("limpa chat")
    .addStringOption( option => option
        .setName('qtd')
        .setDescription('quantidade de mensagens')
        .setRequired(true)),

    async execute(interaction){
        if(!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) return interaction.reply({ content: interaction.user.username ,embeds:[permissoes(interaction)], ephemeral: true })

        const qtd = Number(interaction.options.getString('qtd'))

        if (qtd > 99 || qtd <= 0) {

            let embed = new EmbedBuilder()
                .setColor("Random")
                .setDescription(`\`/clear [1 - 99]\``);

            return interaction.reply({ embeds: [embed] , ephemeral: true})

        }

        interaction.channel.bulkDelete(qtd)

        let embed = new EmbedBuilder()
                    .setColor("Green")
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .setDescription(`O canal de texo ${interaction.channel} teve \`${qtd}\` mensagens deletadas por \`${interaction.user.username}\`.`);
        
        await interaction.reply({embeds:[embed]})
            .then( replay => {
                setTimeout(() => {
                    replay.delete()
                }, 5000);
            })
    }
}
