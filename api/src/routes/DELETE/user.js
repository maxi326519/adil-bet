const router = require('express').Router();
const deleteUser = require('../../controllers/DELETE/deleteUser');
const user = require("../../models/user")

router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await deleteUser(id);
    res.status(200).json({message: userDeleted});
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;