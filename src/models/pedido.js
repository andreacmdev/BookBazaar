// models/pedido.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Pedido = sequelize.define('Pedido', {
        livroId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Books',
                key: 'id'
            }
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pendente'
        }
    });

    return Pedido;
};
