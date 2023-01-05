const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const getApi = require('./src/requestAPI');
 
conn.sync({ force: true }).then(()=>{ 
    // Traer datos a la DB
    getApi();
    
    // Iniciamos el servidor
    server.listen(3001, ()=>{
        console.log('%s listening at 3001');
    });
});