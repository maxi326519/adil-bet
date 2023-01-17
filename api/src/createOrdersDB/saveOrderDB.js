const { Order } = require('../db.js');

async function saveOrderDB(u){

    const instance = await Order.create({
        status: u.status,
        amount: u.amount,
        userId: u.userId,
    });
}

module.exports = saveOrderDB;