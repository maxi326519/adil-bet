const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('multiplier', {
      homeBet: {
         type: DataTypes.FLOAT,
         defaultValue: 1.80
      },
      awayBet: {
         type: DataTypes.FLOAT,
         defaultValue: 2.50
      },
      draw: {
         type: DataTypes.FLOAT,
         defaultValue: 3.00
      }
   },
      {
         timestamps: false,
      }
   )
}