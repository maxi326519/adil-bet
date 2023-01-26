const { User, Deposit, Bet, Withdraw } = require("../../db.js")

const getUserActivity = async (id, activity, page) => {
  const limit = 15;
  const offset = (page - 1) * limit;
  if (!id) return "Especificar usuario"
  if (id && activity === "all") {

    const userAllBets = await Bet.findAll({
      where: {
        userId: id
      },
      limit,
      offset,
    })

    const userAllDeposit = await Deposit.findAll({
      where: {
        userId: id
      },
      limit,
      offset,
    })

    const userAllWithdraw = await Withdraw.findAll({
      where: {
        userId: id
      },
      limit,
      offset,

    })
    const userAllActivities = { Bets: { userAllBets }, Deposit: { userAllDeposit }, Withdraw: { userAllWithdraw } }
    return userAllActivities
  }

  if (id && activity === "bets") {
    const userAllBets = await Bet.findAll({
      where: { userId: id },
      limit,
      offset,
    })

    return { Bets: { userAllBets }}
  }

  if (id && activity === "deposit") {
    const userAllDeposit = await Deposit.findAll({
      where: {
        userId: id
      },
      limit,
      offset,
    })

    return {Deposit: { userAllDeposit }}
  }

  if (id && activity === "withdraw") {
    const userAllWithdraw = await Withdraw.findAll({
      where: {
        userId: id
      },
      limit,
      offset,
    })

    return {Withdraw: { userAllWithdraw }}
  }
};

module.exports = getUserActivity;