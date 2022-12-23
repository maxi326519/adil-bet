const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('order', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Paid'),
      defaultValue: 'Pending'
    },
    betTo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
  )
}
