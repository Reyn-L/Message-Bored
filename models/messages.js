'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    body: DataTypes.TEXT
  });
  Messages.associate = function(models) {
    Messages.belongsTo(models.Users);
    Messages.belongsTo(models.Topics);
  };
  return Messages;
};