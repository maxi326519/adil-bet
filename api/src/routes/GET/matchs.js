const router = require('express').Router();
const getMatchs = require('../../controllers/GET/getMatchs');

router.get('/matchs', async (req, res) => {
    const {name} = req.query;
    try{
        const matchs = await getMatchs(name);
        res.status(200).json(matchs);
    }catch(exception){
        res.status(400).json({ error: exception.message });
    }
});

module.exports = router;