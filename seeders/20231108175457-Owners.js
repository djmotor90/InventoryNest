'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Owners', [
      {
        owner_first_name: "John",
        owner_last_name: "Doe",
        starting_money: 100000,
        total_expenditures: 0,
        total_revenue: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed h"ere.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
