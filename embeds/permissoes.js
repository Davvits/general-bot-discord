const  { EmbedBuilder} = require('discord.js')

module.exports = (message) => {
    return new EmbedBuilder()
    .setTitle('BOT -GENERAL BOT')
    .setDescription('Você não tem permissão para executar esse comando  \n  \n  seu corno!.')
    .setColor(0xA200FF)
    //.setImage(message.client.user.displayAvatarURL())
    .setImage('	https://i.pinimg.com/originals/64/db/fb/64dbfb279110e5730b698a752532605b.gif')
    .setThumbnail(message.client.user.displayAvatarURL())
    .setTimestamp()
}