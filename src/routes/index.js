// routes/index.js

const express = require('express');
const router = express.Router();
const routerLivros = require('./livros');
const routerPedidos = require('./pedidos');

router.use('/livros', routerLivros);
router.use('/pedidos', routerPedidos);

module.exports = router;
