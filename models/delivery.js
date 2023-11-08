'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Delivery.init({
    delivery_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customer_id: DataTypes.STRING,
    delivery_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Delivery',
  });
  return Delivery;
};