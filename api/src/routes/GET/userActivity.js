const router = require('express').Router();
const getUserActivity = require ('../../controllers/GET/getUserActivity.js');

router.get("/activity/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {activity, page} =req.query;
        let ActivityUserInfo = await getUserActivity(id, activity, page)
        res.status(200).json(ActivityUserInfo)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;