const router = require('express').Router();
const loginUser = require ('../../controllers/POST/loginUser.js');

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    try {
        let userLogin = await loginUser(email, password)
        if(userLogin){
            res.status(200).json(userLogin)
        }else {
            res.status(400).send(error.message)
        }
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
);

module.exports = router;