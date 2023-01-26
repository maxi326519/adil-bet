const router = require('express').Router();
const getAllWithdraw = require ('../../controllers/GET/getAllWithdraw');

router.get("/allWithdraws", async (req, res) => {
    try {
        let allWithdraws = await getAllWithdraw()
        res.status(200).json(allWithdraws)
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
});

module.exports = router;