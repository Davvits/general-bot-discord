const  { ActionRowBuilder,StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require('discord.js')

const menu = new StringSelectMenuBuilder()
    .setCustomId('atendimento')
    .setPlaceholder('Selecione uma opção...!')
    .addOptions(
        new StringSelectMenuOptionBuilder()
            .setLabel('Tirar duvidas')
            .setEmoji('❔')
            .setValue('duvida'),
        new StringSelectMenuOptionBuilder()
            .setLabel('Fazer denuncia!')
            .setEmoji('🚨')
            .setValue('denuncia'),
        new StringSelectMenuOptionBuilder()
            .setLabel('Abrir ticket!')
            .setEmoji('🧧')
            .setValue('ticket'),
        new StringSelectMenuOptionBuilder()
            .setLabel('Relatar bug')
            .setEmoji('🐛')
            .setValue('bug'),
    );

module.exports = new ActionRowBuilder().addComponents(menu);