const router = require('express').Router();
const getAllDeposits = require ('../../controllers/GET/getAllDeposits.js');

router.get("/allDeposits", async (req, res) => {
    try {
        let allDeposits = await getAllDeposits()
        res.status(200).json(allDeposits)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;