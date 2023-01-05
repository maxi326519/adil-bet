const router = require('express').Router();
const loginUserAuth0 = require ('../../controllers/POST/loginUserAuth0');

router.post("/login/auth0", async (req, res) => {
    const { email, name } = req.body;
    try {
        let userLogin = await loginUserAuth0(email, name)
        res.status(200).json(userLogin)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;