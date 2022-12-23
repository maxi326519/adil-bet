const { User, Order } = require("../../db");

/* const postUser = async (req, res) => {
  try {
    const {
      id,
      name,
      userName,
      email,
      password,
      phone,
      wallet,
      isActive,
      isAdmin,
    } = req.body;
    if (
      id &&
      name &&
      userName &&
      email &&
      password &&
      phone &&
      wallet &&
      isActive &&
      isAdmin
    ) {
      const [newUser] = await User.findOrCreate({
        where: {
          id: id,
          name: name,
          userName: userName,
          email: email,
          password: password,
          phone: phone,
          wallet: wallet,
          isActive: isActive,
          isAdmin: isAdmin,
        },
      });
      id.forEach(async (orderId) => {
        const orderDb = await Order.findOne({
          where: { id: orderId },
        });
        await orderDb.addUser(newUser);
      });
      return res.send("the user was made successfully");
    } else {
      return res.status(422).json("the user could not be made");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { postUser };
 */

const postUser = async (req, res) => {
  const { name, userName, email, password, phone, isAdmin } = req.body;

  try {
    await User.create({
      name,
      userName,
      email,
      password,
      phone: phone ? phone : null,
      isAdmin: isAdmin ? isAdmin : false,
    });

    return res.status(200).send("the user was made successfully");
  } catch (error) {
    return res.status(404).send("the user could not be made," + { error });
  }
};

module.exports = { postUser };
