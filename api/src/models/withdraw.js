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
      unique: true,
      defaultValue: null,
   },
  },
  { updatedAt: false })
}