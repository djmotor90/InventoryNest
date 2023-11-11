'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      product_description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      product_category: {
        allowNull: false,
        type   : Sequelize.ENUM,
        values :['Electronics', 'Clothing', 'Furniture','Books','Toys', 'Kitchen Appliances', 'Beauty Products','Sports Equipment', 'Home Decor', 'Tools']
      },
      product_weight: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      product_provider_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      product_sale_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      product_picture_filename: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};