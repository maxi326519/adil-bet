const router = require('express').Router();
const getMatchs = require('../../controllers/GET/getMatchs');

router.get('/matchs', async (req, res) => {
    const {league, teams, country} = req.query;
    try{
        const matchs = await getMatchs(league, teams, country);
        res.status(200).json(matchs);
    }catch(exception){
        res.status(400).json({ error: exception.message });
    }
});

module.exports = router;