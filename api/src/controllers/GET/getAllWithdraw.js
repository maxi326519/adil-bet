const { Withdraw } = require("../../db.js");

const getAllWithdraw = async () => {

  const allWithdraws = await Withdraw.findAll();

  return allWithdraws;
};

module.exports = getAllWithdraw;