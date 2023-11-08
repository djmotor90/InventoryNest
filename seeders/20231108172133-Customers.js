'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        customer_first_name: "Barack",
        customer_last_name: "Obama",
        customer_purchase_count: 0,
        customer_address: "5235 S Harper Ct Suite 1140",
        customer_city: "Chicago",
        customer_state: "IL",
        customer_zipcode: 60615,
        customer_picture_filename: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
