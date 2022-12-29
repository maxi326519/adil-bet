const router = require('express').Router();
const getAllBets = require ('../../controllers/GET/getAllBets.js');

router.get("/allBets", async (req, res) => {
    try {
        let allBets = await getAllBets()
        res.status(200).json(allBets)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

// router.get('/allbets', getAllBets);

module.exports = router;