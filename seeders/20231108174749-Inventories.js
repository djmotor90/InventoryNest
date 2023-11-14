'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Inventories', [
      {
        warehouse_id: 3,
        product_id: 1,
        minimum_stock_level: 9,
        current_stock_level: 44,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 2,
        minimum_stock_level: 7,
        current_stock_level: 76,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 3,
        minimum_stock_level: 6,
        current_stock_level: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 4,
        minimum_stock_level: 3,
        current_stock_level: 82,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 5,
        minimum_stock_level: 2,
        current_stock_level: 91,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 6,
        minimum_stock_level: 1,
        current_stock_level: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 7,
        minimum_stock_level: 5,
        current_stock_level: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 8,
        minimum_stock_level: 10,
        current_stock_level: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 9,
        minimum_stock_level: 8,
        current_stock_level: 69,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 10,
        minimum_stock_level: 4,
        current_stock_level: 72,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 11,
        minimum_stock_level: 7,
        current_stock_level: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 12,
        minimum_stock_level: 6,
        current_stock_level: 64,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 13,
        minimum_stock_level: 3,
        current_stock_level: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 14,
        minimum_stock_level: 2,
        current_stock_level: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 15,
        minimum_stock_level: 1,
        current_stock_level: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 16,
        minimum_stock_level: 5,
        current_stock_level: 93,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 17,
        minimum_stock_level: 10,
        current_stock_level: 88,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 18,
        minimum_stock_level: 8,
        current_stock_level: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 19,
        minimum_stock_level: 4,
        current_stock_level: 62,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 20,
        minimum_stock_level: 9,
        current_stock_level: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 21,
        minimum_stock_level: 7,
        current_stock_level: 71,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 22,
        minimum_stock_level: 6,
        current_stock_level: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 23,
        minimum_stock_level: 3,
        current_stock_level: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 24,
        minimum_stock_level: 2,
        current_stock_level: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 25,
        minimum_stock_level: 1,
        current_stock_level: 99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 26,
        minimum_stock_level: 5,
        current_stock_level: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 27,
        minimum_stock_level: 10,
        current_stock_level: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 28,
        minimum_stock_level: 8,
        current_stock_level: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 29,
        minimum_stock_level: 4,
        current_stock_level: 89,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 30,
        minimum_stock_level: 9,
        current_stock_level: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 31,
        minimum_stock_level: 7,
        current_stock_level: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 32,
        minimum_stock_level: 6,
        current_stock_level: 62,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 33,
        minimum_stock_level: 3,
        current_stock_level: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 34,
        minimum_stock_level: 2,
        current_stock_level: 76,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 35,
        minimum_stock_level: 1,
        current_stock_level: 82,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 36,
        minimum_stock_level: 5,
        current_stock_level: 59,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 37,
        minimum_stock_level: 10,
        current_stock_level: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 38,
        minimum_stock_level: 8,
        current_stock_level: 64,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 39,
        minimum_stock_level: 4,
        current_stock_level: 95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 40,
        minimum_stock_level: 9,
        current_stock_level: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 41,
        minimum_stock_level: 7,
        current_stock_level: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 42,
        minimum_stock_level: 6,
        current_stock_level: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 43,
        minimum_stock_level: 3,
        current_stock_level: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 44,
        minimum_stock_level: 2,
        current_stock_level: 77,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 45,
        minimum_stock_level: 1,
        current_stock_level: 83,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 46,
        minimum_stock_level: 5,
        current_stock_level: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 47,
        minimum_stock_level: 10,
        current_stock_level: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
        product_id: 48,
        minimum_stock_level: 8,
        current_stock_level: 61,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
        product_id: 49,
        minimum_stock_level: 4,
        current_stock_level: 97,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
        product_id: 50,
        minimum_stock_level: 9,
        current_stock_level: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
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
