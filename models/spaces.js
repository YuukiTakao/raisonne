'use strict';
module.exports = (sequelize, DataTypes) => {
  const spaces = sequelize.define('spaces', {
    title: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    is_archived: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  spaces.associate = function(models) {
    // associations can be defined here
  };
  return spaces;
};