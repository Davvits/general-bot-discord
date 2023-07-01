const { QuickDB } = require("quick.db");
const db = new QuickDB();

async function visco () {
//const a = await db.set("myKey", 22); // Returns -> "myValue"

// Getting the value of the key "myKey"
const a = await db.get("myKey"); // Returns -> "myValue"
console.log(a)
// In addition to strings, you can store objects as well.
//await db.set("myUser", { balance: 500 }); // Returns -> { balance: 500 }

// Getting the value of the key "myUser"
//await db.get("myUser"); 
}

visco()