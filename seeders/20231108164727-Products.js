'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
     
      {
        product_name: "Professional Locksmith Tool Set",
        product_description: "A 20-piece set including various picks and a transparent practice lock, ideal for locksmith training and hobbyists.",
        product_category: "Tools",
        product_weight: 1.2,
        product_provider_price: 12.99,
        product_sale_price: 29.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321189540773988/20Pcs-Locksmith-Tool-Set-Picking-Hand-Tools-Kit-Professional-Key-Simple-Lock-Durable-Multifunctional-Metal-Extractor-Pick-Transparent-Home_624487f4-dd7d-40ea-a797-ee09bbdb9b3c.d3a074bcaa764900bf0053c8cd8d8691.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "HART Socket Adapter Set",
        product_description: "A 3-piece socket adapter set from HART, including 1/4 inch, 3/8 inch, and 1/2 inch adapters, perfect for versatile socket arrangements.",
        product_category: "Tools",
        product_weight: 0.5,
        product_provider_price: 6.50,
        product_sale_price: 15.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321189981167696/HART-3-Piece-Socket-Adapter-Set-1-4-inch-3-8-inch-1-2-inch_57e28aad-3404-475b-b7b6-15525e7182be_2.b00608db163a4da30c06b151440df415.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Mobile Modular Toolbox System",
        product_description: "HART's 3-piece stack system mobile toolbox offers convenient storage and organization for a variety of tools.",
        product_category: "Tools",
        product_weight: 5.0,
        product_provider_price: 30.00,
        product_sale_price: 79.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321190375440384/HART-Stack-System-Mobile-Toolbox-for-Storage-and-Organization-3-Piece-Resin-Plastic-Modular-Toolbox-System_9ee7a7ab-fd62-4ac7-8d4b-d1679d743384.d55dadb3884b6c5058646ba705f75a96.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Pocket Screwdriver Set",
        product_description: "Hyper Tough's 2-piece pocket screwdriver set, featuring durable acetate handles, ideal for quick fixes and small projects.",
        product_category: "Tools",
        product_weight: 0.3,
        product_provider_price: 2.99,
        product_sale_price: 7.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321190845194240/Hyper-Tough-2-Piece-Acetate-Handle-Pocket-Screwdriver-Set_af48416d-59c0-4db2-af09-d6a1015744a3.eddc882b39e8e152c0e39115e110e13c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "5-in-1 Hammer and Screwdriver Set",
        product_description: "Hyper Tough's multi-functional tool featuring 4 screwdrivers and 1 hammer, a compact solution for household fixes.",
        product_category: "Tools",
        product_weight: 1.5,
        product_provider_price: 8.00,
        product_sale_price: 19.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321191218491444/Hyper-Tough-5-in-1-Hammer-and-Screwdriver-Set-4-Screwdrivers-and-1-Hammer_d929ec36-b61c-421a-9560-aa35b914da9d.e1cf4a110d907191bcf2d9f3f90c9c87.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Precision Screwdriver Set",
        product_description: "A 6-piece precision screwdriver set by Hyper Tough, ideal for intricate work with electronics and fine mechanics.",
        product_category: "Tools",
        product_weight: 0.4,
        product_provider_price: 4.99,
        product_sale_price: 12.99,
        product_picture_filename: "https://media.discordapp.net/attachments/1173312892754473031/1173321191696646218/Hyper-Tough-6-Piece-Precision-Philips-and-Slotted-Screwdriver-Set-TS80037R_281213c5-ef74-435f-939e-9b124db4fb66_2.4b95be8c60f08534f961e6f7723d774e.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Cordless Drill Driver",
        product_description: "Hyper Tough's 12V Max Lithium-Ion cordless drill driver, featuring a 3/8 inch chuck and 1.5Ah battery, suitable for various drilling tasks.",
        product_category: "Tools",
        product_weight: 1.8,
        product_provider_price: 20.00,
        product_sale_price: 49.99,
        product_picture_filename: "https://media.discordapp.net/attachments/1173312892754473031/1173321192254480504/Hyper-Tough-12V-Max-Lithium-Ion-Cordless-3-8-inch-Drill-Driver-with-1-5Ah-Battery-Holiday-Gifts-For-Dad-Model-99303_eac10afc-8c74-4ae5-92f3-95f87709b3c5.64287aef6bfe1f55c16f366552480a6e.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Stalwart Household Tool Kit",
        product_description: "A comprehensive 130-piece tool set from Stalwart, including hammers, wrenches, screwdrivers, and pliers, great for DIY projects.",
        product_category: "Tools",
        product_weight: 4.0,
        product_provider_price: 25.00,
        product_sale_price: 60.00,
        product_picture_filename: "https://media.discordapp.net/attachments/1173312892754473031/1173321193252733109/Stalwart-Household-Tool-Kit-130-Piece-Tool-Set-Includes-Hammer-Wrench-Set-Screwdriver-Pliers-and-More-Home-Tool-Kit-Great-for-DIY-Projects_6fa779c2-546a-4da3-b80e-a898b651b787.8f8041dce7d7b33e31cff6670c653df9.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "ValueMax Paint Roller Kit",
        product_description: "A 16-piece paint roller kit by ValueMax, made of durable steel and polyethylene, perfect for both professional and home use.",
        product_category: "Tools",
        product_weight: 2.2,
        product_provider_price: 15.00,
        product_sale_price: 35.00,
        product_picture_filename: "https://media.discordapp.com/attachments/1173312892754473031/1173321193902846002/ValueMax-Paint-Roller-Kit-16-Piece-Steel-Polyethylene_a23f096a-1230-46c6-a1fa-41391b672010.9ecd3de2b2a68e8a3de552252f01ab81.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Puffy Coat Santa Christmas Inflatable",
        product_description: "A 4.5 ft lighted Christmas inflatable depicting Santa in a puffy coat, perfect for seasonal lawn decoration.",
        product_category: "Home Decor",
        product_weight: 3.0,
        product_provider_price: 18.00,
        product_sale_price: 45.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320625541103646/4-5ft-Puffy-Coat-Santa-Lighted-Christmas-Inflatable-by-Seasonal-LLC_8429522c-3cf5-4d1f-a8ac-4cb0524d469d.936be503e05b49469b8981a700e6cd8b.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Zombie Hand Halloween Inflatable",
        product_description: "A colossal 13-foot-tall inflatable zombie hand, perfect for a spooky Halloween yard decoration.",
        product_category: "Home Decor",
        product_weight: 4.5,
        product_provider_price: 22.00,
        product_sale_price: 55.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320625939546204/13-Foot-Tall-Zombie-Hand-Colossal-for-Halloween-by-Airblown-Inflatables_2e11a299-39ef-45a0-8340-ee8f8b928fa3.96fa0389aaba4234d05a052787054f12.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Snow Flocked Christmas Pine Tree",
        product_description: "A 6ft pre-lit holiday Christmas pine tree with snow-flocked branches and 250 warm white lights.",
        product_category: "Home Decor",
        product_weight: 8.0,
        product_provider_price: 35.00,
        product_sale_price: 89.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320626325438585/Best-Choice-Products-6ft-Pre-Lit-Holiday-Christmas-Pine-Tree-w-Snow-Flocked-Branches-250-Warm-White-Lights_911244e1-9270-40b2-b825-24b0f1f9b372.cc8ba47b03c470bc424777173728c05d.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Wooden Christmas Advent Calendar",
        product_description: "A beautifully crafted wooden advent calendar with a shooting star design and LED light background.",
        product_category: "Home Decor",
        product_weight: 2.5,
        product_provider_price: 15.00,
        product_sale_price: 39.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320626933600347/Best-Choice-Products-Wooden-Christmas-Advent-Calendar-Shooting-Star-w-Battery-Operated-LED-Light-Background_e93b329c-6d46-4652-b63a-20a805b41e6e.eeac2886d1499aafe6d4d3dc692da9e8.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Chocolate Blackout Curtains",
        product_description: "Deconovo's chocolate-colored short blackout curtains, ideal for room darkening and thermal insulation.",
        product_category: "Home Decor",
        product_weight: 1.8,
        product_provider_price: 20.00,
        product_sale_price: 49.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320627294306335/Deconovo-Chocolate-Short-Blackout-Curtains-Kitchen-Grommet-Thermal-Insulated-Room-Darkening-Small-Window-52-x-45-inch-Chocolate-Set-2_373c48e8-ade7-4602-8e7c-e8d642155ac8.554013e45d11784b91b15ffc0dd59175.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Distressed Floral Area Rug",
        product_description: "Luxe Weavers Victoria 4620 distressed floral area rug in cream, size 2x3, perfect for adding elegance to any room.",
        product_category: "Home Decor",
        product_weight: 3.2,
        product_provider_price: 25.00,
        product_sale_price: 60.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320631383769168/Luxe-Weavers-Victoria-4620-Distressed-Floral-Area-Rug-Carpet-Cream-Size-2x3_1ce9bb52-c07c-41c2-92cb-d9b6cc742968.3e92204e1fe34efc951ae2bed1d5db89.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Modern Black Wood Finish Mirror",
        product_description: "A sleek 30-inch round wall mirror by Mainstays, featuring a modern black wood finish, ideal for contemporary interiors.",
        product_category: "Home Decor",
        product_weight: 4.5,
        product_provider_price: 18.00,
        product_sale_price: 45.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320631949987870/Mainstays-30-inch-Round-Wall-Mirror-Modern-Black-Wood-Finish_9866cb6f-60e0-47de-9f2b-15bc21a85e69.a7ed67056d693408358c0f52f548483e.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Rectangular Throw Pillow Inserts",
        product_description: "A pack of 4 Nestl throw pillow inserts, rectangle cushion size 12 x 18, perfect for home decor and comfort.",
        product_category: "Home Decor",
        product_weight: 2.0,
        product_provider_price: 12.00,
        product_sale_price: 30.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320632386191531/Nestl-Throw-Pillow-Inserts-Rectangle-Pillow-Cushion-Decorative-Pillow-Insert-12-x-18-Pack-of-4_c09e9af4-5dab-4818-b3f5-ad0bc1803bf2.cd5bee3316054830b2623991edc6d2bf.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Textured Grid Stretch Sofa Cover",
        product_description: "Subrtex's textured grid stretch sofa cover in navy, including a separate cushion cover for armchairs, combines style and protection.",
        product_category: "Home Decor",
        product_weight: 1.5,
        product_provider_price: 20.00,
        product_sale_price: 50.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320632805625889/Subrtex-Textured-Grid-Stretch-Sofa-Cover-Couch-Slipcover-with-Separate-Cushion-Cover-Navy-Armchair_73d02925-f537-49fe-aa32-78235cbced05.a95ac9dbf5963d84d3073d2292653897.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Round 'Happy Holidays' Hanging Sign",
        product_description: "The Pioneer Woman's round hanging sign with a 'Happy Holidays' theme, perfect for seasonal home decor.",
        product_category: "Home Decor",
        product_weight: 1.0,
        product_provider_price: 8.00,
        product_sale_price: 20.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320633472532671/The-Pioneer-Woman-Round-Hanging-Sign-Happy-Holidays_add07604-1fdc-42f4-b3d0-6132fffa846f.01e2cca27ea511308e4185e1ff7970c9.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Plush Cat Toy",
        product_description: "APHMAU plush cat S4, a cuddly and adorable soft toy, perfect for kids and cat lovers.",
        product_category: "Toys",
        product_weight: 0.5,
        product_provider_price: 7.00,
        product_sale_price: 18.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316203171807373/APHMAU-PLUSH-CAT-S4_15d6b476-6df2-4a56-9ec0-d8919fc398fa.af601940d861759999f7505aa40c791a.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Wooden Supermarket Playset",
        product_description: "Encourage imaginative play with this wooden supermarket set, complete with a chalkboard and cash register for a realistic experience.",
        product_category: "Toys",
        product_weight: 6.5,
        product_provider_price: 30.00,
        product_sale_price: 70.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316203729653861/Best-Choice-Products-Kids-Pretend-Play-Grocery-Store-Wooden-Supermarket-Set-w-Chalkboard-Cash-Register-Red_15f34992-ece3-4fd1-baaf-e6e15b0c743d.c638c69ddd5fb18e9b1fdf09febe727c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "G.I. Joe Action Figure",
        product_description: "A collector's edition G.I. Joe Classified Series action figure, featuring Night Force Parth with detailed accessories for action-packed play.",
        product_category: "Toys",
        product_weight: 1.2,
        product_provider_price: 15.00,
        product_sale_price: 35.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316204325261493/G-I-Joe-Classified-Series-Night-Force-Parth-Wolf-Spider-Varma-G-I-Joe-Action-Figure-6_79fa2ab8-ad6d-4862-b5e3-79d08d2ae501.307b811f431c181f0879395c3421a079.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Green Goblin Action Figure",
        product_description: "Hasbro's Marvel Legends Series Green Goblin deluxe action figure, a must-have for Marvel fans, with detailed articulation and accessories.",
        product_category: "Toys",
        product_weight: 1.5,
        product_provider_price: 20.00,
        product_sale_price: 45.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316204904054835/Hasbro-Marvel-Legends-Series-Green-Goblin-Deluxe-Marvel-Legends-Action-Figures-6_ca1838db-abae-47c2-ab21-68a260fc8ee4.fd09572be15ecf285b0933ec593d8c9b.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Batman Robo Command Center",
        product_description: "Imaginext's DC Super Friends Batman playset, featuring a Robo Command Center with a detachable 10-inch robot, ideal for interactive superhero play.",
        product_category: "Toys",
        product_weight: 3.0,
        product_provider_price: 25.00,
        product_sale_price: 60.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316205466095616/Imaginext-DC-Super-Friends-Batman-Playset-Robo-Command-Center-with-Detachable-10-inch-Robot_9b1da457-8974-450b-bed0-8b6698a3522d.53e0061672ff993d9332a1b6ad258ab6.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Gabby's Dollhouse Ship Spa Playset",
        product_description: "LEGO Gabby's Dollhouse building toy, featuring Gabby MerCat's Ship Spa, a delightful set with beauty salon accessories for imaginative play.",
        product_category: "Toys",
        product_weight: 2.2,
        product_provider_price: 18.00,
        product_sale_price: 44.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316206023954633/LEGO-Gabby-s-Dollhouse-Gabby-MerCat-s-Ship-Spa-10786-Building-Toy-Fans-DreamWorks-Animation-Series-Boat-Playset-Beauty-Salon-Accessories-Imaginative_56a94ca3-b660-4fd5-b294-5b1fe27f525d.5898bdc2286f3d142583dc68533e7d0f.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Story Dream Machine Starter Set",
        product_description: "The Little Tikes Story Dream Machine, a starter set for toddlers, stimulates creativity and storytelling with engaging interactive features.",
        product_category: "Toys",
        product_weight: 1.8,
        product_provider_price: 15.00,
        product_sale_price: 39.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316206527250482/Little-Tikes-Story-Dream-Machine-Starter-Set-for-Toddlers-and-Kids-Girls-Boys-Ages-3-Years_d2774c99-dfd2-4866-ab45-3425d3280e3f.8c4a2af600323fc152b420e1ecb05d31.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Magic Genie Lamp",
        product_description: "Magic Mixies Magic Genie Lamp with an interactive 8-inch Rainbow Magic Plush, a magical toy that brings imaginative play to life.",
        product_category: "Toys",
        product_weight: 1.1,
        product_provider_price: 12.00,
        product_sale_price: 29.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316206946685049/Magic-Mixies-Magic-Genie-Lamp-with-Interactive-8-inch-Rainbow-Magic-Plush-Ages-5_4234d48c-f90e-4c59-9dcb-bbbe44cd65d6.c487195aded3b24c42aa3ab6de2416ff.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Pixling Butterfly Doll",
        product_description: "Magic Mixies Pixlings, Flitta the Butterfly Pixling, a 6.5-inch doll inside a potion bottle, providing an enchanting play experience for kids.",
        product_category: "Toys",
        product_weight: 0.7,
        product_provider_price: 10.00,
        product_sale_price: 24.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316207370326087/Magic-Mixies-Pixlings-Flitta-the-Butterfly-Pixling-6-5-inch-Doll-Inside-a-Potion-Bottle-Ages-5_224f148a-e8e1-471c-a9f2-73940872213b.497d55c28d06bfba932163408bab44ae.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Retro Transformers Action Figure",
        product_description: "Relive the nostalgia with Transformers Toys Retro 40th Anniversary Autobot Blaster & Steeljaw, a must-have for collectors and fans.",
        product_category: "Toys",
        product_weight: 2.0,
        product_provider_price: 20.00,
        product_sale_price: 50.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312813561806871/1173316207852650526/Transformers-Toys-Retro-40th-Anniversary-Autobot-Blaster-Steeljaw-Action-Figures_c3878a8f-dbe5-49b2-b09c-59df60190020.f382b90bc379cb22148111ca03074748.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Burt's Bees Essential Gift Set",
        product_description: "A nourishing collection from Burt's Bees, including cleansing cream, hand salve, body lotion, foot cream, and lip balm, perfect for pampering.",
        product_category: "Beauty Products",
        product_weight: 1.0,
        product_provider_price: 9.99,
        product_sale_price: 24.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318570206310492/Burt-s-Bees-Essential-Gift-Set-Cleansing-Cream-Hand-Salve-Body-Lotion-Foot-Cream-Lip-Balm_c28e6165-6781-43d5-aa37-bd3f3ba330e2.ac6255a4140ef7bd5b5a2a8c523d74c9.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Coconut Oil Body Lotion",
        product_description: "Dr. Teal's Body Lotion, enriched with nourishing coconut oil and essential oils, offers deep moisture for all skin types.",
        product_category: "Beauty Products",
        product_weight: 1.2,
        product_provider_price: 6.50,
        product_sale_price: 15.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318570638311454/Dr-Teal-s-Body-Lotion-Moisture-Nourishing-with-Coconut-Oil-Essential-Oils-18-fl-oz_311bfe34-aedb-48fb-a619-73ff8ef48a2d.a94d4b7cf013f68ce8ce7bf20502830b.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Sleep Lotion with Melatonin",
        product_description: "Dr. Teal's soothing sleep lotion, infused with melatonin and essential oils, is designed to promote relaxation and a restful night.",
        product_category: "Beauty Products",
        product_weight: 0.8,
        product_provider_price: 8.00,
        product_sale_price: 20.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318571162611846/Dr-Teal-s-Body-Lotion-Sleep-Lotion-with-Melatonin-Essential-Oils-8-fl-oz_8d1523df-b4b7-4f1e-b60c-1dfcaab77e35.da954b9be28ca65150515e8d1c6431d8.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Vanilla Cashmere Body Lotion",
        product_description: "eos Shea Better Body Lotion in Vanilla Cashmere scent, offers a luxurious blend of shea butter and natural oils for silky smooth skin.",
        product_category: "Beauty Products",
        product_weight: 1.0,
        product_provider_price: 7.00,
        product_sale_price: 18.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318571628167309/eos-Shea-Better-Body-Lotion-for-Dry-Skin-Vanilla-Cashmere-16-fl-oz_2eb106e7-86e3-4d50-b607-a4794294f575.ad5931f1f674d74a1e4250303f1233fe.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Frizz Control Hair Serum",
        product_description: "Garnier Fructis's hair serum, formulated with Argan Oil, tames frizz and adds shine, making it ideal for unruly hair.",
        product_category: "Beauty Products",
        product_weight: 0.3,
        product_provider_price: 4.99,
        product_sale_price: 12.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318572219564163/Garnier-Fructis-Frizz-Control-Hair-Serum-with-Kera-System-Argan-Oil-5-1-fl-oz_bf55b86b-a2d7-44ce-bbaa-57df2189646e.ff50b329aac11580ef38478427d5b4b8.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Collagen Day and Night Cream",
        product_description: "L'Oreal Paris's Collagen Moisture Filler cream, a luxurious day and night formula that provides deep hydration and reduces fine lines.",
        product_category: "Beauty Products",
        product_weight: 1.7,
        product_provider_price: 14.00,
        product_sale_price: 35.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318572873887766/L-Oreal-Paris-Collagen-Moisture-Filler-Day-Night-Cream-1-7-oz_90282814-166e-4318-a9de-23723b0d8822.6071e8f8a5b2072d6b39bdd855fe3a9a.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Revitalift Moisturizer Pack",
        product_description: "A duo pack of L'Oreal Paris Revitalift moisturizers, designed to rejuvenate skin day and night with its unique anti-aging formula.",
        product_category: "Beauty Products",
        product_weight: 3.4,
        product_provider_price: 22.00,
        product_sale_price: 55.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318573649821898/L-Oreal-Paris-Revitalift-Day-and-Night-Moisturizer-1-7-oz-2-Pack_4fb80245-ffb6-481f-aeda-01417149e84b.a5968bb90cacbb93e3a2f432b8228fe8.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Firming Night Cream",
        product_description: "Olay's Night of Olay firming night cream offers a rich, nourishing formula that works overnight to reduce fine lines and wrinkles.",
        product_category: "Beauty Products",
        product_weight: 1.9,
        product_provider_price: 10.00,
        product_sale_price: 24.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318573905686678/Olay-Night-of-Olay-Firming-Night-Cream-Face-Moisturizer-Reduces-Fine-Lines-Wrinkles-for-All-Skin-Types-1-9-oz_1196b0a6-859c-4c17-9a00-fa34f0f7f358_1.e1fb92d6b997e9964c4a31654b31acb1.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Pure Petroleum Jelly",
        product_description: "Vaseline's 100% pure petroleum jelly, an original skin protectant that locks in moisture and heals dry skin, suitable for all skin types.",
        product_category: "Beauty Products",
        product_weight: 1.75,
        product_provider_price: 3.00,
        product_sale_price: 8.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312844561924367/1173318574404796476/Vaseline-100-Pure-Petroleum-Jelly-Original-Vaseline-1-75-oz_f893a109-b5d1-4573-9964-363b6054e9ef.7f69cd9e05b0e4271ac593ef9ad02d05.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Slow Cooker Set",
        product_description: "A set of two 2-quart slow cookers by Drew Barrymore in White Icing and Merlot, perfect for preparing delicious meals with ease.",
        product_category: "Kitchen Appliances",
        product_weight: 12.0,
        product_provider_price: 35.00,
        product_sale_price: 79.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316889167020052/Beautiful-2-qt-Slow-Cooker-Set-2-Pack-White-Icing-and-Merlot-by-Drew-Barrymore-19340-100-W_ab2258a0-b8b0-4cb1-8c05-dc22d07c681e.7325ea33dc6876d3acf6efa209dccbd5.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Immersion Blender",
        product_description: "Drew Barrymore's Beautiful 2-Speed Immersion Blender in White Icing, including a chopper and measuring cup for versatile kitchen use.",
        product_category: "Kitchen Appliances",
        product_weight: 3.5,
        product_provider_price: 22.00,
        product_sale_price: 55.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316889594830909/Beautiful-2-Speed-Immersion-Blender-with-Chopper-Measuring-Cup-White-Icing-by-Drew-Barrymore_7e124889-feac-4127-ac0b-f4986cae333e.bfc154e4f581f30ad49b4140b72e1f13.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Electric Skillet",
        product_description: "A versatile 5-in-1 electric skillet by Drew Barrymore, expandable up to 7 Qt, perfect for frying, baking, and more.",
        product_category: "Kitchen Appliances",
        product_weight: 10.0,
        product_provider_price: 40.00,
        product_sale_price: 99.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316890127507477/Beautiful-5-in-1-Electric-Skillet-Expandable-up-to-7-Qt-with-Glass-Lid-White-Icing-by-Drew-Barrymore_4b6d28e6-949c-4951-876a-51ba1273549d.6fc8ebdeb83c4537e8135f28c54fb209.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Classic Slow Cooker",
        product_description: "Crockpot's 4-Quart Classic Slow Cooker in Black, ideal for preparing hearty meals for the whole family.",
        product_category: "Kitchen Appliances",
        product_weight: 9.0,
        product_provider_price: 20.00,
        product_sale_price: 50.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316890702131300/Crockpot-4-Quart-Classic-Slow-Cooker-Black_a088127f-fd69-4ff4-a181-c6c7255b2bfa.cb543183ed0cb32011fc17112a4f3f5d.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Electric Can Opener",
        product_description: "Farberware's sleek Electric Can Opener in Black, combining style and functionality for easy kitchen use.",
        product_category: "Kitchen Appliances",
        product_weight: 2.5,
        product_provider_price: 10.00,
        product_sale_price: 25.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316891138334840/Farberware-Electric-Can-Opener-Black_d70b111d-ff4e-4aad-b523-89cab0b5b881.8bc287cfbc50d283e0754b781596652d.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Indoor Grill and Panini Press",
        product_description: "George Foreman's Electric Indoor Grill and Panini Press, featuring copper plates, perfect for healthy grilling and delicious sandwiches.",
        product_category: "Kitchen Appliances",
        product_weight: 5.5,
        product_provider_price: 25.00,
        product_sale_price: 59.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316891809431693/George-Foreman-Electric-Indoor-Grill-and-Panini-Press-Black-with-Copper-Plates-Serves-2-Classic-Plate-GRS040-Series_5d460f33-a568-42fb-b198-75811472a3a4.ea2a099626295103d826936a1fe3b53c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Nonstick Electric Skillet",
        product_description: "Mainstays' 12-inch Round Nonstick Electric Skillet with Glass Cover, in Black, for easy and versatile cooking.",
        product_category: "Kitchen Appliances",
        product_weight: 6.0,
        product_provider_price: 18.00,
        product_sale_price: 45.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316892333711470/Mainstays-12-Round-Nonstick-Electric-Skillet-with-Glass-Cover-Black_f8e2f1b3-e911-4f40-a300-ae3494be04b2_2.824154f845097fd32e48d4c74359c656.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Dishwasher Safe Griddle",
        product_description: "Mainstays' 20-inch Black Griddle, featuring adjustable temperature control and dishwasher-safe design for convenient cooking.",
        product_category: "Kitchen Appliances",
        product_weight: 8.2,
        product_provider_price: 22.00,
        product_sale_price: 55.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316892967059537/Mainstays-Dishwasher-Safe-20-Black-Griddle-with-Adjustable-Temperature-Control_7d0f7fa2-3e57-4048-9bcd-d017bc4bb0ca_1.998dfb0876160e8fa3e38d74acd2d37c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Non-stick Cookware Set",
        product_description: "Tramontina's Primaware 18-Piece Non-stick Cookware Set in Steel Gray, offering a complete solution for various cooking needs.",
        product_category: "Kitchen Appliances",
        product_weight: 15.0,
        product_provider_price: 40.00,
        product_sale_price: 100.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312827591766076/1173316893621362819/Tramontina-Primaware-18-Piece-Non-stick-Cookware-Set-Steel-Gray_f3d026d4-c9d0-41ea-960b-f1fbd9532083.76a2d6175c2e5ac45e4882e3a165c42e.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Core Knit Pants",
        product_description: "Athletic Works Women's Athleisure Core Knit Pants, available in regular and petite sizes, combining comfort and style for everyday wear.",
        product_category: "Cloth",
        product_weight: 1.0,
        product_provider_price: 8.00,
        product_sale_price: 19.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315177547051059/Athletic-Works-Women-s-Athleisure-Core-Knit-Pants-Available-in-Regular-and-Petite_a5081154-84fe-4ca7-badf-da84f72cf5ed.9095a92c6cfd505ee44897f3dffca876.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Dri-Fit Long Sleeve T-Shirts",
        product_description: "DARESAY's moisture-wicking, quick-dry long sleeve tees, a 4-pack set in various colors, offering comfort and style for active men.",
        product_category: "Cloth",
        product_weight: 2.0,
        product_provider_price: 18.00,
        product_sale_price: 40.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315177878397049/DARESAY-Dri-Fit-Long-Sleeve-T-Shirts-for-Men-4-Pack-Moisture-Wicking-Quick-Dry-Tees-Up-to-3XL_269fe623-ce1c-4daf-beae-05f800a7323d.58bec0021b5f5ce7dac3b98b7dd4a873.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Men's Sleep Pants",
        product_description: "George's comfortable men's sleep pants, available in various sizes, perfect for lounging and a good night's sleep.",
        product_category: "Cloth",
        product_weight: 1.5,
        product_provider_price: 9.99,
        product_sale_price: 24.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315178197155922/George-Men-s-Sleep-Pants-Sizes-S-2XL_cf1005ee-7f88-4973-9943-4ed5c1dc1d09.ba7a9fada8bc46ae83816bb85c73b9e1.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Ultra Cotton Long Sleeve T-Shirt",
        product_description: "Gildan's Ultra Cotton Long Sleeve T-Shirt, offering durability and comfort, ideal for casual wear or as a layering piece.",
        product_category: "Cloth",
        product_weight: 1.0,
        product_provider_price: 6.00,
        product_sale_price: 15.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315178599821352/Gildan-Men-s-Ultra-Cotton-Long-Sleeve-T-Shirt_18b324c1-d274-4b7a-8913-569cbac9db99_1.d8e357f908c2ac3a1935b20a30231f53.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Heavy Blend Fleece Hooded Sweatshirt",
        product_description: "Gildan's unisex Heavy Blend Fleece Hooded Sweatshirt, combining warmth and style, suitable for all casual occasions.",
        product_category: "Cloth",
        product_weight: 1.8,
        product_provider_price: 12.00,
        product_sale_price: 30.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315179094745381/Gildan-Unisex-Heavy-Blend-Fleece-Hooded-Sweatshirt_a055a693-2734-4b7a-90d9-77e641fb3d3f_1.35e1d510ab08a64a521474d1faa1ea24.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Compression Base Layer Tank Top",
        product_description: "NELEUS Women's Compression Base Layer Dry Fit Tank Top, a 3-pack set in black, gray, white, offering both support and style.",
        product_category: "Cloth",
        product_weight: 1.2,
        product_provider_price: 15.00,
        product_sale_price: 35.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315179551916183/NELEUS-Womens-Compression-Base-Layer-Dry-Fit-Tank-Top-3-Pack-Black-Gray-White-US-Size-XL_e800c9e3-f17f-42dc-902e-73cee9e63807.22c8e3c2c64a4dd3c34f83e177407f32.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "High-Low Pullover Sweatshirt",
        product_description: "Time and Tru's High-Low Pullover Sweatshirt for women, available in various sizes, combines comfort and trendy design for everyday wear.",
        product_category: "Cloth",
        product_weight: 1.3,
        product_provider_price: 10.00,
        product_sale_price: 25.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315179929415700/Time-and-Tru-Women-s-High-Low-Pullover-Sweatshirt-Sizes-S-3XL_1b33f858-b6ef-41d3-a6b3-4556ace6f1bf.31050e185d1ca8889df436d8040eb173.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Girls' Short Sleeve Play Dress",
        product_description: "Wonder Nation's 3-pack of girls' short sleeve play dresses, sizes 4-18 Plus, featuring vibrant colors and playful designs for daily wear.",
        product_category: "Cloth",
        product_weight: 1.5,
        product_provider_price: 15.00,
        product_sale_price: 35.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315180642435182/Wonder-Nation-Girls-Short-Sleeve-Play-Dress-3-Pack-Sizes-4-18-Plus_45981a90-d3a3-46a4-b564-cea700438e1a.abc60659b4cf3babc33c8da1a0b311c0.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Relaxed Fit Cargo Pants",
        product_description: "Wrangler's Relaxed Fit Cargo Pants for men, offering both comfort and practicality, suitable for work or casual outings.",
        product_category: "Cloth",
        product_weight: 2.0,
        product_provider_price: 18.00,
        product_sale_price: 45.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315181049294988/Wrangler-Men-s-and-Big-Men-s-Relaxed-Fit-Cargo-Pants-With-Stretch_df3a725f-7384-4942-b262-10fe413914d6_1.4305f90dd2e7aacb548928420cead955.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Relaxed Fit Jeans with Flex",
        product_description: "Wrangler's Relaxed Fit Jeans for men, integrating flex for comfort, ideal for everyday wear with a classic and rugged style.",
        product_category: "Cloth",
        product_weight: 2.2,
        product_provider_price: 20.00,
        product_sale_price: 50.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312783358631966/1173315181519052800/Wrangler-Men-s-and-Big-Men-s-Relaxed-Fit-Jeans-with-Flex_0f3657ca-398f-4594-94b7-81543c464067.96aadc21df64cc18589e2d6321c0104a.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "HP Pentium Laptop",
        product_description: "HP's 15.6-inch Pentium Laptop in Scarlet Red, featuring 4GB RAM and 128GB storage, ideal for everyday computing needs.",
        product_category: "Electronics",
        product_weight: 4.5,
        product_provider_price: 200.00,
        product_sale_price: 450.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314650331431093/HP-15-6-Pentium-4GB-128GB-Laptop-Scarlet-Red_fb7a3275-2b04-4757-94d4-cca778dfe610_1.130d8cd7964d00f215a80ab6a614f388.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Lenovo Ideapad 1",
        product_description: "The Lenovo Ideapad 1, a 15.6-inch FHD laptop with AMD R3, 8GB RAM, and 256GB SSD, combines performance with portability.",
        product_category: "Electronics",
        product_weight: 5.0,
        product_provider_price: 300.00,
        product_sale_price: 600.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314650771816608/Lenovo-Ideapad-1-15-6-FHD-Laptop-AMD-R3-7320U-8GB-RAM-256GB-SSD-Blue-Windows-11-82VG00BJUS_f5b5e169-c871-48ed-96dc-87f359bc232f.fcd32791a09e8d0617df9300bca9655c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Lenovo Gaming Laptop",
        product_description: "Lenovo Ideapad Gaming 3, a high-performance 15.6-inch FHD gaming laptop with AMD Ryzen 5, 8GB RAM, and NVIDIA GeForce RTX 2050.",
        product_category: "Electronics",
        product_weight: 6.5,
        product_provider_price: 550.00,
        product_sale_price: 1100.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314651136737481/Lenovo-Ideapad-Gaming-3-15-6-FHD-120Hz-Gaming-Laptop-AMD-Ryzen-5-7535HS-8GB-RAM-512GB-SSD-NVIDIA-GeForce-RTX-2050-4GB_03b3ceed-69a2-463c-bc8e-fe356a388740.580426bc492a1f608acf45f4f56062a6.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "MSI GE Series Laptop",
        product_description: "MSI's GE Series 17.3-inch laptop, featuring a 144Hz IPS display, Intel Core i7, NVIDIA GeForce RTX 3060, and 16GB DDR5 memory, for top-tier gaming.",
        product_category: "Electronics",
        product_weight: 8.0,
        product_provider_price: 1000.00,
        product_sale_price: 2000.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314651749097552/MSI-GE-Series-17-3-144-Hz-IPS-Intel-Core-i7-12th-Gen-12700H-2-30GHz-NVIDIA-GeForce-RTX-3060-Laptop-GPU-16-GB-DDR5-1-TB-NVMe-SSD-Windows-11-Home-64-bi_1b276f05-dbf4-4f2f-a90a-b73df389fc6c.5925ad60be983f7e2b43cf23242fde68.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "MSI Modern Laptop",
        product_description: "The MSI Modern 14, an ultra-thin and light laptop powered by AMD Ryzen 7, featuring UMA graphics, 16GB RAM, and a 512GB NVMe SSD.",
        product_category: "Electronics",
        product_weight: 3.7,
        product_provider_price: 700.00,
        product_sale_price: 1400.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314652072067072/MSI-Modern-14-14-Ultra-Thin-and-Light-Laptop-AMD-Ryzen-7-7730U-UMA-16GB-512GB-NVMe-SSD-Win-11-home-C7M-048US_750e37aa-972d-4917-b9a2-701b06321fa9.a18689fa51bdc695c9e2ed2e3876d81f.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Restored MacBook Air",
        product_description: "A restored Apple 13.3-inch MacBook Air, featuring Intel Core i5, 4GB RAM, and macOS with a 128GB SSD, bundled with wireless accessories.",
        product_category: "Electronics",
        product_weight: 3.0,
        product_provider_price: 350.00,
        product_sale_price: 700.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314652504072314/Restored-Apple-13-3-inch-MacBook-Air-Intel-Core-i5-4GB-RAM-Mac-OS-128GB-SSD-Bundle-Black-Case-Wireless-Mouse-Bluetooth-Wireless-Airbuds-By-Certified_318d26a4-5a6d-437f-9250-912b32b9673e.00f2939907891d2fb9dc80ffe4c2e81c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "SGIN Laptop",
        product_description: "SGIN's 15.6-inch laptop, equipped with 4GB DDR4 RAM and a 128GB SSD, powered by an Intel Celeron processor, offers full HD resolution.",
        product_category: "Electronics",
        product_weight: 4.3,
        product_provider_price: 150.00,
        product_sale_price: 300.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314652923510854/SGIN-15-6inch-Laptop-4GB-DDR4-128GB-SSD-Windows-11-with-4-Core-Intel-Celeron-Full-HD-1920x1080_5ef57c1c-eb19-4975-a8f5-468530ca131a.2237d30635f2d0b3ab76518bf69ccb2d.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "KUU Laptop",
        product_description: "The KUU 15.6-inch laptop, featuring an Intel Celeron N5095 processor, 16GB RAM, 512GB SSD, and Windows 11 Pro, with a backlit keyboard.",
        product_category: "Electronics",
        product_weight: 5.2,
        product_provider_price: 300.00,
        product_sale_price: 600.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314684330442792/15-6-KUU-Laptop-Intel-Celeron-N5095-16GB-RAM-512GB-SSD-Win-11-Pro-Backlit-Keyboard-Wifi-Bluetooth_c7bd1af3-c103-4d73-a9fd-5835fe0ff76a.d11041860b24a9e288796b8c2dcdce1a.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Acer Chromebook 315",
        product_description: "The Acer Chromebook 315, featuring a 15.6-inch HD display, Intel Celeron N4020 processor, 4GB RAM, and 64GB eMMC, offers reliable performance for everyday tasks.",
        product_category: "Electronics",
        product_weight: 4.19,
        product_provider_price: 150.00,
        product_sale_price: 299.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314685756506152/Acer-Chromebook-315-2019-15-6-HD-Intel-Celeron-N4020-4GB-RAM-64GB-eMMC-Silver-CB315-3H-C19A_05373b67-c03b-4ca1-9dfc-a7e42b4dce5b.f9cfbfc82be7b9bcdac035f2897e80d4.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Apple AirPods (2nd Generation)",
        product_description: "Experience wireless freedom and exceptional sound quality with Apple AirPods (2nd Generation), featuring a convenient charging case.",
        product_category: "Electronics",
        product_weight: 0.14,
        product_provider_price: 99.00,
        product_sale_price: 199.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314686440181830/Apple-AirPods-with-Charging-Case-2nd-Generation_ac793ff4-d3da-4cbe-beba-f956e7494490_1.5bae15688eb0aafd22a99d01a072f9db.webp638174&is=65510c74&hm=f64b0e95d41d32b0b522bef55dbf1d3cb51668be9be62ab0a374ad67d6637670&",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Beats Studio Buds",
        product_description: "Beats Studio Buds, true wireless noise-cancelling earbuds in black, offering premium sound quality and seamless connectivity.",
        product_category: "Electronics",
        product_weight: 0.2,
        product_provider_price: 120.00,
        product_sale_price: 249.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314686930919474/Beats-Studio-Buds-True-Wireless-Noise-Cancelling-Bluetooth-Earbuds-Black_778af350-1012-4500-95c0-7e57fdca147e.9949c90efdc7e826e386251541b47515.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "HP FHD Laptop",
        product_description: "HP's 15.6-inch FHD laptop with Intel Core i5, 8GB RAM, and 256GB SSD, in silver, offers a blend of performance and style for professionals and students alike.",
        product_category: "Electronics",
        product_weight: 4.8,
        product_provider_price: 400.00,
        product_sale_price: 800.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312740304105492/1173314687438422128/HP-15-6-FHD-Laptop-Intel-Core-i5-1135G7-8GB-RAM-256GB-SSD-Silver-Windows-11-Home-15-dy2795wm_3aa79615-29ab-4859-8348-9bd71971f50d.bcbf2f92accb13e86d12b2c9734c2320.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Patio Rattan Furniture Set",
        product_description: "Costway's 4-piece patio rattan furniture set, featuring a conversation glass table top and cushioned sofa, adds a touch of elegance to outdoor gatherings.",
        product_category: "Furniture",
        product_weight: 70.0,
        product_provider_price: 200.00,
        product_sale_price: 499.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332397614444554/Costway-4PCS-Patio-Rattan-Furniture-Set-Conversation-Glass-Table-Top-Cushioned-Sofa-Outdoor-Turquoise_5dd5fec9-ed75-4dd7-b6bd-d0277df70875.804f5cdaf2d81432c1eb7e6f0a52cd8a.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Modern Faux Leather Futon",
        product_description: "Easyfashion's Modern Faux Leather Futon, in black, features cupholders and pillows, providing a sleek, versatile seating and sleeping solution.",
        product_category: "Furniture",
        product_weight: 70.5,
        product_provider_price: 150.00,
        product_sale_price: 300.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332397954187274/Easyfashion-Modern-Faux-Leather-Futon-with-Cupholders-and-Pillows-Black_3a911a72-c863-472e-8301-69c451afa80c.d0103e055aa3e4b18648202e7aa9b84a.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "6-Cube Storage Organizer",
        product_description: "Mainstays' 6-Cube Storage Organizer in White, a versatile and stylish solution for decluttering any room in your home.",
        product_category: "Furniture",
        product_weight: 35.0,
        product_provider_price: 50.00,
        product_sale_price: 100.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332398440722533/Mainstays-6-Cube-Storage-Organizer-White_c8d0c0cc-2f7d-492e-abb1-cb9f03480564.6e9686cce1aee0d722794852fa2be780.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Classic 5-Drawer Dresser",
        product_description: "Mainstays' Classic 5-Drawer Dresser in Black Oak, offers ample storage with a sleek design, suitable for any modern bedroom.",
        product_category: "Furniture",
        product_weight: 80.0,
        product_provider_price: 100.00,
        product_sale_price: 200.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332398906277898/Mainstays-Classic-5-Drawer-Dresser-Black-Oak_c5ac97f7-8b81-4d2e-ad41-4b6aed1d1a8f.3f1a37dc0a8ee762713ddd676302f5e5.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "6-Drawer Dresser",
        product_description: "Upgrade your bedroom's storage with Mainstays' Classic 6-Drawer Dresser in Black Oak, combining functionality with a timeless design.",
        product_category: "Furniture",
        product_weight: 95.0,
        product_provider_price: 120.00,
        product_sale_price: 240.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332399531245608/Mainstays-Classic-6-Drawer-Dresser-Black-Oak_88ddbb94-d566-4cf0-99fa-a441c6786e7f.3a6fa2dc25f527c674a798b353f8dd4a.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Memory Foam Futon",
        product_description: "Mainstays Memory Foam Futon in Black Faux Suede, a versatile piece that seamlessly transitions from a sofa to a comfortable sleeper.",
        product_category: "Furniture",
        product_weight: 65.0,
        product_provider_price: 99.00,
        product_sale_price: 199.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332400374296586/Mainstays-Memory-Foam-Futon-Black-Faux-Suede_630e3b02-55d2-4958-b75f-d640bdf26476.c54b41d458cf89d2f92df908e9717f02.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Ergonomic Office Chair",
        product_description: "Vitesse Home Office Chair, designed for long hours of comfort, features an ergonomic high-back cushion and lumbar support, tailored for the modern workspace.",
        product_category: "Furniture",
        product_weight: 55.0,
        product_provider_price: 120.00,
        product_sale_price: 250.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332401171202109/Vitesse-Home-Office-Chair-Big-Tall-Chair-8-Hours-Heavy-Duty-Design-Ergonomic-High-Back-Cushion-Lumbar-Support-Computer-Desk-Adjustable-Executive-Leat_1fd49402-cb0f-4615-8c19-7f743a4e7d1e.4622a238a5c77ffd9ed3b6091fa50bf1.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "4-Drawer Wood Dresser",
        product_description: "Elegant and functional, this 4-Drawer Wood Dresser offers ample storage space and a classic design, making it a perfect fit for any bedroom.",
        product_category: "Furniture",
        product_weight: 60.0,
        product_provider_price: 80.00,
        product_sale_price: 160.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332401607426108/White-4-Drawer-Wood-Dressers-for-Bedroom_d03cb6c9-65e2-47a1-aed6-2683e5fbb3c0.90bd18b381bef1a55b2d86daef4055c0.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Modern Farmhouse TV Stand",
        product_description: "Woven Paths Modern Farmhouse Barn Door TV Stand, designed for TVs up to 65 inches, combines rustic charm with functional storage, ideal for any living space.",
        product_category: "Furniture",
        product_weight: 85.0,
        product_provider_price: 150.00,
        product_sale_price: 300.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332401972326481/Woven-Paths-Modern-Farmhouse-Barn-Door-TV-Stand-for-TVs-up-to-65-Grey-Wash_1bc49f31-6819-406a-8c5e-5317a37ce633.f7564e012ae8c38f9ef2fd448ce662fd.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "8-Drawer Storage Dresser",
        product_description: "YITAHOME's 8-Drawer Dresser offers a high-storage tower furniture solution, blending sleek black and gray tones for a contemporary look in any bedroom.",
        product_category: "Furniture",
        product_weight: 50.0,
        product_provider_price: 99.00,
        product_sale_price: 199.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173331996274077696/1173332402454659072/YITAHOME-8-Drawers-Dresser-Bedroom-Bins-Organizer-High-Storage-Tower-Furniture-Black-Gray_b8054721-77e3-4dc1-abf8-b29756900951.0056a467394c9700223cbfe4ed150aa9.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Locksmith Tool Set",
        product_description: "A 20-piece professional locksmith tool set, including various picks and a transparent lock, designed for both beginners and experts in lock picking.",
        product_category: "Tools",
        product_weight: 2.0,
        product_provider_price: 15.00,
        product_sale_price: 35.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321189540773988/20Pcs-Locksmith-Tool-Set-Picking-Hand-Tools-Kit-Professional-Key-Simple-Lock-Durable-Multifunctional-Metal-Extractor-Pick-Transparent-Home_624487f4-dd7d-40ea-a797-ee09bbdb9b3c.d3a074bcaa764900bf0053c8cd8d8691.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Socket Adapter Set",
        product_description: "HART's 3-piece socket adapter set, including 1/4-inch, 3/8-inch, and 1/2-inch sizes, made of durable metal for high-performance in mechanical tasks.",
        product_category: "Tools",
        product_weight: 0.5,
        product_provider_price: 8.00,
        product_sale_price: 18.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321189981167696/HART-3-Piece-Socket-Adapter-Set-1-4-inch-3-8-inch-1-2-inch_57e28aad-3404-475b-b7b6-15525e7182be_2.b00608db163a4da30c06b151440df415.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Mobile Toolbox System",
        product_description: "HART's Stack System Mobile Toolbox, a 3-piece resin plastic modular system, offers convenient storage and organization for a wide range of tools.",
        product_category: "Tools",
        product_weight: 18.0,
        product_provider_price: 60.00,
        product_sale_price: 120.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321190375440384/HART-Stack-System-Mobile-Toolbox-for-Storage-and-Organization-3-Piece-Resin-Plastic-Modular-Toolbox-System_9ee7a7ab-fd62-4ac7-8d4b-d1679d743384.d55dadb3884b6c5058646ba705f75a96.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Pocket Screwdriver Set",
        product_description: "Hyper Tough's 2-Piece Acetate Handle Pocket Screwdriver Set, a compact and reliable tool for quick fixes and on-the-go repairs.",
        product_category: "Tools",
        product_weight: 0.4,
        product_provider_price: 4.00,
        product_sale_price: 10.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321190845194240/Hyper-Tough-2-Piece-Acetate-Handle-Pocket-Screwdriver-Set_af48416d-59c0-4db2-af09-d6a1015744a3.eddc882b39e8e152c0e39115e110e13c.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Hammer and Screwdriver Set",
        product_description: "Hyper Tough's 5-in-1 Hammer and Screwdriver Set includes 4 screwdrivers and 1 hammer, an all-in-one tool kit for everyday household tasks.",
        product_category: "Tools",
        product_weight: 2.2,
        product_provider_price: 10.00,
        product_sale_price: 22.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312892754473031/1173321191218491444/Hyper-Tough-5-in-1-Hammer-and-Screwdriver-Set-4-Screwdrivers-and-1-Hammer_d929ec36-b61c-421a-9560-aa35b914da9d.e1cf4a110d907191bcf2d9f3f90c9c87.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Precision Screwdriver Set",
        product_description: "Hyper Tough's 6-Piece Precision Philips and Slotted Screwdriver Set, offering precision and durability for detailed work.",
        product_category: "Tools",
        product_weight: 0.6,
        product_provider_price: 6.00,
        product_sale_price: 14.99,
        product_picture_filename: "https://media.discordapp.net/attachments/1173312892754473031/1173321191696646218/Hyper-Tough-6-Piece-Precision-Philips-and-Slotted-Screwdriver-Set-TS80037R_281213c5-ef74-435f-939e-9b124db4fb66_2.4b95be8c60f08534f961e6f7723d774e.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Cordless Drill Driver",
        product_description: "Hyper Tough 12V Max Lithium-Ion Cordless 3/8-inch Drill Driver, a versatile tool for home projects, includes a 1.5Ah battery.",
        product_category: "Tools",
        product_weight: 3.5,
        product_provider_price: 29.00,
        product_sale_price: 59.99,
        product_picture_filename: "https://media.discordapp.net/attachments/1173312892754473031/1173321192254480504/Hyper-Tough-12V-Max-Lithium-Ion-Cordless-3-8-inch-Drill-Driver-with-1-5Ah-Battery-Holiday-Gifts-For-Dad-Model-99303_eac10afc-8c74-4ae5-92f3-95f87709b3c5.64287aef6bfe1f55c16f366552480a6e.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Household Tool Kit",
        product_description: "Stalwart's 130-Piece Tool Set includes hammer, wrench set, screwdriver, pliers, and more, ideal for DIY projects at home.",
        product_category: "Tools",
        product_weight: 10.0,
        product_provider_price: 40.00,
        product_sale_price: 79.99,
        product_picture_filename: "https://media.discordapp.com/attachments/1173312892754473031/1173321193252733109/Stalwart-Household-Tool-Kit-130-Piece-Tool-Set-Includes-Hammer-Wrench-Set-Screwdriver-Pliers-and-More-Home-Tool-Kit-Great-for-DIY-Projects_6fa779c2-546a-4da3-b80e-a898b651b787.8f8041dce7d7b33e31cff6670c653df9.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Paint Roller Kit",
        product_description: "ValueMax's 16-Piece Paint Roller Kit, made of steel and polyethylene, perfect for all painting jobs at home.",
        product_category: "Tools",
        product_weight: 4.0,
        product_provider_price: 15.00,
        product_sale_price: 30.00,
        product_picture_filename: "https://media.discordapp.com/attachments/1173312892754473031/1173321193902846002/ValueMax-Paint-Roller-Kit-16-Piece-Steel-Polyethylene_a23f096a-1230-46c6-a1fa-41391b672010.9ecd3de2b2a68e8a3de552252f01ab81.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Lighted Christmas Inflatable",
        product_description: "Seasonal LLC's 4.5ft Puffy Coat Santa, a lighted Christmas inflatable, perfect for festive outdoor decorations.",
        product_category: "Home Decor",
        product_weight: 5.0,
        product_provider_price: 25.00,
        product_sale_price: 49.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320625541103646/4-5ft-Puffy-Coat-Santa-Lighted-Christmas-Inflatable-by-Seasonal-LLC_8429522c-3cf5-4d1f-a8ac-4cb0524d469d.936be503e05b49469b8981a700e6cd8b.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Zombie Hand Halloween Inflatable",
        product_description: "Airblown Inflatables' 13-Foot Tall Zombie Hand, a colossal Halloween decoration, sure to be the highlight of spooky season.",
        product_category: "Home Decor",
        product_weight: 7.0,
        product_provider_price: 60.00,
        product_sale_price: 120.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320625939546204/13-Foot-Tall-Zombie-Hand-Colossal-for-Halloween-by-Airblown-Inflatables_2e11a299-39ef-45a0-8340-ee8f8b928fa3.96fa0389aaba4234d05a052787054f12.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Pre-Lit Holiday Christmas Tree",
        product_description: "Best Choice Products' 6ft Pre-Lit Holiday Christmas Pine Tree, snow-flocked branches and 250 warm white lights, creates a winter wonderland indoors.",
        product_category: "Home Decor",
        product_weight: 15.0,
        product_provider_price: 80.00,
        product_sale_price: 159.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320626325438585/Best-Choice-Products-6ft-Pre-Lit-Holiday-Christmas-Pine-Tree-w-Snow-Flocked-Branches-250-Warm-White-Lights_911244e1-9270-40b2-b825-24b0f1f9b372.cc8ba47b03c470bc424777173728c05d.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Wooden Christmas Advent Calendar",
        product_description: "Best Choice Products' Wooden Christmas Advent Calendar, Shooting Star design with LED light, adds festive charm to holiday countdowns.",
        product_category: "Home Decor",
        product_weight: 3.0,
        product_provider_price: 20.00,
        product_sale_price: 39.99,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320626933600347/Best-Choice-Products-Wooden-Christmas-Advent-Calendar-Shooting-Star-w-Battery-Operated-LED-Light-Background_e93b329c-6d46-4652-b63a-20a805b41e6e.eeac2886d1499aafe6d4d3dc692da9e8.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: "Chocolate Blackout Curtains",
        product_description: "Deconovo's Chocolate Short Blackout Curtains, kitchen grommet thermal insulated, room darkening small window set, provides privacy and energy efficiency.",
        product_category: "Home Decor",
        product_weight: 2.5,
        product_provider_price: 18.00,
        product_sale_price: 36.00,
        product_picture_filename: "https://cdn.discordapp.com/attachments/1173312877592072244/1173320627294306335/Deconovo-Chocolate-Short-Blackout-Curtains-Kitchen-Grommet-Thermal-Insulated-Room-Darkening-Small-Window-52-x-45-inch-Chocolate-Set-2_373c48e8-ade7-4602-8e7c-e8d642155ac8.554013e45d11784b91b15ffc0dd59175.webp",
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
