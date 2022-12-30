const { Order } = require("../../db.js");

const getUserOrders = async (id) => {

  const response = await Order.findAll({
    where: { userId: id }
  });
  
  if (response.length === 0) throw new Error('Order not found')

  return response;
};

module.exports = getUserOrders;