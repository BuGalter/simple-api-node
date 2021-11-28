const config = require('./config');
const data = require('./test-data');

const path = require('path');

const express = require('express');
const app = express();

const PORT = process.env.PORT || config.port;

app.options('*', (req, res) => {
  res.status(200);
  res.set({
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
});
  res.end();
});

app.get('/api', (req, res) => {
  res.status(200);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200',);
  return res.json(data);
});

app.get('*', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.sendFile(path.resolve(__dirname, 'README.md'));
});


app.listen(PORT, config.host, () => {
  console.log(`Simple API listening at http://${config.host}:${PORT}`);
});