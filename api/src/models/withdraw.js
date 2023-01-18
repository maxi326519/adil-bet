const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('withdraw', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING,
    }
  },
  { updatedAt: false })
}