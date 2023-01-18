const { Review } = require("../../db");

const postReviews = async ( reviewData, id ) => {
  await Review.create({
    reviewData: reviewData,
    userId: id
  });

  return ({message: "Review Create as successfull"})
};

module.exports = postReviews;