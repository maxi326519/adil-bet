const axios = require('axios');
const fs = require('fs');
const path = require('path');

/* const getApi = async () => {
    var endpoint = 'games'; 
    var config = {
        headers: {
            "x-rapidapi-host": "v1.baseball.api-sports.io",
            "x-rapidapi-key": "b30d70eaa4cafbfcdc87653234b8a5fa"
        },
    }

    try{
        // Una vez al dia
        const seasonLeague = await axios.get(`https://v1.baseball.api-sports.io/leagues?country_id=1&season=2023`, config);

        // Extraemos los id de las ligas
        const leaguesId = seasonLeague.data.response.map(l => l.id).filter(id => id === 1);
        const leaguesId = [1];

        // GET de las ligas obtenidas
        leaguesId.map(async id => { 
            const gamesleague = await axios.get(`https://v1.baseball.api-sports.io/games?league=${id}&season=2023`, config);
            fs.writeFileSync('./games.json', JSON.stringify(gamesleague.data));
        });
    }catch(err){
        console.log(err);
    }
} */

function getData () {
    try{
        return JSON.parse(fs.readFileSync('./src/requestAPI/games.json', 'utf8')).response;
    }catch(err){
        console.log(err);
    }
}

module.exports = getData;