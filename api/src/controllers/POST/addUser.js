const { User } = require("../../db");

const postUser = async (req, res) => {
  try {
    const { name, userName, email, password, phone, isAdmin } = req.body;
    if (name && userName && email && password && phone && isAdmin)
      throw new Error("missing parameters", { statusCode: 400 });

      const newUser = await User.create({
      name,
      userName,
      email,
      password,
      phone: phone ? phone : null,
      isAdmin: isAdmin ? isAdmin : false,
    });

    return res.status(200).json(newUser)
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
};

module.exports = { postUser };
