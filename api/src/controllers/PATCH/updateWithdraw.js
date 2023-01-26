const { Withdraw } = require("../../db");

const updateWithdraw = async (id, statuszz) => {
  status === undefined ? (status = "Pending") : null;
  try {
    const withdraw = await Withdraw.findOne({
      where: {
        userId: id,
      },
    });
    withdraw.update({
      status: status,
    });
    await withdraw.save();

    return { messaje: "succesfull update" };
  } catch (error) {
    throw new Error("Withdraw not found");
  }
};

module.exports = updateWithdraw;
