
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Importe a instância do Sequelize

const Pedido = sequelize.define('pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    livroId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pendente', 'vendido', 'cancelado'),
        defaultValue: 'pending'
    }
});

module.exports = Pedido;
