// models/book.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Importe a instância do Sequelize

const Livro = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anoPublicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = Livro;
