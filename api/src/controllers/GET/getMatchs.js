const { Match } = require('../../db.js');

async function getMatchs(name){
    
    const allMatchs = await Match.findAll();
    if(name){
        const matchByLeague = await allMatchs.filter(match => {
            return match.league.toLowerCase().includes(name.toLowerCase())
        })
        const matchByHomeTeam = await allMatchs.filter(match => {
          return match.homeTeam.toLowerCase().includes(name.toLowerCase())
      })
      const matchByAwayTeam = await allMatchs.filter(match => {
        return match.awayTeam.toLowerCase().includes(name.toLowerCase())
    })
      const matchFilter = matchByLeague.concat(matchByHomeTeam,matchByAwayTeam)
        if ( matchFilter.length > 0 ) {
            return matchFilter
        } else{
            throw new Error('No existen partidos con esos filtros');
        }        
    }
    else return allMatchs;
}

module.exports = getMatchs;