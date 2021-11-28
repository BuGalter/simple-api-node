const config = require('./config');
const data = require('./test-data');

const express = require('express');
const app = express();

const PORT = process.env.PORT || config.port;

app.options('*', (req, res) => {
  console.log(req.headers);
  res.status(200);
  res.setHeader({'Access-Control-Request-Method': 'GET',
                 'Access-Control-Allow-Headers': 'Content-Type'});
  res.end();
});

app.get('/', (req, res) => {
  console.log(req.headers);
  res.status(200).type('html')
  res.send('<h1 style="color:red;text-align:center;">Hello from simple API</h1>');
});

app.get('/api', (req, res) => {
  console.log(req.headers);
  res.status(200);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200',);
  return res.json(data);
});

app.listen(PORT, config.host, () => {
  console.log(`Simple API listening at http://${config.host}:${PORT}`);
});