const { Review } = require("../../db.js");

const getAllReviews = async (id) => {

  const allReviews = await Review.findAll();

  return allReviews ? allReviews : {message: 'No hay reviews'}
};

module.exports = getAllReviews;