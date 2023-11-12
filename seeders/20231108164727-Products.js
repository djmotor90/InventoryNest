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
