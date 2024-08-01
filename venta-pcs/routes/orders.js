const express = require('express');
const router = express.Router();
const { Order } = require('../models');

// Ruta para obtener todos los pedidos
router.get('/', async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

module.exports = router;
