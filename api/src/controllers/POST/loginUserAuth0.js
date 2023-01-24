const { User, Deposit, Bet } = require("../../db.js");
const { sendMail } = require("../../modules/emails");

const loginUserAuth0 = async (email, name) => {
  const userExist = await User.findOne({
    where: { email },
    include: [
      {
        model: Deposit,
        attributes: ["amount"],
      },
    ],
  });

  if (userExist) {
    return userExist;
  }
  if (!userExist) {
    const newUser = await User.create({
      email,
      name,
      userName: name,
      isAdmin: false,
      isActive: true,
      password: "Password",
    });
    const USER = await User.findByPk(newUser.id);

    sendMail(
      email,
      "¡Bienvenido a Adil Bet!",
      `<span>Tu cuenta fue creada satisfactoriamente</span>`
    );

    return newUser;
  }
};

module.exports = loginUserAuth0;
