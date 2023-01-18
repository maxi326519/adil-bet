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
<<<<<<< HEAD

    
=======
      return review
    }
>>>>>>> 1b9c29bcdb62c81a36b2a91504abe4214af1fc58
    return {messaje: "succesfull update"}
  } catch (error) {
    throw new Error("Review not found");
  }
};

module.exports = updateReview;
