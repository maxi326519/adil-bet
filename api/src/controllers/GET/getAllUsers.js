const {user, deposit, bet} = require ("../../db.js")

const getAllUsers = async (req, res) => {
    try {
      const users = await user.findAll({
        include: {
          model: deposit,
          attributes: [
            'amount',
            'method',
          ],
        },
      });
      return res.json(users);
    } catch (error) {
      return res.status(404).json({ msg: error });
    }
  };

  module.exports = getAllUsers;
