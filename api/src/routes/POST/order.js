const { Router } = require("express");
const { postOrder } = require("../../controllers/POST/addOrder");
const router = Router();

router.post("/", postOrder);

module.exports = router;
