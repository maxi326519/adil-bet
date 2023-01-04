const router = require('express').Router();
const updateUser = require("../../controllers/UPDATE/updateUser")

router.patch("/user/:id", async (req, res) => {

    const {id} = req.params
    const {name, userName, email, password, phone, wallet, isActive, isAdmin} = req.body

    try {
        const update = await updateUser(id, name, userName, email, password, phone, wallet, isActive, isAdmin)
    } catch (error) {
        res.status(404).json({error: error.message})
    }

})

module.exports = router;