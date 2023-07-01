require('dotenv').config()
const {Sequelize} = require('sequelize')
/*
const sequelize = new Sequelize({
    username:'root',
    password:'pussinboots22#',
    database:'discord',
    hostname:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
})*/

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect:process.env.DB_DIALECt
})
const a = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = sequelize
//global.sequelizeInstance = sequelizeInstance
