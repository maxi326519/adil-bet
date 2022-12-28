const {user, deposit, bet} = require ("../../db.js")

const getAllBets = async (req, res) => {
    try {
      const bets = await bet.findAll({
        include: {
          model: user,
          attributes: [
            'userName',
          ],
        },
      });
      return res.json(bets);
    } catch (error) {
      return res.status(404).json({ msg: error });
    }
  };

  module.exports = getAllBets;
