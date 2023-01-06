const router = require('express').Router();
const getMatchSearch = require('../../controllers/GET/getMatchSearch.js');

router.get('/matchs/search', async (req, res) => {
    const {name} = req.query;
    try{
        const matchs = await getMatchSearch(name);
        res.status(200).json(matchs);
    }catch(exception){
        res.status(400).json({ error: exception.message });
    }
});

module.exports = router;