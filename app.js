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
    'Access-Control-Allow-Headers': 'API-Key, Content-Type',
    'Access-Control-Allow-Origin': config.clientHost
});
  res.end();
});

app.get('/api', (req, res) => {
  console.log(req.headers);
  res.setHeader('Access-Control-Allow-Origin', config.clientHost);
  if (req.headers['api-key'] === config.apiKey) {
    res.status(200);
    return res.json(data);
  };
  res.status(403);
  res.end();  
});

app.get('*', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.sendFile(path.resolve(__dirname, 'README.md'));
});


app.listen(PORT, config.host, () => {
  console.log(`Simple API listening at http://${config.host}:${PORT}`);
});