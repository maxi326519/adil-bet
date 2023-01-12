const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('score', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false
      },
      home: {
         type: DataTypes.STRING,
         allowNull: false
      },
      homeHits: {
         type: DataTypes.STRING,
         allowNull: false
      },
      homeErrors: {
         type: DataTypes.STRING,
         allowNull: false
      },
      homeInings: {
         type: DataTypes.STRING,
         allowNull: false
      },
      homeExtra: {
         type: DataTypes.STRING,
         allowNull: false
      },
      homeTotal: {
         type: DataTypes.STRING,
         allowNull: false
      },
      away: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayHits: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayErrors: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayInings: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayExtra: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayTotal: {
         type: DataTypes.STRING,
         allowNull: false
      },
   },
      { timestamps: false }
   )
}

