const Stripe = require("stripe");
const Order = require("../../models/order");
const Bet = require("../../models/bet");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);
//const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const checkoutInfo = async (req, res) => {
  let { Bet, userEmail } = req.body;

  let pay = Bet.map((e) => {
    return {
      id: e.id,
      status: e.status,
      beTo: e.beTo,
      amount: e.amount,
      multiplier: e.multiplier,
    };
  });

  const customer = await stripe.customers.create({
    metadata: {
      userEmail,
      Bet: JSON.stringify(pay),
    },
  });
};
