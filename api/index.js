require('dotenv').config();

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const getApi = require('./src/requestAPI');

const port = process.env.PORT || 3001;
 
conn.sync({ force: false }).then(()=>{ 
    // Traer datos a la DB
   /*  getApi(); */
    
    // Iniciamos el servidor
    server.listen(port, ()=>{
        console.log(`Server running on port ${port}`);
    });
});