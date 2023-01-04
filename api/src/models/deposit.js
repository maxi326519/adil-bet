const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('deposit', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true
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