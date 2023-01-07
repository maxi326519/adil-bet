const { Match } = require('../../db.js');

function getMatchs(filters){
    // let atributtes = {}

    // Filters
    if(filters.country) atributtes.where['country'] = filters.country;
    if(filters.leage) atributtes.where['leage'] = filters.leage;
    if(filters.team) atributtes.where['team'] = filters.team;

    // Find matchs
    const allMatchs = Match.findAll()

    if(!allMatchs) throw new Error('No existen partidos con esos filtros');

    return allMatchs;
}

module.exports = getMatchs;