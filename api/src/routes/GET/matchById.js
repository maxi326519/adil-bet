const router = require('express').Router();
const getMatchById = require ('../../controllers/GET/getMatchById.js');


router.get("/details/:id", async (req, res) => {
    const { id } = req.params
    try {
        let match = await getMatchById(id)
        res.status(200).json(match)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;