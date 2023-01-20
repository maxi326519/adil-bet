const { Review } = require("../../db.js");

const getReviewById = async (id) => {
  var review = !id
    ? `no existe un usuario con id: ${id}`
    : await Review.findOne({
        where: { userId: id },
      });
  review =
    typeof review === "object"
      ? review
      : "este usuario no tiene ninguna review";

  return review;
};

module.exports = getReviewById;
