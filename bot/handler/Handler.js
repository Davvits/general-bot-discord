const {readdirSync} = require("fs")
const {resolve, join} = require("path")
const { glob } = require('glob')
const { eventNames } = require("process")

class Handler {
    constructor(client){
        this.client = client
        this.rootPath = resolve(__dirname,'..')
        this.erros = []
        this.init()
    }
    init(){
        if(!this.client) {
            this.erros.push('Client Is not defined')
            return this.printErrors()
        }
        this.slashComands()
        this.events()
        this.printErrors()
    }
    printErrors(){
        if(this.erros.length < 0) this.erros.forEach(er => console.log(er))
    }
    async slashComands() {
        const commandsFiles = (await glob('commands/**/*.js')).map(path => join(this.rootPath,path))

        commandsFiles.forEach(filePath => {
            const command = require(filePath)
            //console.log(filePath)
            if('data' in command && 'execute' in command){
                this.client.commands.set(command.data.name,command)
            } else {
                this.erros.push(`The command at ${filePath} is missing 'data' or 'execute' property`)
                console.log(`The command at ${filePath} is missing 'data' or 'execute' property`)
            }

        })
    }



    async events(){
        const eventsFiles =  (await glob('events/**/*.js')).map(path => join(this.rootPath,path))

        eventsFiles.forEach(filePath => {
            const event = require(filePath)

            if(event.once) client.once(event.name,(...args) => event.execute(...args))
            else client.on(event.name, (...agrs) => event.execute(...agrs))
            
        })
        
    }
}
new Handler().events()
new Handler().slashComands()
module.exports =  Handler