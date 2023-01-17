const saveUserDB = require("./saveUserDB.js");

const user = require('./user.js')

function initialUsers(){

    // los guardamos en la base de datos
    user.forEach(u => saveUserDB(u));
}

module.exports = initialUsers;