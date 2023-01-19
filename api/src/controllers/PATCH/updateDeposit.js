const { Deposit } = require("../../db");

const updateDeposit = async ({ id, amount}) => {
  const depositFound = await Deposit.findOne({
    where: {
      id: id,
    },
  });

  if (depositFound && amount) {
    depositFound.update({
      amount,
    });
    await depositFound.save();
    return depositFound;
  }
};

module.exports = updateDeposit;