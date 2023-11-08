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
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: DataTypes.STRING,
    product_description: DataTypes.STRING,
    product_category: {type: DataTypes.ENUM, values: ['Electronics', 'Clothing', 'Furniture','Books','Toys', 'Kitchen Appliances', 'Beauty Products','Sports Equipment', 'Home Decor', 'Tools']},
    product_weight: DataTypes.FLOAT,
    product_provider_price: DataTypes.FLOAT,
    product_sale_price: DataTypes.FLOAT,
    product_picture_filename: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};