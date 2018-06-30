const Sequelize = require('sequelize');
const sequelize = require ('../repositories/Dao.js');


const UserTable = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('name');
    }
  },
  roll: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  last_login_date: {
    type: Sequelize.DATE
  },
  created_at: {
    allowNull: false,
    type: Sequelize.DATE
  },
  modified_at: {
    allowNull: false,
    type: Sequelize.DATE
  }
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = UserTable;
