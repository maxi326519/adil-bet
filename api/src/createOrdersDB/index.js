const saveOrderDB = require("./saveOrderDB.js");

const order = require('./order.js')

function initialOrders(){

    // los guardamos en la base de datos
    order.forEach(o => saveOrderDB(o));
}

module.exports = initialOrders;