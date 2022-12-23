const { Bet, Match, User } = require("../../db");

// const postBet = async (req, res) => {
//   try {
//     const { id, amount, betTo, multiplier, date } = req.body;
//     if (id && amount && betTo && multiplier && date) {
//       const [newBet] = await Bet.findOrCreate({
//         where: {
//           id: id,
//           amount: amount,
//           betTo: betTo,
//           multiplier: multiplier,
//           date: date,
//         },
//       });
//       id.forEach(async (matchId) => {
//         const matchDb = await Match.findOne({
//           where: { id: matchId },
//         });
//         await matchDb.addBet(newBet);
//       });
//       return res.send("the bet was made successfully");
//     } else {
//       return res.status(422).json("the bet could not be made");
//     }
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };

const postBet = async (req, res) => {
  const { amount, betTo, multiplier, idUser, idMatch } = req.body;

  try {
    const newBet = await Bet.create({
      amount,
      betTo,
      multiplier,
    });

    const userDb = await User.findOne({
      where: {
        id: idUser,
      },
    });

    const matchDb = await Match.findOne({
      where: {
        id: idMatch,
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

    await matchDb.addBets(newBet);
    await userDb.addBet(newBet);

    return res.status(200).send({ message: "The bet was made successfully" });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = { postBet };
