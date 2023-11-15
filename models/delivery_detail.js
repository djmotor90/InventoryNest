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
      //each inventory has multiple inventories
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
    //TODO this is going to be a problem later down the road since inventories can be deleted for keeping track of delivieries, rpobably need to switch to warehouses
    warehouse_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    //this is going to catch the price at the time in case it ever changeds
    total_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Delivery_Detail',
  });
  return Delivery_Detail;
};