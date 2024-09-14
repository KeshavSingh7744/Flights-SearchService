'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          name: "Delhi",
          id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mumbai",
          id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kannada",
          id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Benglore",
          id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },



  async down(queryInterface, Sequelize){
   await queryInterface.bulkDelete('Cities', null, {});
   
}};

