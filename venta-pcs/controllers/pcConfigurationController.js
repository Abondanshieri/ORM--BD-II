const { PCConfiguration } = require('../models');

const createPCConfiguration = async (req, res) => {
  try {
    const pcConfiguration = await PCConfiguration.create(req.body);
    res.status(201).json(pcConfiguration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPCConfigurations = async (req, res) => {
  try {
    const pcConfigurations = await PCConfiguration.findAll();
    res.status(200).json(pcConfigurations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPCConfiguration, getPCConfigurations };
