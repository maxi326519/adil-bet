const { Router } = require("express");
const {postRecharge} = require("../../controllers/POST/addStripe");
const router = Router();

router.post("/create-checkout-session", postRecharge);

module.exports = router;
