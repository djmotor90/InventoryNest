'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Owners', {
      owner_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      owner_first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      owner_last_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      starting_money: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      total_expenditures: {
        type: Sequelize.FLOAT
      },
      total_revenue: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Owners');
  }
};