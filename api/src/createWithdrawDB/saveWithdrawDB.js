const { Withdraw } = require('../db.js');

async function saveWithdrawDB(u){

    const instance = await Withdraw.create({
        status: u.status,
        amount: u.amount,
        document: u.document,
        userId: u.userId,
        phone: u.phone,
        card: u.card,
    });
}

module.exports = saveWithdrawDB;