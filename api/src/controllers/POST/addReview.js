const { Review } = require("../../db");

const postReviews = async ( reviewData, id, userName, score ) => {
  await Review.create({
    reviewData: reviewData,
    userId: id,
    userName: userName,
    score: score,
  });

  return ({message: "Review Create as successfull"})
};

module.exports = postReviews;