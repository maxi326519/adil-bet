const {User, Deposit, Bet} = require ("../../db.js")


  const getUserInfo = async (id) => {
      const userInfo = await User.findByPk(id,
        {
        include: [
          {
            model: Bet,
            attributes: [
                'betTo',
                'amount',
                'date'
              ],
          },
          {
            model: Deposit,
            attributes: [
              'amount',
              'method',
            ],
          },
        ],
      }
      );
      return userInfo;
    
  };

module.exports = getUserInfo;