const saveWithdrawDB = require("./saveWithdrawDB.js");

const withdraw = require('./withdraw.js')

function initialBets(){

    // los guardamos en la base de datos
    withdraw.forEach(b => saveWithdrawDB(b));
}

module.exports = initialBets;