require("dotenv").config();

const commandHandler = require('./commands/handler/commandsHandler.js')
const eventHandler = require('./events/eventsHandler.js')


const { Client, Collection, GatewayIntentBits} = require("discord.js")

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]
})

client.commands = new Collection()

//Atribui os comandos para o bot
commandHandler(client)

//Atribui os eventos para o bot
eventHandler(client)


module.exports = client