'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Inventories', [
      {
        warehouse_id: 3,
        minimum_stock_level: 9,
        current_stock_level: 44,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 7,
        current_stock_level: 76,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 6,
        current_stock_level: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 3,
        current_stock_level: 82,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 2,
        current_stock_level: 91,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 1,
        current_stock_level: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 5,
        current_stock_level: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

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

        minimum_stock_level: 4,
        current_stock_level: 72,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 7,
        current_stock_level: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 6,
        current_stock_level: 64,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
     
        minimum_stock_level: 3,
        current_stock_level: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
   
        minimum_stock_level: 2,
        current_stock_level: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
     
        minimum_stock_level: 1,
        current_stock_level: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 5,
        current_stock_level: 93,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 10,
        current_stock_level: 88,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
     
        minimum_stock_level: 8,
        current_stock_level: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
   
        minimum_stock_level: 4,
        current_stock_level: 62,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
    
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
 
        minimum_stock_level: 6,
        current_stock_level: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 3,
        current_stock_level: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 2,
        current_stock_level: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 1,
        current_stock_level: 99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 5,
        current_stock_level: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 10,
        current_stock_level: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 8,
        current_stock_level: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,
 
        minimum_stock_level: 4,
        current_stock_level: 89,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 9,
        current_stock_level: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 7,
        current_stock_level: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
     
        minimum_stock_level: 6,
        current_stock_level: 62,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 3,
        current_stock_level: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 2,
        current_stock_level: 76,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 1,
        current_stock_level: 82,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 5,
        current_stock_level: 59,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 10,
        current_stock_level: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 8,
        current_stock_level: 64,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,
  
        minimum_stock_level: 4,
        current_stock_level: 95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,
 
        minimum_stock_level: 9,
        current_stock_level: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 7,
        current_stock_level: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 6,
        current_stock_level: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 3,
        current_stock_level: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 2,
        current_stock_level: 77,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 1,
        current_stock_level: 83,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

        minimum_stock_level: 5,
        current_stock_level: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 10,
        current_stock_level: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 2,

        minimum_stock_level: 8,
        current_stock_level: 61,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 1,

        minimum_stock_level: 4,
        current_stock_level: 97,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        warehouse_id: 3,

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
