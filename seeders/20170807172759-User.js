'use strict';

let models = require("./../models");
// console.log(Object.keys(models));

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var users = [];
    for (let i = 0; i < 3; i++) {
      users.push({
        username: `foobar${i}`,
        email: `foobar${i}@gmail.com`,
        profileId: i + 1
      });
    }
    return queryInterface.bulkInsert('Users', users);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {}, models.User);
  }
};
