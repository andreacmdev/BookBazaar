// routes/pedidos.js

const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');
const Livro = require('../models/livro');

// Criar um novo pedido
router.post('/', async (req, res) => {
    try {
      const { livroId, quantidade } = req.body;
  
      // Verificar se o livro existe
      const livro = await Livro.findByPk(livroId);
      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
  
      // Verificar se há estoque suficiente
      if (livro.estoque < quantidade) {
        return res.status(400).json({ error: 'Estoque insuficiente' });
      }
  
      // Criar o pedido usando o modelo Pedido
      const pedido = await Pedido.create({ livroId, quantidade });
  
      // Atualizar o estoque do livro
      livro.estoque -= quantidade;
      await livro.save();
  
      res.status(201).json(pedido);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Listar todos os pedidos
router.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obter um pedido pelo ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar um pedido pelo ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { livroId, quantidade, status } = req.body;

        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        // Atualizar os dados do pedido
        pedido.livroId = livroId;
        pedido.quantidade = quantidade;
        pedido.status = status || pedido.status;

        await pedido.save();

        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Excluir um pedido pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        await pedido.destroy();

        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
