/**
 * app module.
 * The main module of the application in which the configuration, created
 * express app, processing of the main route and starting the server comes.
 * @module simple-api-node/app
 */

const config = require('./config');
const api = require('./routes/api');

const express = require('express');
const app = express();

const PORT = process.env.PORT || config.port;

app.use('/api', api);

app.listen(PORT, config.host, () => {
  console.log(`Simple API listening at http://${config.host}:${PORT}`);
});