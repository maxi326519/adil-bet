const { Router } = require("express");
const { postOrder } = require("../../controllers/POST/addOrder");
const router = Router();

router.post("/order", postOrder);

module.exports = router;
