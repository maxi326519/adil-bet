const router = require("express").Router();
const updateWithdraw = require("../../controllers/PATCH/updateWithdraw.js");

router.patch("/withdraw/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const update = await updateWithdraw(id, status);
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
