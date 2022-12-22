const router = require("express").Router();
const deleteOrder = require("../../controllers/DELETE/deleteOrder");
const order = require("../../models/order");

router.delete("/order/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await deleteOrder(id);
    res.status(200).json({ message: userDeleted });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
