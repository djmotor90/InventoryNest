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
    customer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    customer_first_name: {type: DataTypes.STRING, allowNull: false},
    customer_last_name: {type: DataTypes.STRING, allowNull: false},
    customer_purchase_count: { type:DataTypes.INTEGER, allowNull: true},
    customer_address: { type: DataTypes.STRING, allowNull: false},
    customer_city: {type: DataTypes.STRING, allowNull: false},
    customer_state: {type: DataTypes.ENUM, allowNull: false, values: ['AK',
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
    customer_zipcode: {type: DataTypes.INTEGER, allowNull: false},
    customer_picture_filename: {type: DataTypes.STRING, allowNull: true}
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};