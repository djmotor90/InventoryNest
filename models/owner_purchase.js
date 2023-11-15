'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner_Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate({ Product, Warehouse }) {
    //each purchase entry belongs to one warehouse
    Owner_Purchase.belongsTo(Warehouse,{
      foreignKey:'warehouse_id',
      as:"warehouse"
    }),
    //each purchase entry belongs to one product
    Owner_Purchase.belongsTo(Product, {
      foreignKey:'product_id',
      as:"product"
    })
    //NOTE: THeres only one owner so we dont need the owner has many purchases or the owner id here
  }
  }
  Owner_Purchase.init({

    product_id: DataTypes.INTEGER,
    warehouse_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    product_price_at_the_time: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Owner_Purchase',
  });
  return Owner_Purchase;
};