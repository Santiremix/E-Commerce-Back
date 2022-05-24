'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Quijote',
        price: "100€",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Alien',
        price: "15€",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Carretera',
        price: "17€",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mario Bros',
        price: "25€",
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
    
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
