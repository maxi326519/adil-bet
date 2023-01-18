const router = require("express").Router();
const getAllReviews = require("../../controllers/GET/getAllReviews.js");

router.get("/allreviews", async (req, res) => {
  try {
    let allReview = await getAllReviews()
    res.status(200).json(allReview);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;