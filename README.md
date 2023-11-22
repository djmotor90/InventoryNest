# InventoryNest

InventoryNest is a comprehensive inventory management system built with Node.js and Express, designed to streamline the process of inventory tracking, product management, and data analysis for warehouses and retail businesses.

## Features

- **Inventory Management:** Track and manage product inventory across multiple warehouses.
- **Sales Tracking:** Monitor sales data, including quantities sold and total revenue.
- **Distance Calculation:** Utilize geolocation data to calculate distances for efficient logistics.
- **AWS S3 Integration:** Seamlessly handle file uploads and storage with AWS S3.
- **Data Visualization:** Analyze sales and inventory data with built-in visualization tools.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repository:**
  
  ```bash
  git clone https://github.com/djmotor90/InventoryNest.git
  ```

2. **Navigate to the project directory:

  ```bash
  cd InventoryNest
  ```
3. **Install dependencies:

  ```bash
  npm install
  ```
4. **Set up environment variables:

Create a .env file in the root directory and add the necessary configurations (refer to .env.example for a template).

5. **Start the server:

  ```bash

  npm start
  ```

The server will start running on http://localhost:3001.

Usage
Here's a brief overview of how to use InventoryNest:

Navigate to http://localhost:3001 to view the landing page with warehouse and sales information.
Use the /products, /customers, /warehouses, and /reporting routes for specific functionalities.

## API Documentation

The InventoryNest API provides access to resources like products, customers, warehouses, deliveries, and more. Below is an overview of the available endpoints along with their methods and functionalities:

### Products

- **GET /products**
  - Description: Retrieve a list of all products.
  - Response: Array of product objects.

- **POST /products**
  - Description: Add a new product to the inventory.
  - Request Body: Product details (name, category, price, etc.).
  - Response: Details of the added product.

- **GET /products/:id**
  - Description: Get details of a specific product.
  - Response: Product object.

- **PUT /products/:id**
  - Description: Update details of a specific product.
  - Request Body: Updated product details.
  - Response: Updated product object.

- **DELETE /products/:id**
  - Description: Delete a specific product from the inventory.
  - Response: Confirmation message.

### Customers

- **GET /customers**
  - Description: Retrieve a list of all customers.
  - Response: Array of customer objects.

- **POST /customers**
  - Description: Add a new customer.
  - Request Body: Customer details.
  - Response: Details of the added customer.

- **GET /customers/:id**
  - Description: Get details of a specific customer.
  - Response: Customer object.

- **PUT /customers/:id**
  - Description: Update details of a specific customer.
  - Request Body: Updated customer details.
  - Response: Updated customer object.

### Warehouses

- **GET /warehouses**
  - Description: Retrieve a list of all warehouses.
  - Response: Array of warehouse objects.

- **POST /warehouses**
  - Description: Add a new warehouse.
  - Request Body: Warehouse details.
  - Response: Details of the added warehouse.

- **GET /warehouses/:id**
  - Description: Get details of a specific warehouse.
  - Response: Warehouse object.

### Deliveries

- **GET /deliveries**
  - Description: Retrieve a list of all deliveries.
  - Response: Array of delivery objects.

- **POST /deliveries**
  - Description: Record a new delivery.
  - Request Body: Delivery details.
  - Response: Details of the recorded delivery.

- **GET /deliveries/:id**
  - Description: Get details of a specific delivery.
  - Response: Delivery object.

### Reporting

- **GET /reporting/sales**
  - Description: Get sales reports.
  - Response: Sales data and analytics.

- **GET /reporting/stock-levels**
  - Description: Get current stock levels in warehouses.
  - Response: Stock level data.

