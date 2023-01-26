const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: "smtp.gmail.com",
  port: 464,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "AdilBetSA@gmail.com", // generated ethereal user
    pass: "mdgojeodiuutgisd", // generated ethereal password
  },
});

async function sendMail(email, subject, msgTemplate) {
  try {
    console.log(email);
    await transporter.sendMail({
      from: '"adilbetsa@gmail.com', //Emisor
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
