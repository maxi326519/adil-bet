const { Order } = require("../../db");

const deleteOrder = async (id) => {
  if (id && typeof parseInt(id) === "number") {
    const orderDeleted = await Order.destroy({
      where: {
        id: id,
      },
    });
    if (!orderDeleted) throw new Error(`No existe la orden con el Id: ${id}`);
    return "Se eliminó correctamente.";
  } else {
    throw new Error("Falta Id.");
  }
};

module.exports = deleteOrder;
