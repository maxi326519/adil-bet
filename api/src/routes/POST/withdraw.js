const { Router } = require("express");
const postWithdraw = require("../../controllers/POST/addWithdraw");
const router = Router();

router.post("/withdraw", async function(req, res){
    try{
        const newWithdraw = await postWithdraw(req.body)
        res.status(200).json(newWithdraw)
    }catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
});


module.exports = router;