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
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
    inventroy_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    warehouse_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    minimum_stock_level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};