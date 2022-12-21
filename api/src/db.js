require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/adilBetDb`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Bet,Match, Order, User } = sequelize.models;


//RELACIONES MUCHOS A MUCHOS

console.log(sequelize.models);
Bet.belongsToMany(Match, {through: "Bet_Match"});
Match.belongsToMany(Bet,{through: "Bet_Match"})

Order.belongsToMany(Match, {through: "Order_Match"});
Match.belongsToMany(Order,{through: "Order_Match"})

User.belongsToMany(Match, {through: "User_Match"});
Match.belongsToMany(User,{through: "User_Match"})

//RELACIONES 1 A 1

Order.hasOne(Bet, { foreignKey: 'Bet_Order' });
Bet.belongsTo(Order, { foreignKey: 'Bet_Order' });

//RELACIONES 1 A MUCHOS

Match.hasMany(Bet, { foreignKey: 'Match_Bet' });
Bet.belongsTo(Match, { foreignKey: 'Match_Bet' });

User.hasMany(Order, { foreignKey: 'Order_User' });
Order.belongsTo(User, { foreignKey: 'Order_User' });

User.hasMany(Bet, { foreignKey: 'Bet_User' });
Bet.belongsTo(User, { foreignKey: 'Bet_User' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
