const { User, Deposit, Bet } = require("../../db.js");

const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: Deposit,
        attributes: ["amount"],
      },
    ],
  });
  return user;
};

module.exports = loginUser;