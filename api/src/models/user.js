const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('user', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      suspense: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      phone: {
         type: DataTypes.BIGINT,
      },

      isAdmin: {
         type: DataTypes.BOOLEAN,
      },
   },
      {
         timestamps: false,
      }
   )
}