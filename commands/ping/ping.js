const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pingudo')
    .setDescription("Replies with Pong"),
    async execute(interaction){

        console.log(interaction.guild.channels)

        await interaction.reply('Pong')
    }
}