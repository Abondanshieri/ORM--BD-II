const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  return Order;
};
