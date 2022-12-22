const { User } = require("../../db");

const deleteUser = async (id) => {
  if (id && typeof parseInt(id) === "number") {
    const userDeleted = await User.destroy({
      where: {
        id: id,
      },
    });
    if (!userDeleted) throw new Error(`No existe el usuario con el Id: ${id}`);
    return "Se eliminó correctamente.";
  } else {
    throw new Error("Falta Id.");
  }
};

module.exports = deleteUser;
