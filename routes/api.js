const config = require('/config');
const data = require('/test-data');

const express = require('express');
const router = express.Router();

app.use((req, res, next) => {
  res.set({
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Allow-Headers': 'API-Key, Content-Type',
    'Access-Control-Allow-Origin': config.clientHost
});
  next();
});

router.route('api')
  .options((req, res) => {
    res.status(200);
    res.end();
  })
  .get((req, res) => {
    if (req.headers['api-key'] === config.apiKey) {
      res.status(200);
      return res.json(data);
    };
    res.status(403);
    res.end();  
  })