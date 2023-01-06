const router = require('express').Router();
const loginUser = require ('../../controllers/POST/loginUser.js');

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    try {
        let userLogin = await loginUser(email, password)
        res.status(200).json(userLogin)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
);

module.exports = router;