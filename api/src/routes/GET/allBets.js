const router = require('express').Router();
const getAllBets = require ('../../controllers/GET/getAllBets.js');

router.get("/allBets", async (req, res) => {
    try {
        let allBets = await getAllBets()
        return res.status(200).json(allBets)
    }
    catch (error) {
        return res.status(400).send(error.message)
    }
});

module.exports = router;