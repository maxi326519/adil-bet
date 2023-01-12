const { User, Deposit } = require("../../db");

const postPaid = async (req, res) => {
  try {
    const { amount, method, userId } = req.body;
    if (!amount && !method) return res.status(405).send("missing parameters");

    const newDeposit = await Deposit.create({
      amount,
      method,
    });

    const userDb = await User.findOne({
      where: {
        id:userId
      },
    });
    console.log(userDb)

    if (!userDb) return res.status(406).send("no se encontró usuario")

    await userDb.addDeposit(newDeposit);
    return res
      .status(200)
      .json({
        ...newDeposit.dataValues,
      userId: userDb.id
      });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = { postPaid };
