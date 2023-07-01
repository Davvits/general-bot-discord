const { SlashCommandBuilder,  PermissionFlagsBits, EmbedBuilder } = require('discord.js')
const permissoes = require('./../../embeds/permissoes')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription("expulsar membro")
    .addStringOption( options => options
        .setName("membro")
        .setDescription("nome do membro")
        .setRequired(true))
    .addStringOption( option => option
        .setName('motivo')
        .setRequired(true)
        .setDescription('motivo')),

    async execute(interaction){
        if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply({ content: `Você não possui permissão para utilizar este comando.`,embeds:[permissoes(interaction)], epemeral: true })

        
        const membro = interaction.options.getString('membro')
        const motivo = interaction.options.getString('motivo')
        const membro_id = membro.replaceAll('<@','').replaceAll('>','')
        const getMember = interaction.guild.members.cache.get(membro_id)
        console.log(getMember)

        let embed = new EmbedBuilder()
        .setColor("Green")
        .setDescription(`O usuário ${membro} foi expulso com sucesso!\n\n> Motivo: \`${motivo}\`.`)

        let embed_erro = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`O usuário ${membro} não foi expulso do servidor!\nHouve um erro na hora de executar este comando, por favor tente novamente.`);


        await interaction.reply({embeds: [embed]})
    }
}