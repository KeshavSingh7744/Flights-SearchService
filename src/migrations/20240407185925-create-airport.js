'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull : false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique : true,
        onDelete : 'CASCADE',
        references : {
          model : 'Cities',
          key : 'id',
          as : 'cityId'
        }
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
    await queryInterface.dropTable('Airports');
  }
};
