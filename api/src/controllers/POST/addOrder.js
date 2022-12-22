const { Order, Match } = require("../../db");

const postOrder = async (req, res) => {
  try {
    const { id, status, betTo } = req.body;
    if (id && status && betTo) {
      const [newOrder] = await Order.findOrCreate({
        where: {
          id: id,
          status: status,
          betTo: betTo,
        },
      });
      id.forEach(async (matchId) => {
        const matchDb = await Match.findOne({
          where: { id: matchId },
        });
        await matchDb.addOrder(newOrder);
      });
      return res.send("the order was made successfully");
    } else {
      return res.status(422).json("The order could not be completed");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { postOrder };
