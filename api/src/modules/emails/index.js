const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "AdilBets2022@gmail.com", // generated ethereal user
    pass: "wgbcndetyaocjvxo", // generated ethereal password
  },
});

async function sendMail(email, subject, msgTemplate) {
  try {
    console.log(email);
    await transporter.sendMail({
      from: '"AdilBets2022" <AdilBets2022@gmail.com>', //Emisor
      to: email, //Receptor
      subject: subject, //Asunto
      html: msgTemplate, //Texto del mail
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  sendMail,
};
