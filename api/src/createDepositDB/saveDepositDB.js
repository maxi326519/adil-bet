const { Deposit } = require('../db.js');

async function saveDepositDB(u){

    const instance = await Deposit.create({
        status: u.status,
        amount: u.amount,
        userId: u.userId,
    });
}

module.exports = saveDepositDB;