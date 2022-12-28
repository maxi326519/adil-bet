const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51MJPEXA6SeeS9tTlg2Nyv3BaNRDd6PRV7PqDZzLRxaK5rozoKTuTbjRY4ezRuI53X4DTFHVvx91PFLrANqYytk5k00HCYuDS2N"
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

const postRecharge = async (req, res) => {
  const { id, amount, userId } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "BET",
      payment_method: id,
      confirm: true,
    });

    await transporter.sendMail({
      from: '"AdilBets2022" <AdilBets2022@gmail.com>', //Emisor
      to: user.email, //Receptor
      subject: "Mail Verification", //Asunto
      html: `<b>You have made a bet ${amount}</b>`, //Texto del mail
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
    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    return res.status(400).json({ message: error.raw.message });
  }
};

module.exports = { postRecharge };
