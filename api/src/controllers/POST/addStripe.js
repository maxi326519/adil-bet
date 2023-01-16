const stripe = require("stripe")("sk_test_51MPqgHHDF8goU6ElAtZxz40EN9SzKYYp0jc3PA0CHoiQEmdAlQzXeqYu0OtQMIeO944yawN3AZx1Jz2RJ3XFfUDQ00pc1lG9Of");
const { User } = require("../../db.js");
const nodemailer = require("nodemailer");
const { where } = require("sequelize");

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

const postRecharge = async ( { payment_method, amount, userId }) => { 

    const clientSecret = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method: payment_method,
      confirmation_method: 'manual',
      confirm: true,
      statement_descriptor: 'recarga',
    });
    
    // Actualiza el usuario
    
    const user = await User.findOne({
      where: {id: userId},
    })
    
    await user.update(
      {
        wallet: user.wallet + amount,
      },
      {
        return: true,
        plain: true,
      }
      ); 
      
      await transporter.sendMail({
        from: '"AdilBets2022" <AdilBets2022@gmail.com>', //Emisor
        to: user.email, //Receptor
        subject: "Mail Verification", //Asunto
        html: `<b>your recharge of ${amount} was successful</b>`, //Texto del mail
      }); 
      
      await user.save();
      return user;
    };
    
    module.exports = { postRecharge };
    