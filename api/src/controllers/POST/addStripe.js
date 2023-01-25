const stripe = require("stripe")(
  "sk_test_51MPqgHHDF8goU6ElAtZxz40EN9SzKYYp0jc3PA0CHoiQEmdAlQzXeqYu0OtQMIeO944yawN3AZx1Jz2RJ3XFfUDQ00pc1lG9Of"
);
const { User } = require("../../db.js");
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
