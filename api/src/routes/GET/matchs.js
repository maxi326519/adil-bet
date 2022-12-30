const router = require('express').Router();
const getMatchs = require('../../controllers/GET/getMatchs');

router.get('/matchs', (req, res) => {
    try{
        const response = getMatchs();
        res.status(200).json({ message: response });
    }catch(exception){
        res.status(400).json({ error: exception.message });
    }
});

module.exports = router;