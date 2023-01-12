const { Order, Match, User } = require("../../db");

const postOrder = async (req, res) => {
  try {
    const { amount, idUser } = req.body;
    if (!amount && !idUser)
      throw new Error("missing parameters", { statusCode: 400 });
    const newOrder = await Order.create({
      amount,
    });

    const userDb = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (!userDb) throw new Error("not found user", { statusCode: 404 });

    await userDb.addOrder(newOrder);

    return res.status(200).json({
      ...newOrder.dataValues,
      userId: userDb.id
    });
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
};

module.exports = { postOrder };
