'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        customer_first_name: "Barack",
        customer_last_name: "Obama",
        customer_purchase_count: 0,
        customer_address: "5235 S Harper Ct Suite 1140",
        customer_city: "Chicago",
        customer_state: "IL",
        customer_zipcode: 60615,
        customer_picture_filename: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       // Entry 1
    {
      customer_first_name: "Ethan",
      customer_last_name: "Martinez",
      customer_purchase_count: 0,
      customer_address: "4200 N Lamar Blvd",
      customer_city: "Austin",
      customer_state: "TX",
      customer_zipcode: 78756,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 2
  {
      customer_first_name: "Sophia",
      customer_last_name: "Lee",
      customer_purchase_count: 0,
      customer_address: "2100 Pacific Ave",
      customer_city: "San Francisco",
      customer_state: "CA",
      customer_zipcode: 94115,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 3
  {
      customer_first_name: "Olivia",
      customer_last_name: "Hernandez",
      customer_purchase_count: 0,
      customer_address: "3708 Las Vegas Blvd S",
      customer_city: "Las Vegas",
      customer_state: "NV",
      customer_zipcode: 89109,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 4
  {
      customer_first_name: "William",
      customer_last_name: "Anderson",
      customer_purchase_count: 0,
      customer_address: "1600 Exposition Blvd",
      customer_city: "Sacramento",
      customer_state: "CA",
      customer_zipcode: 95815,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 5
  {
      customer_first_name: "Isabella",
      customer_last_name: "Kim",
      customer_purchase_count: 0,
      customer_address: "401 Biscayne Blvd",
      customer_city: "Miami",
      customer_state: "FL",
      customer_zipcode: 33132,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 6
  {
      customer_first_name: "Jacob",
      customer_last_name: "Young",
      customer_purchase_count: 0,
      customer_address: "600 E Grand Ave",
      customer_city: "Chicago",
      customer_state: "IL",
      customer_zipcode: 60611,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 7
  {
      customer_first_name: "Emma",
      customer_last_name: "Wilson",
      customer_purchase_count: 0,
      customer_address: "2002 N Lois Ave",
      customer_city: "Tampa",
      customer_state: "FL",
      customer_zipcode: 33607,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 8
  {
      customer_first_name: "Daniel",
      customer_last_name: "Robinson",
      customer_purchase_count: 0,
      customer_address: "2901 S Capital of Texas Hwy",
      customer_city: "Austin",
      customer_state: "TX",
      customer_zipcode: 78746,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 9
  {
      customer_first_name: "Mia",
      customer_last_name: "Gonzalez",
      customer_purchase_count: 0,
      customer_address: "525 Arch St",
      customer_city: "Philadelphia",
      customer_state: "PA",
      customer_zipcode: 19106,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  // Entry 10
  {
      customer_first_name: "Alexander",
      customer_last_name: "Nguyen",
      customer_purchase_count: 0,
      customer_address: "1000 Chopper Cir",
      customer_city: "Denver",
      customer_state: "CO",
      customer_zipcode: 80204,
      customer_picture_filename: "",
      createdAt: new Date(),
      updatedAt: new Date()
  },
   // Entry 1
   {
    customer_first_name: "Charlotte",
    customer_last_name: "Clark",
    customer_purchase_count: 0,
    customer_address: "2121 7th Ave",
    customer_city: "Seattle",
    customer_state: "WA",
    customer_zipcode: 98121,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 2
{
    customer_first_name: "James",
    customer_last_name: "Mitchell",
    customer_purchase_count: 0,
    customer_address: "333 W Camden St",
    customer_city: "Baltimore",
    customer_state: "MD",
    customer_zipcode: 21201,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 3
{
    customer_first_name: "Ava",
    customer_last_name: "Rivera",
    customer_purchase_count: 0,
    customer_address: "401 Jefferson St",
    customer_city: "San Francisco",
    customer_state: "CA",
    customer_zipcode: 94109,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 4
{
    customer_first_name: "Mason",
    customer_last_name: "Morales",
    customer_purchase_count: 0,
    customer_address: "1000 Vin Scully Ave",
    customer_city: "Los Angeles",
    customer_state: "CA",
    customer_zipcode: 90012,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 5
{
    customer_first_name: "Harper",
    customer_last_name: "Reed",
    customer_purchase_count: 0,
    customer_address: "800 Occidental Ave S",
    customer_city: "Seattle",
    customer_state: "WA",
    customer_zipcode: 98134,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 6
{
    customer_first_name: "Evelyn",
    customer_last_name: "Cruz",
    customer_purchase_count: 0,
    customer_address: "1 Cardinals Dr",
    customer_city: "Glendale",
    customer_state: "AZ",
    customer_zipcode: 85305,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 7
{
    customer_first_name: "Henry",
    customer_last_name: "Ortiz",
    customer_purchase_count: 0,
    customer_address: "2700 Martin Luther King Jr Blvd",
    customer_city: "Eugene",
    customer_state: "OR",
    customer_zipcode: 97401,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 8
{
    customer_first_name: "Zoe",
    customer_last_name: "Gutierrez",
    customer_purchase_count: 0,
    customer_address: "1265 Lombardi Ave",
    customer_city: "Green Bay",
    customer_state: "WI",
    customer_zipcode: 54304,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 9
{
    customer_first_name: "Jack",
    customer_last_name: "Perez",
    customer_purchase_count: 0,
    customer_address: "700 Clark Ave",
    customer_city: "St. Louis",
    customer_state: "MO",
    customer_zipcode: 63102,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 10
{
    customer_first_name: "Lily",
    customer_last_name: "Ramirez",
    customer_purchase_count: 0,
    customer_address: "4 Pennsylvania Plaza",
    customer_city: "New York",
    customer_state: "NY",
    customer_zipcode: 10001,
    customer_picture_filename: "",
    createdAt: new Date(),
    updatedAt: new Date()
},
// Entry 1
{
  customer_first_name: "Evelyn",
  customer_last_name: "Powell",
  customer_purchase_count: 0,
  customer_address: "2620 E. Camelback Road",
  customer_city: "Phoenix",
  customer_state: "AZ",
  customer_zipcode: 85016,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 2
{
  customer_first_name: "Carter",
  customer_last_name: "Russell",
  customer_purchase_count: 0,
  customer_address: "900 E. Market Street",
  customer_city: "San Antonio",
  customer_state: "TX",
  customer_zipcode: 78205,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 3
{
  customer_first_name: "Madison",
  customer_last_name: "Wheeler",
  customer_purchase_count: 0,
  customer_address: "2400 E. Capitol Street SE",
  customer_city: "Washington",
  customer_state: "DC",
  customer_zipcode: 20003,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 4
{
  customer_first_name: "Layla",
  customer_last_name: "Sullivan",
  customer_purchase_count: 0,
  customer_address: "1 Titans Way",
  customer_city: "Nashville",
  customer_state: "TN",
  customer_zipcode: 37213,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 6
{
  customer_first_name: "Gabriel",
  customer_last_name: "Ramirez",
  customer_purchase_count: 0,
  customer_address: "1111 S Figueroa Street",
  customer_city: "Los Angeles",
  customer_state: "CA",
  customer_zipcode: 90015,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 7
{
  customer_first_name: "Zoey",
  customer_last_name: "Coleman",
  customer_purchase_count: 0,
  customer_address: "700 Clark Ave",
  customer_city: "St. Louis",
  customer_state: "MO",
  customer_zipcode: 63102,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 8
{
  customer_first_name: "Isaac",
  customer_last_name: "Perry",
  customer_purchase_count: 0,
  customer_address: "333 W Camden St",
  customer_city: "Baltimore",
  customer_state: "MD",
  customer_zipcode: 21201,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 9
{
  customer_first_name: "Lillian",
  customer_last_name: "Henderson",
  customer_purchase_count: 0,
  customer_address: "501 Crawford Street",
  customer_city: "Houston",
  customer_state: "TX",
  customer_zipcode: 77002,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 10
{
  customer_first_name: "Leo",
  customer_last_name: "Reynolds",
  customer_purchase_count: 0,
  customer_address: "1 AT&T Way",
  customer_city: "Arlington",
  customer_state: "TX",
  customer_zipcode: 76011,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 1
{
  customer_first_name: "Charlotte",
  customer_last_name: "Barnes",
  customer_purchase_count: 0,
  customer_address: "2000 Brush St",
  customer_city: "Detroit",
  customer_state: "MI",
  customer_zipcode: 48201,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 2
{
  customer_first_name: "Joseph",
  customer_last_name: "Murray",
  customer_purchase_count: 0,
  customer_address: "100 Joe Nuxhall Way",
  customer_city: "Cincinnati",
  customer_state: "OH",
  customer_zipcode: 45202,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 3
{
  customer_first_name: "Ava",
  customer_last_name: "Freeman",
  customer_purchase_count: 0,
  customer_address: "501 Marlins Way",
  customer_city: "Miami",
  customer_state: "FL",
  customer_zipcode: 33125,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 4
{
  customer_first_name: "Benjamin",
  customer_last_name: "Ellis",
  customer_purchase_count: 0,
  customer_address: "401 E Jefferson St",
  customer_city: "Phoenix",
  customer_state: "AZ",
  customer_zipcode: 85004,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 5
{
  customer_first_name: "Mia",
  customer_last_name: "Harper",
  customer_purchase_count: 0,
  customer_address: "123-01 Roosevelt Ave",
  customer_city: "New York",
  customer_state: "NY",
  customer_zipcode: 11368,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 6
{
  customer_first_name: "Lucas",
  customer_last_name: "Woods",
  customer_purchase_count: 0,
  customer_address: "755 Battery Ave SE",
  customer_city: "Atlanta",
  customer_state: "GA",
  customer_zipcode: 30339,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 7
{
  customer_first_name: "Amelia",
  customer_last_name: "Bishop",
  customer_purchase_count: 0,
  customer_address: "1060 W Addison St",
  customer_city: "Chicago",
  customer_state: "IL",
  customer_zipcode: 60613,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 8
{
  customer_first_name: "Ethan",
  customer_last_name: "Wright",
  customer_purchase_count: 0,
  customer_address: "7000 Coliseum Way",
  customer_city: "Oakland",
  customer_state: "CA",
  customer_zipcode: 94621,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 9
{
  customer_first_name: "Sophia",
  customer_last_name: "Rose",
  customer_purchase_count: 0,
  customer_address: "2700 E Independence Blvd",
  customer_city: "Charlotte",
  customer_state: "NC",
  customer_zipcode: 28205,
  customer_picture_filename: "",
  createdAt: new Date(),
  updatedAt: new Date()
},
// Entry 10
{
  customer_first_name: "Alexander",
  customer_last_name: "Long",
  customer_purchase_count: 0,
  customer_address: "1111 Vel R. Phillips Ave",
  customer_city: "Milwaukee",
  customer_state: "WI",
  customer_zipcode: 53203,
  customer_picture_filename: "",
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
