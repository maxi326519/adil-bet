const { Match } = require ('../db');

async function saveDB(data){
    const newMatch = await Match.create({
        game: data.id,
        country: data.country.name,
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

    await Match.bulkCreate(newMatch);

    if(!newMatch) throw new Error('No se guardo el match');
    console.log(`Se guardo el match ${data.id} excitosamente`);
}
/* 
 1 - Verificamos si esta actualizado
    - Si es la fecha y hora del partido
    - revisar cada 1 hora
*/

module.exports = saveDB;