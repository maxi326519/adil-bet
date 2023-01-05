const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('user', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      userName: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: true
      },      
      phone: {
         type: DataTypes.STRING,
         unique: true
      },
      wallet: {
         type: DataTypes.FLOAT,
         defaultValue: 0
      },
      isActive: {
         type: DataTypes.BOOLEAN,
         defaultValue: true
      },
      isAdmin: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
      },
   })
}


