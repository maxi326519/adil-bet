const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.ENUM('Paid', 'Pending'),
      allowNull: false,
      defaultValue: 'Pending'
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
    {
      timestamps: false,
    }
  )
}