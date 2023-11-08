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
    static associate(models) {
      // define association here
    }
  }
  Transfer.init({
    transfer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    original_warehouse_id: DataTypes.INTEGER,
    new_warehouse_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    transfer_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transfer',
  });
  return Transfer;
};