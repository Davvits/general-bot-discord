require('dotenv').config()

module.exports = {
    dialect: 'mariadb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    database: process.env.DB,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updateAt: 'updated_at'
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo'
    },
    timezone: 'America/Sao_Paulo'
};