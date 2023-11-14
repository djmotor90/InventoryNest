'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Deliveries', [
      {
        customer_id: 1,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 2,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 3,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 4,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 5,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 6,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 7,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 8,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 9,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 10,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 11,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 12,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 13,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 14,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 15,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 16,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 17,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 18,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 19,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customer_id: 20,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
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
