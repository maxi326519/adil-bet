const { Bet, Match, User } = require("../../db");

const postBet = async (req, res) => {
  try {
    const { amount, betTo, multiplier, idUser, idMatch } = req.body;
    if (!idUser && !amount && !betTo && !multiplier && !idMatch)
      throw new Error("missing parameters", { statusCode: 400 });

    const newBet = await Bet.create({
      amount,
      betTo,
      multiplier,
    });

    const userDb = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (!userDb) throw new Error("not found user", { statusCode: 404 });

    const matchDb = await Match.findOne({
      where: {
        id: idMatch,
      },
    });

    if (!matchDb) throw new Error("not found match", { statusCode: 404 });

    await matchDb.addBets(newBet);
    await userDb.addBet(newBet);

    return res.status(200).send({ message: "The bet was made successfully" });
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
};

module.exports = { postBet };
