/**
 * api module.
 * Module contains routes for api.
 * @module simple-api-node/routes/api
 */

const config = require('../config');
const data = require('../test-data');

const path = require('path');

const express = require('express');
const router = express.Router();

/**
 * Middleware for setting response headers.
 */
router.use((req, res, next) => {
  res.set({
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Allow-Headers': 'API-Key, Content-Type',
    'Access-Control-Allow-Origin': config.clientHost
});
  next();
});

/**
 * Route for main url /api.
 * @return {response} Headers with which api is ready to work on options request
 * and data in json format on get request, if transmitted correct api-key.
 */
router.route('/')
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
  });

/**
 * Route for url /api/about.
 * @return {file} Returns readme file on get request.
 */
router.get('/about', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.sendFile(path.resolve(__dirname, '../README.md'));
});

module.exports = router;