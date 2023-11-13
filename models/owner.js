'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Owner.init({
    owner_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    owner_first_name: DataTypes.STRING,
    owner_last_name: DataTypes.STRING,
    starting_money: DataTypes.FLOAT,
    total_expenditures: DataTypes.FLOAT,
    total_revenue: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};