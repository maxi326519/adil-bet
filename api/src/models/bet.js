const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('bet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM('Active', 'Completed'),
      defaultValue: 'Active'
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
    }
  },
  { updatedAt: false })
};