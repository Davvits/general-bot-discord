const {readdirSync} = require("fs")
const {resolve, join} = require("path")
const { glob } = require('glob')


//const files = async (x) => x(await glob('commands/**/*.js'))

//files(console.log)

module.exports = async function (client) {
    const folderPath = resolve(__dirname, '..')
    const folders = readdirSync(folderPath)
    const commandsFiles = await glob('commands/**/*.js', {ignore: 'node_modules/**'})
    
    for(const file of commandsFiles){
        const filePath = join(folderPath,file)
        console.log(filePath)
    }
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

