require('dotenv').config()

const { REST, Routes } = require('discord.js')

const fs = require('node:fs');
const path = require('node:path');

const commands = []

const foldersPath = path.join(__dirname, 'commands');
const commandsFolders = fs.readdirSync(foldersPath);

for (const folder of commandsFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandsFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

  for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file);
    console.log(filePath.endsWith('commandsHandler.js'))
    if(filePath.endsWith('commandsHandler.js')) continue
    const command = require(filePath);

    if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
    } else {
      console.log(`The command at ${filePath} is missing 'data' or 'execute' property`);
    }
  }
}

const rest = new REST().setToken(process.env.TOKEN);
(async () => {
  try {
    console.log(`Regstrando ${commands.length} comandos (/) `);
    const data = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands },
    );
    console.log(`Comandos registrados com sucesso (/) n: ${data.length}`);
  } catch (error) {
    console.log(error);
  }
})();
