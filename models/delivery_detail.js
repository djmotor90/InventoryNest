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
    static associate({ Delivery, Product, Warehouse }) {
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
      //each delivery has a warehouse
      Delivery_Detail.belongsTo(Warehouse, {
        foreignKey:'warehouse_id',
        as:"warehouse"
      })
    }
  }
  Delivery_Detail.init({
    delivery_detail_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    delivery_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    warehouse_id: DataTypes.INTEGER,
    //NOTE: this is never used. My model refused to update and was convinced this was still here even though it isnt
    inventory_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Delivery_Detail',
  });
  return Delivery_Detail;
};