const {User, Deposit, Bet} = require ("../../db.js")

const getAllUsers = async (req, res) => {
       const users = await User.findAll(
        {
        include: {
          model: Deposit,
          attributes: [
            'amount',
            'method',
          ],
        },
      }
      );
      return users; 
  };

  module.exports = getAllUsers;
