'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transfer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Warehouse, Product}) {
      // every transfer has one to warehouse
      Transfer.belongsTo(Warehouse,{
        foreignKey:'new_warehouse_id',
        as:"warehouse_to"
      }),
      //every transfer has one from warehouse
      Transfer.belongsTo(Warehouse,{
        foreignKey:'original_warehouse_id',
        as:"warehouse_from"
      }),
      //every transfer has one product
      Transfer.belongsTo(Product,{
        foreignKey:'product_id',
        as:"product"
      })
    }
  }
  Transfer.init({
    transfer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    original_warehouse_id: DataTypes.INTEGER,
    new_warehouse_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    transfer_date: DataTypes.DATE,
    transfer_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transfer',
  });
  return Transfer;
};