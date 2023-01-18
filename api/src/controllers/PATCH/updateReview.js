const { Review } = require("../../db");

const updateReview = async (id, status, score, reviewData) => {
  console.log(id, status, score, reviewData)
  status === undefined ? status = "Pending" : null
  try {
    const review = await Review.findOne({
      where: {
        userId: id,
      },
    });
        review.update({
        status: status,
        score: score,
        reviewData: reviewData
      });
      await review.save();

    
    return {messaje: "succesfull update"}
  } catch (error) {
    throw new Error("Review not found");
  }
};

module.exports = updateReview;
