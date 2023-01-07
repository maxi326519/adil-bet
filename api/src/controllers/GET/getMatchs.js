const { Match } = require('../../db.js');

async function getMatchs(league, teams, country){
    let attributes = {}

      // Filters
      if(league) attributes['league'] = league;
      if(country) attributes['country'] = country;
      
    // Find matchs
    let allMatchs = await Match.findAll({ where: attributes })

    if(!allMatchs) throw new Error('No existen partidos con esos filtros');

    // Team Filter
    if(teams){
        allMatchs = allMatchs.filter(m => {
            console.log(m.dataValues.homeTeam);
            if(m.dataValues.homeTeam === teams) return true;
            if(m.dataValues.awayTeam === teams) return true;
        });
    }

    if(!allMatchs) throw new Error('No existen partidos con esos filtros');

    return allMatchs;
}

module.exports = getMatchs;