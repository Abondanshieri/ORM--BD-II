const express = require('express');
const router = express.Router();
const { PcConfiguration } = require('../models');

// Ruta para obtener todas las configuraciones de PC
router.get('/', async (req, res) => {
  const configurations = await PcConfiguration.findAll();
  res.json(configurations);
});

module.exports = router;
