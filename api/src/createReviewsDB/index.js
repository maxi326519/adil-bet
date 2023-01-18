const saveReviewsDB = require("./saveReviewsDB.js");

const reviews = require('./reviews.js')

function initialReviews(){

    // los guardamos en la base de datos
    reviews.forEach(r => saveReviewsDB(r));
}

module.exports = initialReviews;