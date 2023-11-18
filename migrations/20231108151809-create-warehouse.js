'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Warehouses', {
      warehouse_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      warehouse_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      warehouse_description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      warehouse_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      warehouse_city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      warehouse_state: {
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
      warehouse_zipcode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      warehouse_capacity: {
        type: Sequelize.FLOAT
      },
      isSoftDeleted: {
        allowNull: true,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Warehouses');
  }
};