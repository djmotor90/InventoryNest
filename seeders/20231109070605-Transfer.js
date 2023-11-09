'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transfers', [
      {
        original_warehouse_id: 1,
        new_warehouse_id: 2,
        product_id: 1,
        transfer_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        original_warehouse_id: 1,
        new_warehouse_id: 2,
        product_id: 1,
        transfer_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        original_warehouse_id: 1,
        new_warehouse_id: 2,
        product_id: 2,
        transfer_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        original_warehouse_id: 2,
        new_warehouse_id: 1,
        product_id: 2,
        transfer_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        original_warehouse_id: 1,
        new_warehouse_id: 2,
        product_id: 3,
        transfer_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
