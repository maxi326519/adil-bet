const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('./db.js');
const cors = require ('cors');

// Import Routes
const routes = require('./routes');

// Server init
const server = express();

// Cors options
const corsOptions = {
    origin: '*' /* 'http://localhost:3000' */,
    credentials: true,
    methods: 'GET, PATCH, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
};

// Middlewares
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(cors(corsOptions));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' /* 'http://localhost:3000' */); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, OPTIONS, PUT, DELETE');
    next();
});

// Add Routes
routes.forEach( r => server.use(r));

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    res.status(status).send(message);
})

module.exports = server;