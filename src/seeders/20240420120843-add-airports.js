"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Indira Gandhi International Airport",
          cityId: 8,
          address: "delhi",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          name: "Mysore International Airport",
          cityId: 9,
          address: "mysore",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mengaluru International Airport",
          cityId: 11,
          address: "bangalore",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mumbai International Airport",
          cityId: 12,
          address: "mumbai",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vadodra International Airport",
          cityId: 20,
          address: "gujarat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize){
    await queryInterface.bulkDelete('Airports', null, {});
    
 }};

