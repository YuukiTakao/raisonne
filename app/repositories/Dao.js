const Sequelize = require('sequelize');
const sequelize = new Sequelize('raisonne','root','0217Yuki!',{dialect:'mysql'});
const UserTable = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
},{
  freezeTableName: true,
  timestamps: false
});

UserTable.findAll().then(data => {
  console.log(data);
});
