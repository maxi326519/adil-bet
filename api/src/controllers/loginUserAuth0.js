const {User, Deposit, Bet} = require ("../db.js")

  export const loginUserAuth0 = async (req, res) => {
    const { email, name } = req.body;

    const userExist = await User.findOne({
        where: { email,
        password},
        include: [
          {
            model: Deposit,
            attributes: [
                'amount',
              ],
          },
        ],
      });
  
      if (userExist) {
        return res.status(201).json(userExist);
      }
      const newUser = await User.create({
        email,
        name,
        userName:name,
        isAdmin: false,
        isActive: true,
        password: 'Password',
      });
      const USER = await User.findByPk(newUser.id);
  
      res.status(200).json({
        user: USER,
        complete: 'User is created succesfully',
        password,
      });

  };