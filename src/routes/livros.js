// routes/books.js

const express = require('express');
const router = express.Router();
const Livro = require('../models/livro');

// Criar um novo livro
router.post('/', async (req, res) => {
    try {
        const livro = await Livro.create(req.body);
        res.status(201).json(livro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await Livro.findAll();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obter um livro por ID
router.get('/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar um livro por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Livro.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updateLivro = await Book.findByPk(req.params.id);
            res.status(200).json(updateLivro);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Deletar um livro por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Livro.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
