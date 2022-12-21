const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('match', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      game: {
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
      homeTeam: {
         type: DataTypes.STRING,
         allowNull: false
      },
      awayTeam: {
         type: DataTypes.STRING,
         allowNull: false
      },
      logoLeague: {
         type: DataTypes.STRING,
         allowNull: false
      },
      logoHome: {
         type: DataTypes.STRING,
         allowNull: false
      },
      logoAway: {
         type: DataTypes.STRING,
         allowNull: false
      },
      scoreHome: {
         type: DataTypes.FLOAT,
         allowNull: false
      },
      scoreAway: {
         type: DataTypes.FLOAT,
         allowNull: false
      }
   },
   { timestamps: false }
   )
}