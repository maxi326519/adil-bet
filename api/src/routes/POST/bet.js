const { Router } = require("express");
const { postBet } = require("../../controllers/POST/addBet");
const router = Router();

router.post("/order/bet", postBet);

module.exports = router;
