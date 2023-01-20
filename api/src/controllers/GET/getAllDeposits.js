const {User, Deposit, Bet} = require ("../../db.js")

const getAllDeposits = async (req, res) => {
    // try {
      const deposits = await Deposit.findAll({
        include: {
          model: User,
          attributes: [
            'userName',
          ],
        },
      });
      return deposits
  };

  module.exports = getAllDeposits;
