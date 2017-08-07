'use strict';

const models = require("../models");

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
  })

  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {
      foreignKey: userId
    };
  }
  return Profile;
};
