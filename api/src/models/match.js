const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('match', {
      id: {
         type: Number,
         primaryKey: true,
         autoIncrement: true
      },
      games: {
         type: DataTypes.STRING,
         allowNull: false
      },
      country: {
         type: DataTypes.STRING,
         allowNull: false
      },
      league: {
         type: DataTypes.STRING,
         allowNull: false
      },
      logoLeague: {
         type: DataTypes.STRING,
         allowNull: false
      },
      homeTeam: {
         type: DataTypes.STRING,
         allowNull: false
      },
      logoHome: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayTeam: {
         type: DataTypes.STRING,
         allowNull: false
      },
      logoAway: {
         type: DataTypes.STRING,
         allowNull: false
      },
      scoreHome: {
         type: DataTypes.STRING,
         allowNull: false
      },
      scoreAway: {
         type: DataTypes.STRING,
         allowNull: false
      },
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

