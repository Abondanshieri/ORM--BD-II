const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
