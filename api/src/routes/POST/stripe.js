const { Router } = require("express");
const postRecharge = require("../../controllers/POST/addStripe");
const router = Router();

router.post("/create-checkout-session", async (req, res) => {
  try {
    await postRecharge(req.body);
    res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = router;
