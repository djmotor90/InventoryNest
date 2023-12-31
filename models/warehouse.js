'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Inventory, Transfer }) {
      //Every warehouse has multiple inventories
      Warehouse.hasMany(Inventory, {
        foreignKey:'warehouse_id',
        as:"inventories"
      }),
      //each warehouse has multiple transfers to
      Warehouse.hasMany(Transfer, {
        foreignKey:'new_warehouse_id',
        as:"transfers_to"
      }),
      //each warehouse has multiple transfers from
      Warehouse.hasMany(Transfer, {
        foreignKey:'original_warehouse_id',
        as:"transfers_from"
      })
    }
  }
  Warehouse.init({
    warehouse_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    warehouse_name: { type:DataTypes.STRING, allowNull:false},
    warehouse_description: { type: DataTypes.TEXT, allowNull:false}, //TODO eventually it would make sense to add this
    warehouse_address: {type: DataTypes.STRING, allowNull: false},
    warehouse_city: {type:DataTypes.STRING,allowNull:false},
    warehouse_state: {type: DataTypes.ENUM, allowNull: false, values: ['AK',
    'AL',
    'AR',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'MD',
    'ME',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NC',
    'NE',
    'NH',
    'NJ',
    'NM',
    'NV',
    'NY',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
    ]},
    warehouse_zipcode: { type: DataTypes.INTEGER, allowNull: false},
    warehouse_capacity: {type: DataTypes.FLOAT, allowNull: true},
    isSoftDeleted: {type: DataTypes.BOOLEAN, allowNull:true}
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};