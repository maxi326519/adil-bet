const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('withdraw', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM("Pending", "Sent"),
        defaultValue: "Pending",
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: null,
   },
   card: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  },
  { updatedAt: false })
}