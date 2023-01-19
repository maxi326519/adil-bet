const { Review } = require("../../db");

const deleteReview = async (id) => {
  if (id && typeof parseInt(id) === "number") {
    const reviewDelete = await Review.destroy({
      where: {
        userId: id,
      },
    });
    if (!reviewDelete) throw new Error(`No existe una review de un usuario con el id: ${id}`);
    return "Se eliminó correctamente.";
  } else {
    throw new Error("Falta Id.");
  }
};

module.exports = deleteReview;
