'use strict';
module.exports = (sequelize, DataTypes) => {
  var tasks = sequelize.define('tasks', {
    title: DataTypes.STRING,
    completed:{
      type: DataTypes.BOOLEAN,
      defaultValue: function() {
        return false
      }
    },
    list_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    close_date: DataTypes.DATE,
    completion_date: DataTypes.DATE
  }, {
    underscored: true,
  });
  tasks.associate = function(models) {
    // associations can be defined here
  };
  return tasks;
};
