const config = require('./config');
const data = require('./test-data');

const path = require('path');

const express = require('express');
const app = express();

const PORT = process.env.PORT || config.port;

app.options('*', (req, res) => {
  res.status(200);
  res.end();
});

app.get('/api', (req, res) => {
  if (req.headers['api-key'] === config.apiKey) {
    res.status(200);
    return res.json(data);
  };
  res.status(403);
  res.end();  
});

app.all('*', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.sendFile(path.resolve(__dirname, 'README.md'));
});


app.listen(PORT, config.host, () => {
  console.log(`Simple API listening at http://${config.host}:${PORT}`);
});