const { User, Deposit } = require("../../db");

const postPaid = async (req, res) => {
  try {
    const { amount, method } = req.body;
    if (!amount && !method)
      throw new Error("missing parameters", { statusCode: 400 });

    const newUser = await User.create({
      amount,
      method,
    });

    const depositDb = await Deposit.findOne({
      where: {
        id: id,
      },
    });

    if (!depositDb) throw new Error("not found deposit", { statusCode: 404 });

    await depositDb.addUser(newUser);
    return res
      .status(200)
      .send(`message: has been charged to the account ${amount}`);
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
};

module.exports = { postPaid };
