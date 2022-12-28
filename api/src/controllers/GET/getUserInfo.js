const {user, deposit, bet} = require ("../../db.js")


  const getUserInfo = async (req, res) => {
    const { id } = req.params;
    try {
      const userId = await user.findByPk(id, {
        include: [
          {
            model: bet,
            attributes: [
                'betTo',
                'amount',
                'date'
              ],
          },
          {
            model: deposit,
            attributes: [
              'amount',
              'method',
            ],
          },
        ],
      });
      return res.status(200).json(userId);
    } catch (error) {
      return res.status(404).json({ msg: error });
    }
  };

module.exports = getUserInfo;