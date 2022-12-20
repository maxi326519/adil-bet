const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('bet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
    { timestamps: false },
  )
};