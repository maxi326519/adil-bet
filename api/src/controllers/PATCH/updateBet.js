const { Bet } = require("../../db");

const updateBet = async ({ id, status, amount, multiplier }) => {
  const betFound = await Bet.findOne({
    where: {
      id: id,
    },
  });

  if (betFound && status && !amount && !multiplier) {
    betFound.update({
      status: status,
    });
    await betFound.save();
    return betFound;
  }
  if (betFound && amount && !status && !multiplier) {
    betFound.update({
      amount,
    });
    await betFound.save();
    return betFound;
  }

  if (betFound && multiplier && !status && !amount) {
    betFound.update({
      multiplier,
    });
    await betFound.save();
    return betFound;
  }

  if (betFound) {
    betFound.update({
      status: status,
      amount: amount,
      multiplier: multiplier,
    });
    await betFound.save();
    return betFound;
  }
};

module.exports = updateBet;