'use strict';

let models = require("./../models");

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    var profiles = [];
    for (let i = 0; i < 3; i++) {
      profiles.push({
        fname: `Name${i}`,
        lname: `Name${i}`,
        age: i + 30,
        city: `City of HomeDepot${i}`,
        distance: i + 4,
        mstatus: "single",
        height: i + 30,
        children: i,
        occupation: "Vikings",
        education: "Viking Code School",
        userId: i
      });
    }
    return queryInterface.bulkInsert('Profile', profiles);
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Profile', null, {}, models.Profile);
  }
};
