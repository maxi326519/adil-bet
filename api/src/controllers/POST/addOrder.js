const { Order, Match, User } = require("../../db");

const postOrder = async (req, res) => {
  try {
    const { betTo, idUser } = req.body;
    if (!betTo && !idUser)
      throw new Error("missing parameters", { statusCode: 400 });
    const newOrder = await Order.create({
      betTo,
    });

    const matchDb = await Match.findOne({
      where: {
        id: id,
      },
    });

    if (!matchDb) throw new Error("not found match");

    const userDb = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (!userDb) throw new Error("not found user", { statusCode: 404 });

    await matchDb.addOrder(newOrder);
    await userDb.addOrder(newOrder);

    return res.status(200).send("the order was made successfully");
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
};

module.exports = { postOrder };
