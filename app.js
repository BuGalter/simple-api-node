const config = require('./config');
const api = require('./routes/api');

const express = require('express');
const app = express();

const PORT = process.env.PORT || config.port;

app.use('/api', api);

app.listen(PORT, config.host, () => {
  console.log(`Simple API listening at http://${config.host}:${PORT}`);
});