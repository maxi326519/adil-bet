const { User, Deposit } = require("../../db");

// const postPaid = async (req, res) => {
//   try {
//     const { id, amount, method } = req.body;
//     if (id && amount && method) {
//       const [newDeposit] = await Deposit.findOrCreate({
//         where: {
//           id: id,
//           amount: amount,
//           method: method,
//         },
//       });
//       id.forEach(async (userId) => {
//         const userDb = await User.findOne({
//           where: { id: userId },
//         });
//         await userDb.addDeposit(newDeposit);
//       });
//       return res.send(`message: has been charged to the account ${amount}`);
//     } else {
//       return res.status(422).json("the recharge was not successful");
//     }
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };

const postPaid = async (req, res) => {
  const { amount, method } = req.body;

  try {
    const newUser = await User.create({
      amount,
      method,
    });
    const depositDb = await Deposit.findOne({
      where: {
        id: id,
      },
    });

    await depositDb.addUser(newUser);
    return res
      .status(200)
      .send(`message: has been charged to the account ${amount}`);
  } catch (error) {
    return res.status(404).send("the recharge was not successful " + { error });
  }
};

module.exports = { postPaid };
