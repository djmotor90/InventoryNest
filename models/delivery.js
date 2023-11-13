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
    static associate({ Customer, Delivery_Detail }) {
      // each customer has multiple deliveries
      Delivery.belongsTo( Customer, {
        foreignKey:'customer_id',
        as:"customer"
      }),
      // each delivery has multiple delivery details 
      Delivery.hasMany( Delivery_Detail, {
        foreignKey:'delivery_id',
        as:'delivery_details'
      })
    }
  }
  Delivery.init({
    delivery_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customer_id: DataTypes.INTEGER,
    delivery_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Delivery',
  });
  return Delivery;
};