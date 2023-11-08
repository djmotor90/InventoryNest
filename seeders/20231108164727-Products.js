'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        product_name: "The Iliad",
        product_description: "Epic novel written by Homer, translated by Emily Wilson.",
        product_category: "Books" ,
        product_weight: 1.3,
        product_provider_price: 5.50,
        product_sale_price: 16.99,
        product_picture_filename: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "The Odyssey",
        product_description: "Epic novel written by Homer, translated by Ian McKellen.",
        product_category: "Books" ,
        product_weight: 1.7,
        product_provider_price: 2.50,
        product_sale_price: 10.99,
        product_picture_filename: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "The Plague ",
        product_description: "Novel written by Albert Camus",
        product_category: "Books" ,
        product_weight: 0.7,
        product_provider_price: 1.50,
        product_sale_price: 7.99,
        product_picture_filename: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
