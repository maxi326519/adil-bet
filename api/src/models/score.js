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
         allowNull: true
      },
      homeErrors: {
         type: DataTypes.STRING,
         allowNull: true
      },
      homeInings: {
         type: DataTypes.STRING,
         allowNull: true
      },
      1: {
         type: DataTypes.STRING,
         allowNull: true
      },
      2: {
         type: DataTypes.STRING,
         allowNull: true
      },
      3: {
         type: DataTypes.STRING,
         allowNull: true
      },
      4: {
         type: DataTypes.STRING,
         allowNull: true
      },
      5: {
         type: DataTypes.STRING,
         allowNull: true
      },
      6: {
         type: DataTypes.STRING,
         allowNull: true
      },
      7: {
         type: DataTypes.STRING,
         allowNull: true
      },
      8: {
         type: DataTypes.STRING,
         allowNull: true
      },
      9: {
         type: DataTypes.STRING,
         allowNull: true
      },
      homeExtra: {
         type: DataTypes.STRING,
         allowNull: true
      },
      homeTotal: {
         type: DataTypes.STRING,
         allowNull: true
      },
      away: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayHits: {
         type: DataTypes.STRING,
         allowNull: true
      },
      awayErrors: {
         type: DataTypes.STRING,
         allowNull: true
      },
      awayInings: {
         type: DataTypes.STRING,
         allowNull: true
      },
      1: {
         type: DataTypes.STRING,
         allowNull: true
      },
      2: {
         type: DataTypes.STRING,
         allowNull: true
      },
      3: {
         type: DataTypes.STRING,
         allowNull: true
      },
      4: {
         type: DataTypes.STRING,
         allowNull: true
      },
      5: {
         type: DataTypes.STRING,
         allowNull: true
      },
      6: {
         type: DataTypes.STRING,
         allowNull: true
      },
      7: {
         type: DataTypes.STRING,
         allowNull: true
      },
      8: {
         type: DataTypes.STRING,
         allowNull: true
      },
      9: {
         type: DataTypes.STRING,
         allowNull: true
      },
      awayExtra: {
         type: DataTypes.STRING,
         allowNull: true
      },
      awayTotal: {
         type: DataTypes.STRING,
         allowNull: true
      },
   },
      { timestamps: true }
   )
}

