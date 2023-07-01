const { QuickDB } = require("quick.db");
const db = new QuickDB();

class jogador {
    constructor(ID,name,pos){
        this.ID = ID
        this.name = name
        this.posição = pos
        this.ritmo 
        this.chute
        this.passe
        this.drible
        this.defesa
        this.fisico
    }
}

async function visco () {
    await db.set("myArray", [1, 2, 3]); // Returns -> [1, 2, 3]
    await db.get("myArray"); // Returns -> [1, 2, 3]
    await db.set("myUser", {money: 100})
    // Using the myUser object from earlier
    await db.set("myUser.items", ["Sword", "Shield", "Health Potion"]); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Health Potion' ] }
    await db.set("My.User")
    // Some additional helper methods for arrays include push, pull, and has
    await db.push("myUser.items", "Armor"); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Health Potion', 'Armor' ] }
    const a = await db.pull("myUser.items", "Health Potion"); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Armor' ] }
    await db.has("myUser.items", "Sword"); // Returns -> true 
    console.log(a)
}

visco()

module.exports = {client: client}