'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Warehouse, Delivery_Detail }) {
      //each inventory entry belongs to one warehouse
      Inventory.belongsTo(Warehouse,{
        foreignKey:'warehouse_id',
        as:"warehouse"
      }),
      //each inventory entry belongs to one product
      Inventory.belongsTo(Product, {
        foreignKey:'product_id',
        as:"product"
      }),
      // every inventroy can have multiple delivery details
      Inventory.hasMany(Delivery_Detail, {
        foreignKey:'inventory_id',
        as:"delivery_details"
      })
    }
  }
  Inventory.init({
    inventory_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    warehouse_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    minimum_stock_level: DataTypes.INTEGER,
    current_stock_level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};