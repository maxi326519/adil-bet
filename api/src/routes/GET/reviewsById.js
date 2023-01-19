const router = require("express").Router();
const getReviewById = require("../../controllers/GET/getReviewById.js");

router.get("/reviews/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let allReview = await getReviewById(id)
    res.status(200).json(allReview);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;