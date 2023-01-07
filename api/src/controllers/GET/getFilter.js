const { Match } = require("../../db.js");

async function getfilters() {
  const filters = {
    league: [],
    teams: [],
    country: [],
  };
  const match = await Match.findAll();
  match.forEach((e) => {
    if (!filters.teams.some((teams) => teams === e.dataValues.homeTeam)) {
      filters.teams.push(e.dataValues.homeTeam);
    }
    if (!filters.teams.some((teams) => teams === e.dataValues.awayTeam)) {
      filters.teams.push(e.dataValues.awayTeam);
    }
    if (!filters.league.some((league) => league === e.dataValues.league)) {
      filters.league.push(e.dataValues.league);
    }
    if (!filters.country.some((country) => country === e.dataValues.country)) {
      filters.country.push(e.dataValues.country);
    }
  });

  for(const property in filters){
    filters[property].sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  }
  
  return filters;
}
module.exports = getfilters;
