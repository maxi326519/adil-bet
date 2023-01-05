const saveDB = require("./saveDB");

const getData = require('./getData')

function initialMatch(){
    // Nos traemos los matchs
    const matchs = getData();

    // los guardamos en la base de datos
    matchs.forEach(m => saveDB(m));
}

module.exports = initialMatch;