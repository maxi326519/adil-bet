const router = require('express').Router();
const getUserOrders = require('../../controllers/GET/getUserOrders.js')

router.get("/orders/:id", async(req, res)=>{
    const { id } = req.params;
    try{
        const userOrders = await getUserOrders(id)
        return res.status(200).json(userOrders);
    }catch(err){
        return res.status(400).send({ error: err.message })
    }
})

module.exports = router;