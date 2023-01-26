const { Bet } = require('../db.js');

async function saveBetDB(u){

    const instance = await Bet.create({
        status: u.status,
        amount: u.amount,
        betTo: u.betTo,
        multiplier: u.multiplier,
        userId: u.userId,
        orderId: u.orderId,
        matchId: u.matchId,
    });
}

module.exports = saveBetDB;