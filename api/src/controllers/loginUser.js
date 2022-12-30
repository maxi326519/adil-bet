const {User, Deposit, Bet} = require ("../db.js")

const loginUser= async (email, password) => {

      const user = await User.findOne({
        where: { email,
        password},
        include: [
          {
            model: Deposit,
            attributes: [
                'amount',
              ],
          },
        ],
      });

      if (!user) throw new Error('Usuario o contraseña incorrecta');
      else return user;
  };

  module.exports = loginUser;