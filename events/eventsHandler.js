const {readdirSync} = require("fs")
const {resolve, join} = require("path")

module.exports = function (client) {
    const eventsPath = resolve(__dirname)
    const eventsFiles = readdirSync(eventsPath).filter(file => file.endsWith(".js"))

    for(const file of eventsFiles) {
        const filePath = join(eventsPath,file)
        const event = require(filePath)

        if(event.once) client.once(event.name,(...args) => event.execute(...args))
        else client.on(event.name, (...agrs) => event.execute(...agrs))
    }
}