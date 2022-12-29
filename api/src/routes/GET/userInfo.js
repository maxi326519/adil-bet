const router = require('express').Router();
const getUserInfo = require ('../../controllers/GET/getUserInfo.js');


router.get("/user/:id", async (req, res) => {
    const { id } = req.params
    console.log(id,"hola")
    try {
        let userInfo = await getUserInfo(id)
        res.status(200).json(userInfo)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;