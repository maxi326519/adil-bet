const router = require('express').Router();
const getMatchs = require('../../controllers/GET/getMatchs');

router.get('/matchs', (req, res) => {
    const filters = { country, leage, team } = req.query;
    try{
        const response = getMatchs(filters);
        res.status(200).json({ message: response });
    }catch(exception){
        res.status(400).json({ error: exception.message });
    }
});

module.exports = router;