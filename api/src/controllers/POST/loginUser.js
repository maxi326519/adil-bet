const {User, Deposit, Bet} = require ("../../db.js")

const loginUser= async (email, password) => {
  console.log(email)
      const user = await User.findOne({
        where: { email,},
        include: [
          {
            model: Deposit,
            attributes: [
                'amount',
              ],
          },
        ],
      });
      return user
  };

  module.exports = loginUser;