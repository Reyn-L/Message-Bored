'use strict';
module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define('Topics', {
    name:{
      type: DataTypes.STRING, unique: true}
    });
  Topics.associate = function(models) {
    Topics.belongsTo(models.Users, {
      foreignKey:'created_by'
    });

    Topics.hasMany(models.Messages, {
      foreignKey: 'topic_id'
    });
  };
  return Topics;
};