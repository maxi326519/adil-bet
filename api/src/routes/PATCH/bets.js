const router = require("express").Router();
const updateBet = require("../../controllers/PATCH/updateBet");

router.patch("/bet/:id", async (req, res) => {
  const { id } = req.params;
  const { status, amount, multiplier } = req.body;

  try {
    const update = await updateBet({
      id,
      status,
      amount,
      multiplier,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;