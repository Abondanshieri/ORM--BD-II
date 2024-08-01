const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

module.exports = router;
