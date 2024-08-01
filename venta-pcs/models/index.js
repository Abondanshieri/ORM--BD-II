const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pc_sales_db', 'root', null, {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Importar modelos
const User = require('./user')(sequelize);
const Product = require('./product')(sequelize);
const Order = require('./order')(sequelize);
const OrderDetail = require('./orderDetail')(sequelize);
const PcConfiguration = require('./pcConfiguration')(sequelize);

// Definir relaciones
User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);
Product.hasMany(OrderDetail);
OrderDetail.belongsTo(Product);
User.hasMany(PcConfiguration);
PcConfiguration.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Product,
  Order,
  OrderDetail,
  PcConfiguration
};
