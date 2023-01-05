const { Match } = require('../db.js');

async function saveDB(data){
/*     data = data.map(match => {
        return {
            game: match.id,
            country: 'USA',
            league: match.league.name,
            homeTeam: match.teams.home.name,
            awayTeam: match.teams.away.name,
            date: match.date,
            logoLeague: match.league.logo,
            logoHome: match.teams.home.logo,
            logoAway: match.teams.away.logo,
            scoreHome: 1,
            scoreAway: 1
        }
    });

    await Match.bulkCreate(data); */

    const instance = await Match.create({
            id: data.id,
            game: 'Baseball',
            country: 'USA',
            league: data.league.name,
            homeTeam: data.teams.home.name,
            awayTeam: data.teams.away.name,
            date: data.date,
            logoLeague: data.league.logo,
            logoHome: data.teams.home.logo,
            logoAway: data.teams.away.logo,
            scoreHome: 1,
            scoreAway: 1
    });

/*     await Match.bulkCreate(data); */

/*     await Match.bulkCreate(newMatch)

    if(!newMatch) throw new Error('No se guardo el match');
    console.log(`Se guardo el match ${data.id} excitosamente`); */
}
/* 
 1 - Verificamos si esta actualizado
    - Si es la fecha y hora del partido
    - revisar cada 1 hora
*/

module.exports = saveDB;