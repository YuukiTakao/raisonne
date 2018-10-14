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
  users.authorize = (userId, password) => {
    return new Promise( (resolve, reject) => {
      users.findAll(
        {
          where: {
            name: userId,
            password: password,
          }
        }).then( targetUser => {
          console.log('targetUser: ',targetUser);
          const userObj = JSON.parse(JSON.stringify(targetUser, null, 2));
          console.log('user: ',userObj);
          if (userObj.length > 0) {
            resolve(userId, password);
          } else {
            reject();
          }
        });
      });
    };
  return users;
};