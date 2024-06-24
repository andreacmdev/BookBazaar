

const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

// Criar um novo pedido
router.post('/', async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obter todos os pedidos
router.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obter um pedido por ID
router.get('/:id', async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar um pedido por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Pedido.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const atualizaPedido = await Pedido.findByPk(req.params.id);
            res.status(200).json(atualizaPedido);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Deletar um pedido por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Pedido.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
