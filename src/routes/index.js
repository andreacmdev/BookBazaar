const express = require('express');
const router = express.Router();

router.use('/books', require('../models/modelBook'));

module.exports = router;
