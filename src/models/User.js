const { Model, DataTypes } = require('sequelize');
//const sequelize = require('./../services/connection');

module.exports = class extends Model {
    static init(sequelize){
        super.init({
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            discordID: {
                type: DataTypes.INTEGER,
                allowNull: false
            }, 

        }, {
            sequelize,
            modelName: 'User'
        })
    }
}

const User = sequelize.define('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    discordID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
try {
    sequelize.sync().then(()=>{
        User.create
    })
} catch (error) {
    
}
const a = new User({discordID:12})
const b = new User({discordID: 2222})
console.log(a,b)
/*
class Useer extends Model {}

User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();*/