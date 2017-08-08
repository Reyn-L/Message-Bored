'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: {
      type:DataTypes.STRING,
      unique: true}
    });
  Users.associate = function(models) {
    Users.hasMany(models.Topics);
    Users.hasMany(models.Messages);
  };
  return Users;
};