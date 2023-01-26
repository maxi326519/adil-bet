const router = require("express").Router();
const updateUser = require("../../controllers/PATCH/updateProfile");

router.patch("/user/:id", async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  console.log(req.body);

  try {
    const update = await updateUser(id, userData);
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
