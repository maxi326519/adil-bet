const saveBetDB = require("./saveBetDB.js");

const bet = require('./bet.js')

function initialBets(){

    // los guardamos en la base de datos
    bet.forEach(b => saveBetDB(b));
}

module.exports = initialBets;