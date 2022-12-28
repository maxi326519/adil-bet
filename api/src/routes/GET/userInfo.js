const router = require('express').Router();
const getUserInfo = require ('../../controllers/GET/getUserInfo');


router.get("user/:id", async (req, res) => {
    try {
        const { id } = req.params
        let userInfo = await getUserInfo(id)
        return res.status(200).json(userInfo)
    }
    catch (error) {
        return res.status(400).send(error.message)
    }
});

module.exports = router;