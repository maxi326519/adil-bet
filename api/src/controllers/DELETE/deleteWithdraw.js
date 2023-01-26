const { Withdraw } = require("../../db");

const deleteWithdraw = async (id) => {
  if (id && typeof parseInt(id) === "number") {
    const withdrawDelete = await Withdraw.destroy({
      where: {
        userId: id,
      },
    });
    if (!withdrawDelete) throw new Error(`No existe una withdraw de un usuario con el id: ${id}`);
    return "Se eliminó correctamente.";
  } else {
    throw new Error("Falta Id.");
  }
};

module.exports = deleteWithdraw;