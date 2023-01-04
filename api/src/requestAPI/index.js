const saveDB = require("./saveDB");

const getData = require('./getData')

function initialMatch(){
    // Nos traemos los matchs
    const matchs = getData();

    // los guardamos en la base de datos
/*     matchs.forEach(match => saveDB(match)); */
    saveDB(matchs[0]);
}

module.exports = initialMatch;