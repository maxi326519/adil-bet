const router = require('express').Router();
const deleteReview = require('../../controllers/DELETE/deleteReview.js');

router.delete("/reviews/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reviewDeleted = await deleteReview(id);
    res.status(200).json({message: "reviewDeleted"});
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;