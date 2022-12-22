const { Router } = require("express");
const { postBet } = require("../../controllers/POST/addBet");
const router = Router();

router.post("/", postBet);

module.exports = router;
