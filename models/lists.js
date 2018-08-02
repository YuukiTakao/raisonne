'use strict';
module.exports = (sequelize, DataTypes) => {
  var lists = sequelize.define('lists', {
    title: DataTypes.STRING,
    progress_rate: DataTypes.INTEGER,
    space_id: DataTypes.INTEGER,
    is_archived: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  lists.associate = function(models) {
    // associations can be defined here
  };
  return lists;
};