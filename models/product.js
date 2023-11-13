'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Inventory, Delivery_Detail, Transfer }) {
      //every product can belong to multiple inventories
      Product.hasMany(Inventory,{
        foreignKey:'product_id',
        as:"inventories"
      }),
      //every product can belong to multiple sales
      Product.hasMany(Delivery_Detail, {
        foreignKey:'product_id',
        as:"delivery_details"
      }),
      //every product can belong to multiple transfers
      Product.hasMany(Transfer, {
        foreignKey:'product_id',
        as:"transfers"
      })
    }
  }
  Product.init({
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: {type: DataTypes.STRING, allowNull: false},
    product_description: { type: DataTypes.TEXT, allowNull: false},
    product_category: {type: DataTypes.ENUM, values: ['Electronics', 'Clothing', 'Furniture','Books','Toys', 'Kitchen Appliances', 'Beauty Products','Sports Equipment', 'Home Decor', 'Tools'], allowNull: false},
    product_weight: {type: DataTypes.FLOAT, allowNull: true},
    product_provider_price:{ type: DataTypes.FLOAT,allowNull: false},
    product_sale_price:{ type: DataTypes.FLOAT, allowNull: false},
    product_picture_filename: {type: DataTypes.STRING, allowNull: true}
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};