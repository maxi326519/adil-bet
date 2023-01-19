const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.ENUM("Pending", "Aprobed"),
        defaultValue: "Pending",
      },
      reviewData: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      userName:{
        type: DataTypes.STRING,
      },
      score:{
        type: DataTypes.INTEGER,
        min: 1,
        max: 5,
      }
    },
    { timestamps: false }
  );

  // Review.associate = (models) => {
  //   Review.belongsTo(models.User, {
  //     foreignKey: 'userId',
  //   });
  // };
  // return Review;
};

