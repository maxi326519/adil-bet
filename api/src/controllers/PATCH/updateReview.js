const { Review } = require("../../db");

const updateReview = async (id, status) => {
    console.log(status, id)
  try {
    const review = await Review.findOne({
      where: {
        userId: id,
      },
    });

    if (review.id) {
        review.update({
        status: status,
      });
      await review.save();

    }
    return {messaje: "succesfull update"}
  } catch (error) {
    throw new Error("Review not found");
  }
};

module.exports = updateReview;
