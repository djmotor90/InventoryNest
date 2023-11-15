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
    static associate(models) {
      //each purchase entry belongs to one warehouse
      Inventory.belongsTo(Warehouse,{
        foreignKey:'warehouse_id',
        as:"warehouse"
      }),
      //each purchase entry belongs to one product
      Inventory.belongsTo(Product, {
        foreignKey:'product_id',
        as:"product"
      }),
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