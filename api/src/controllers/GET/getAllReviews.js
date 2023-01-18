const { Review } = require("../../db.js");

const getAllReviews = async (id) => {
  const reviewsById = id
    ? await Review.findOne({
        where: { userId: id },
      })
    : false;

  const allReviews = await Review.findAll();

  if (reviewsById) {
    return reviewsById;
  } else return allReviews;
};

module.exports = getAllReviews;