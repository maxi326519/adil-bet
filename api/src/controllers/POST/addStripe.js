const stripe = require("stripe")("sk_test_51MPqgHHDF8goU6ElAtZxz40EN9SzKYYp0jc3PA0CHoiQEmdAlQzXeqYu0OtQMIeO944yawN3AZx1Jz2RJ3XFfUDQ00pc1lG9Of");
const { User } = require("../../db.js");
const nodemailer = require("nodemailer");

require("dotenv").config();

//const stripe = Stripe(process.env.STRIPE_KEY);
//const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "AdilBets2022@gmail.com", // generated ethereal user
    pass: "wgbcndetyaocjvxo", // generated ethereal password
  },
}); 

const postRecharge = async (req, res) => {
  const { payment_method, amount, userId } = req.body;

  try {
/*     const payment = await stripe.charges.create({
      amount,
      currency: "USD",
      description: "BET",
    });
 */

    console.log(payment_method, amount, userId);

    const clientSecret = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method: payment_method,
      confirmation_method: 'manual',
      confirm: true,
      statement_descriptor: 'recarga',
    });

    res.status(200).json(clientSecret);

/*     const paymentIntent = await stripe.paymentIntents.create({

      payment_method: payment_method.paymentMethod,
      confirmation_method: 'manual',
      confirm: true,
      statement_descriptor: 'Apuesta',
    }); */

/*     await transporter.sendMail({
      from: '"AdilBets2022" <AdilBets2022@gmail.com>', //Emisor
      to: user.email, //Receptor
      subject: "Mail Verification", //Asunto
      html: `<b>You have made a bet ${amount}</b>`, //Texto del mail
    }); */

/*     const user = await User.findOne({
      where: { id: userId },
      attributes: ["wallet"],
    }); */

    // Actualiza el usuario

/*     const updatedUser = await user.update(
      {
        wallet: user.wallet + amount,
      },
      {
        where: {
          id: userId,
        },
        return: true,
        plain: true,
      }
    ); */
  } catch (error) {
    return res.status(400).json({ message: error.raw.message });
  } 
};

module.exports = { postRecharge };
