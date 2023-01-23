const { Router } = require("express");
const { postRecharge } = require("../../controllers/POST/addStripe");
const router = Router();

router.post("/create-checkout-session", async (req,res) => {
    const { payment_method, amount, userId, dataEmail} = req.body;
    
    try {
      const update = await postRecharge({ payment_method, amount, userId, dataEmail });
      res.status(200).json({message: 'Successful Payment'});
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
});

module.exports = router;
