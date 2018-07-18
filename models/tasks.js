'use strict';
module.exports = (sequelize, DataTypes) => {
  var tasks = sequelize.define('tasks', {
    title: DataTypes.STRING,
    completed: DataTypes.INTEGER,
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