const { Review } = require("../../db");

const updateReview = async (id, status, score) => {
  console.log('ss', score)
  try {
    const review = await Review.findOne({
      where: {
        userId: id,
      },
    });

    if (review.id) {
        review.update({
        status: status,
        score: score,
      });
      await review.save();
      return review
    }
    return {messaje: "succesfull update"}
  } catch (error) {
    throw new Error("Review not found");
  }
};

module.exports = updateReview;
