'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Delivery }) {
      // each customer has multiple deliveries
      Customer.hasMany(Delivery, {
        foreignKey:'customer_id',
        as:'deliveries'
      })
    }
  }
  Customer.init({
    customer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customer_first_name: DataTypes.STRING,
    customer_last_name: DataTypes.STRING,
    customer_purchase_count: DataTypes.INTEGER,
    customer_address: DataTypes.STRING,
    customer_city: DataTypes.STRING,
    customer_state: {type: DataTypes.ENUM, values: ['AK',
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
    customer_zipcode: DataTypes.INTEGER,
    customer_picture_filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};