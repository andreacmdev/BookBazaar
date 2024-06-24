const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Pedido = sequelize.define('Pedido', {
  livroId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendente',
    allowNull: false,
  },
});

module.exports = Pedido;
