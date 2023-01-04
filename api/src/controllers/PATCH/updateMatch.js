const { Match } = require("../../db")

const updateMatch = async (id, date, game, country, league, homeTeam, awayTeam, logoLeague, logoHome, logoAway, scoreHome, scoreAway) => {

   try {
      const matchFound = await Match.findOne({
         where: {
            match: id
         }
      });

      if (matchFound) {
         matchFound.update({

            id: id,
            date: date,
            game: game,
            country: country,
            league: league,
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            logoLeague: logoLeague,
            logoHome: logoHome,
            logoAway: logoAway,
            scoreHome: scoreHome,
            scoreAway: scoreAway

         });
         await matchFound.save();
      }

   } catch (error) {
      throw new Error("Match not found")
   }
}

module.exports = updateMatch