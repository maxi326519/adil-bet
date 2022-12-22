const { User, Deposit } = require("../db");

const postPaid = async (req, res) => {
  try {
    const { id, amount, method } = req.body;
    if (id && amount && method) {
      const [newDeposit] = await Deposit.findOrCreate({
        where: {
          id: id,
          amount: amount,
          method: method,
        },
      });
      id.forEach(async (userId) => {
        const userDb = await User.findOne({
          where: { id: userId },
        });
        await userDb.addDeposit(newDeposit);
      });
      return res.send(`message: has been charged to the account ${amount}`);
    } else {
      return res.status(422).json("the recharge was not successful");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { postPaid };
