const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PcConfiguration = sequelize.define('PcConfiguration', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  return PcConfiguration;
};
