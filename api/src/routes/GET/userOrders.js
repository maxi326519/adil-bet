const router = require('express').Router();
const getUserOrders = require('../../controllers/GET/getUserOrders.js')

router.get("/orders/:id", async(req, res)=>{
    try{
        const { id } = req.params
        const userOrders = await getUserOrders(id)
        console.log(userOrders)
        return res.status(200).json(userOrders)
    }catch(err){
        return res.status(400).send(err.message)
    }
})


module.exports = router;