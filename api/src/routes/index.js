const fs = require('fs');
const path = require('path');

let routesFiles = [];
let routes = []

// Read router directories
fs.readdirSync(path.join(__dirname, "/"))
.filter(dir => !dir.includes('.'))
.forEach(dir => {
    // Read filenames of the routes
    fs.readdirSync(path.join(__dirname, `/${dir}`)).forEach(r => routesFiles.push(`/${dir}/${r}`))
});

// Filter filenames and require the routes
routesFiles = routesFiles.filter(r => r.includes('.js'));
routesFiles.forEach(r => routes.push(require(path.join(__dirname, r))));

module.exports = routes;