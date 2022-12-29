const {User, Deposit, Bet} = require ("../../db.js")

const getAllBets = async (req, res) => {
    // try {
      const bets = await Bet.findAll({
        include: {
          model: User,
          attributes: [
            'userName',
          ],
        },
      });
      // res.status(200).json(bets);
      return bets
    // } catch (error) {
    //   res.status(404).json({ msg: 'holaaa' });
    // }
  };

  module.exports = getAllBets;
