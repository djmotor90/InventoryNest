'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Delivery, Product, Inventory }) {
      // each Delivery has multiple delivery details
      Delivery_Detail.belongsTo(Delivery, {
          foreignKey:'delivery_id',
          as:'delivery'
      }),
      //each Product has multiple delivery details
      Delivery_Detail.belongsTo(Product, {
          foreignKey:'product_id',
          as:"product"
      }),
      //each inventory has multiple inventories
      Delivery_Detail.belongsTo(Inventory, {
        foreignKey:'inventory_id',
        as:"inventory"
      })
    }
  }
  Delivery_Detail.init({
    delivery_detail_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    delivery_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    inventory_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Delivery_Detail',
  });
  return Delivery_Detail;
};