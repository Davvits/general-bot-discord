const  { EmbedBuilder} = require('discord.js')

module.exports = (message) => {
    return new EmbedBuilder()
    .setTitle('BOT - Ticket')
    .setDescription('Novo Ticket Criado '+message.user+'.')
    .setColor(0xA200FF)
    //.setImage(message.client.user.displayAvatarURL())
    .setImage('	https://i.pinimg.com/originals/64/db/fb/64dbfb279110e5730b698a752532605b.gif')
    .setTimestamp()
}