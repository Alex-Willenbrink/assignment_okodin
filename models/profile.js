'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    city: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    mstatus: DataTypes.STRING,
    height: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    occupation: DataTypes.STRING,
    education: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile;
};