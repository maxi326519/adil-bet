const { Review } = require('../db.js');

async function saveReviewsDB(u){

    const instance = await Review.create({
        status: u.status,
        reviewData: u.reviewData,
        userId: u.userId,
        userName: u.userName,
        score: u.score,
    });
}

module.exports = saveReviewsDB;