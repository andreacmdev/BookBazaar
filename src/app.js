const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');
const routesLivros = require('./routes/livros');
const routesPedidos = require('./routes/pedidos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rotas principais
app.use('/livros', routesLivros);
app.use('/pedidos', routesPedidos);

// Iniciar o servidor
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao iniciar o servidor:', error);
    });
