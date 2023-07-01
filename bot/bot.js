require("dotenv").config();
const Handler = require('./handler/Handler')

const commandHandler = require('./commands/handler/commandsHandler.js')
const eventHandler = require('./events/eventsHandler.js')


const { Client, Collection, GatewayIntentBits} = require("discord.js")

const bot = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
    ]
})

bot.commands = new Collection()


//Atribui os comandos para o bot
commandHandler(client)

//Atribui os eventos para o bot
eventHandler(client)


module.exports = client