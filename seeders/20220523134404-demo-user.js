'use strict';
const bcrypt = require('bcryptjs');
// const user = require('../models/user');
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Users',[
      {
        name: 'Pedro',
        email: "pedro25@gmail.com",
        phone: "111111111",
<<<<<<< HEAD
        password: bcrypt.hashSync("holabuenas", 10),        
=======
<<<<<<< HEAD
        password: bcrypt.hashSync("holabuenas", 10),        
=======
        password: bcrypt.hashSync("holabuenas", 10),
        role: "admin",
        confirmed: true,
>>>>>>> 16684c7cedfe3f7a3b48800d6e26ccd642b65c47
>>>>>>> develop
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juan',
        email: "juan@gmail.com",
        phone: "222222222",
        password: bcrypt.hashSync("holabuenas", 10),
        role: "manager",
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        name: 'Maria',
        email: "maria@gmail.com",
        phone: "333333333",
        password: bcrypt.hashSync("holabuenas", 10),
        role: "user",
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amparo',
        email: "amparo@gmail.com",
        phone: "444444444",
        password: bcrypt.hashSync("holabuenas", 10),
        role: "user",
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Julio',
        email: "julio@gmail.com",
        phone: "555555555",
        password: bcrypt.hashSync("holabuenas", 10),
        role: "user",
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joaquin',
        email: "joaquin@gmail.com",
        phone: "666666666",
        password: bcrypt.hashSync("holabuenas", 10),
        role: "user",
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucia',
        email: "lucia@gmail.com",
        phone: "777777777",
        password: bcrypt.hashSync("holabuenas", 10),
        role: "user",
        confirmed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]);},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
