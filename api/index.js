require('dotenv').config();

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const getApi = require('./src/requestAPI');
const createUser = require('./src/createUsersDB/index.js')
const createBet = require('./src/createBetsDB/index.js')
const createOrder = require('./src/createOrdersDB/index.js')
const createDeposit = require('./src/createDepositDB/index.js')
const createReviewsDB = require('./src/createReviewsDB/index.js')
const createWithdrawDB = require('./src/createWithdrawDB/index.js')

const port = process.env.PORT || 3001;
 
conn.sync({ force: true }).then(()=>{ 
    // Traer datos a la DB
    getApi();
    // Crear usuarios en la DB
    createUser();
    //Crear ordenes en la DB
    createOrder();

    //Crear depositos en la DB
    createDeposit();

    //Crear apuetas en la DB
    createBet();

    //Crear reviews en la DB
    createReviewsDB()

    //Crear retiros en la DB
    createWithdrawDB()
    
    // Iniciamos el servidor
    server.listen(port, ()=>{
        console.log(`Server running on port ${port}`);
    });
});