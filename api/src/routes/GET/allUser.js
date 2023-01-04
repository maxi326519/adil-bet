const router = require('express').Router();
const getAllUsers = require ('../../controllers/GET/getAllUsers.js');

router.get("/alluser", async (req, res) => {
    try {
        let allUsers = await getAllUsers()
        res.status(200).json(allUsers)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;