const config = require('./config');
const data = require('./test-data');

const express = require('express');
const app = express();

const PORT = process.env.PORT || config.port;

app.get('/', (req, res) => {
  console.log(req.headers);
  res.status(200).type('html')
  res.send('<h1 style="color:red;text-align:center;">Hello from simple API</h1>');
});

app.listen(PORT, config.host, () => {
  console.log(`Simple API listening at http://${config.host}:${PORT}`);
});