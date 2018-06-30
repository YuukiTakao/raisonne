const Sequelize = require('sequelize');
const sequelize = new Sequelize('raisonne','root','0217Yuki!',{dialect:'mysql'});


module.exports = sequelize;
