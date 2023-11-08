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
    static associate(models) {
      // define association here
    }
  }
  Warehouse.init({
    warehouse_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    warehouse_name: DataTypes.STRING,
    warehouse_address: DataTypes.STRING,
    warehouse_city: DataTypes.STRING,
    product_category: {type: DataTypes.ENUM, values: ['AK',
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
    warehouse_zipcode: DataTypes.INTEGER,
    warehouse_capacity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};