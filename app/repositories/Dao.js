const Sequelize = require('sequelize');
const sequelize = new Sequelize('raisonne','root','0217Yuki!',{dialect:'mysql'});
const TestTable = sequelize.define('test_table', {
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

TestTable.findAll().then(data => {
  console.log(data);
});
