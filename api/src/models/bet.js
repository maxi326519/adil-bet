const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('bet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    betTo: {
      type: DataTypes.ENUM('homeBet', 'awayBet', 'tieBet'),
      allowNull: false
    },
    multiplier: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { updatedAt: false })
};