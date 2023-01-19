const { User } = require('../db.js');

async function saveUserDB(u){

    const instance = await User.create({
        name: u.name,
        userName: u.userName,
        email: u.email,
        password: u.password,
        phone: u.phone,
        isActive: u.isActive,
        wallet: u.wallet,
        isAdmin: u.isAdmin,
    });
}

module.exports = saveUserDB;