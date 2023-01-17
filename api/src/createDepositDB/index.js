const saveDepositDB = require("./saveDepositDB.js");

const Deposit = require('./Deposit.js')

function initialDeposits(){

    // los guardamos en la base de datos
    Deposit.forEach(d => saveDepositDB(d));
}

module.exports = initialDeposits;