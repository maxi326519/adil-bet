const { order, user } = require("../../db.js");

const getUserOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await order.fidAll({
      include: {
        model: user,
      },
      where: {
        userId: {
          id,
        },
      },
    });
    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({ msg: err });
  }
};

module.exports = getUserOrders;
