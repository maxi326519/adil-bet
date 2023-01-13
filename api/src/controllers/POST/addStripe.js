const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51MHby8F7eyBevS9ZXxRg9Eq86GTgwLX2gwHD1WV2WxuK4xSzGM5ZeDZBxImmAQQqSAlrPkjTsCAAOiUvM8mlXkml00oNKHF5N9"
);
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

const postRecharge = async (body) => {
  const id = body.id;
  const amount = body.amount;
  const userId = body.userid;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "RECHARGE",
      source: id,
  

      
    });

    await transporter.sendMail({
      from: '"AdilBets2022" <AdilBets2022@gmail.com>', //Emisor
      to: user.email, //Receptor
      subject: "Mail Verification", //Asunto
      html: `<b>you did a recharge of ${amount}</b>`, //Texto del mail
    });

    const user = await User.findOne({
      where: { id: userId },
      attributes: ["wallet"],
    });

    // Actualiza el usuario

    const updatedUser = await user.update(
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
    );

    console.log(updatedUser);
};

module.exports = postRecharge;