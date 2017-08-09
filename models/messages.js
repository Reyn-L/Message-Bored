'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    body: DataTypes.TEXT
  });
  Messages.associate = function(models) {
    Messages.belongsTo(models.Users, {
      foreignKey: "author_id"
    });
    Messages.belongsTo(models.Topics, {foreignKey: 'topic_id'});
  };
  return Messages;
};