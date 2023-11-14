'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      customer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customer_last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      customer_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      customer_city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      customer_state: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['AK',
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
          ]
      },
      customer_zipcode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      customer_picture_filename: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  }
};