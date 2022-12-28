const router = require('express').Router();
const getAllUsers = require ('../../controllers/GET/getAllUsers.js');

router.get("/allUser", async (req, res) => {
    try {
        let allUsers = await getAllUsers()
        return res.status(200).json(allUsers)
    }
    catch (error) {
        return res.status(400).send(error.message)
    }
});

module.exports = router;