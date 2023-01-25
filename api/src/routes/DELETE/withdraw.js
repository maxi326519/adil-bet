const router = require('express').Router();
const deleteWithdraw = require('../../controllers/DELETE/deleteWithdraw.js');

router.delete("/withdraw/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const withdrawDeleted = await deleteWithdraw(id);
    res.status(200).json({ message: withdrawDeleted });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;