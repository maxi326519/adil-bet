const { Router } = require("express");
const { postPaid } = require("../../controllers/POST/addPaid");
const router = Router();

router.post("/paid", postPaid);

module.exports = router;
