require("dotenv").config();

const bot = require('./bot.js')

bot.login(process.env.TOKEN)