const stripe = require("stripe")(
  "sk_test_51MUWj9BawCLw8uloHWHJlaf4lkhrg0O2kyEA8n2ZFHBOBW7TaDR7gHBhRawsoaMOi8N3vZ4cfz1ox3ydH5jsDRs100zoJ0Ddl1"
);
const { User, Deposit } = require("../../db.js");
const { sendMail } = require("../../modules/emails");

require("dotenv").config();

//const stripe = Stripe(process.env.STRIPE_KEY);
//const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const postRecharge = async ({ payment_method, amount, userId, dataEmail }) => {
  const clientSecret = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
    payment_method: payment_method,
    confirmation_method: "manual",
    confirm: true,
    statement_descriptor: "recarga",
  });

  const deposits = await Deposit.create({
    amount: amount,
    userId: userId,
  })

  // Actualiza el usuario
  const user = await User.findOne({
    where: { id: userId },
  });

  await user.update(
    {
      wallet: user.wallet + Number(amount),
    },
    {
      return: true,
      plain: true,
    }
  );

  sendMail(
    dataEmail.email,
    "¡Recarga exitosa!",
    `<span>Se recargaron $${amount} a tu billetera</span>`
  );

  return user;
};

module.exports = { postRecharge };
