const {Match, Deposit, Bet} = require ("../../db.js")


  const getMatchById = async (id) => {
      const matchById = await Match.findByPk(id);
      return matchById;
  };

module.exports = getMatchById;