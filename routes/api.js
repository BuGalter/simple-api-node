const config = require('/config');

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
