const  { EmbedBuilder} = require('discord.js')

module.exports = (message) => {
    return new EmbedBuilder()
    .setTitle('BOT - Atendimento/Ticket/Suport')
    .setDescription('Nessa seção, você pode tirar suas dúvidas ou entrar em contato com a nossa equipe do Servidor \n  \n  Para evitar problemas, leia as opções com atenção e lembre-se de tentar pedir ajuda nos suportes comunitários do servidor.')
    .setColor(0xA200FF)
    //.setImage(message.client.user.displayAvatarURL())
    .setImage('	https://i.pinimg.com/originals/64/db/fb/64dbfb279110e5730b698a752532605b.gif')
    .setThumbnail(message.client.user.displayAvatarURL())
    .setTimestamp()
}