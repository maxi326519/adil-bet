const { Order, Match, User } = require("../../db");

/* const postOrder = async (req, res) => {
  try {
    const { id, status, betTo } = req.body;
    if (id && status && betTo) {
      const [newOrder] = await Order.findOrCreate({
        where: {
          id: id,
          status: status,
          betTo: betTo,
        },
      });
      id.forEach(async (matchId) => {
        const matchDb = await Match.findOne({
          where: { id: matchId },
        });
        await matchDb.addOrder(newOrder);
      });
      return res.send("the order was made successfully");
    } else {
      return res.status(422).json("The order could not be completed");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { postOrder }; */

const postOrder = async (req, res) => {
  const { betTo, idUser } = req.body;

  try {
    const newOrder = await Order.create({
      betTo,
    });

    const matchDb = await Match.findOne({
      where: {
        id: id,
      },
    });

    /*     const matchDb = await Match.create({
      game: "jsj",
      country: "usa",
      league: "la mejor de todas",
      homeTeam: "grgr",
      awayTeam: "grgrg",
      logoLeague: "tu tio",
      logoHome: "tu papa",
      logoAway: "tu mama",
      scoreHome: 0.1,
      scoreAway: 0.1,
    }); */

    const userDb = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (!userDb) throw new Error("not found user");

    await matchDb.addOrder(newOrder);
    await userDb.addOrder(newOrder);

    return res.status(200).send("the order was made successfully");
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = { postOrder };
