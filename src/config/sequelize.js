// config/sequelize.js

const { Sequelize } = require('sequelize');
const config = require('./config'); // Arquivo de configuração do banco de dados

// Conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'postgres', // Tipo do banco de dados
    logging: false, // Desabilitar logging SQL (opcional)
});

module.exports = sequelize;
