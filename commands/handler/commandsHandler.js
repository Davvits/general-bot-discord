const {readdirSync} = require("fs")
const {resolve, join} = require("path")

module.exports = function (client) {
    const folderPath = resolve(__dirname, '..')
    const folders = readdirSync(folderPath)

    for (const subFolders of folders){

        const commandsPath = join(folderPath,subFolders)
        const commandsFiles = readdirSync(commandsPath).filter(file => file.endsWith(".js"))

        for(const file of commandsFiles) {
            const filePath = join(commandsPath,file)
            if(filePath.endsWith("commandsHandler.js")) continue

            const command = require(filePath)

            if('data' in command && 'execute' in command){
                client.commands.set(command.data.name,command)
            } else {
                console.log(`The command at ${file} is missing 'data' or 'execute' property`)
            }
        }
    }
    
}

