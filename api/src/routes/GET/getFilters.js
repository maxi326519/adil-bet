const { Router } = require("express");
const getfilters = require("../../controllers/GET/getFilter.js");
const router = Router();

router.get("/getFilters", async (req, res)=>{
    try{
        const response = await getfilters()
        res.status(200).json(response)
    }catch(err){
        res.status(400).json({err: err})
    }
});

module.exports = router;