const router = require("express").Router();
const updateDeposit = require("../../controllers/PATCH/updateDeposit");

router.patch("/deposit/:id", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const update = await updateDeposit({ id, amount });
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;