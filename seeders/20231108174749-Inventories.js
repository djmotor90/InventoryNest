'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Inventories', [
      {
        warehouse_id: 1,
        product_id: 1,
        minimum_stock_level: 5,
        current_stock_level: 30,   
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouse_id: 2,
        product_id: 1,
        minimum_stock_level: 500,
        current_stock_level: 30,   
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouse_id: 1,
        product_id: 4,
        minimum_stock_level: 5,
        current_stock_level: 30,   
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouse_id: 1,
        product_id: 7,
        minimum_stock_level: 5,
        current_stock_level: 30,   
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouse_id: 2,
        product_id: 10,
        minimum_stock_level: 5,
        current_stock_level: 30,   
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
