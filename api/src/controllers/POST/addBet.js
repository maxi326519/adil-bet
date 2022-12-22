const { Bet, Match } = require("../db");

const postBet = async (req, res) => {
  try {
    const { id, amount, betTo, multiplier, date } = req.body;
    if (id && amount && betTo && multiplier && date) {
      const [newBet] = await Bet.findOrCreate({
        where: {
          id: id,
          amount: amount,
          betTo: betTo,
          multiplier: multiplier,
          date: date,
        },
      });
      id.forEach(async (matchId) => {
        const matchDb = await Match.findOne({
          where: { id: matchId },
        });
        await matchDb.addBet(newBet);
      });
      return res.send("the bet was made successfully");
    } else {
      return res.status(422).json("the bet could not be made");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { postBet };
