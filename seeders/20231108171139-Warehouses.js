'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Warehouses', [
      {
        warehouse_name: "University of Chicago Warehouse",
        warehouse_address: "5801 S Ellis Ave",
        warehouse_city: "Chicago",
        warehouse_state: "IL",
        warehouse_zipcode: 60637,
        warehouse_capacity: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouse_name: "Stanford Warehouse",
        warehouse_address: "450 Jane Stanford Way",
        warehouse_city: "Stanford",
        warehouse_state: "CA",
        warehouse_zipcode: 94305,
        warehouse_capacity: 50400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouse_name: "White House Warehouse",
        warehouse_address: "1600 Pennsylvania Avenue NW",
        warehouse_city: "Washington",
        warehouse_state: "DC",
        warehouse_zipcode: 20500,
        warehouse_capacity: 25600,
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
