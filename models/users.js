'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING(32),
    status: DataTypes.INTEGER(3),
    last_login_date: DataTypes.DATE
  }, {
    underscored: true,
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};