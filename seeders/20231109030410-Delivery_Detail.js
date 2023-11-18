'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Delivery_Details', [
      {
        delivery_id: 1,
        product_id: 1,
        warehouse_id: 1,
        quantity: 3,
        total_price: 5.50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        delivery_id: 1,
        product_id: 2,
        warehouse_id: 1,
        quantity: 5,
        total_price: 6.50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
