/**
 * config module.
 * Module contains configuration aplications.
 * @module simple-api-node/config
 */

/**
 * Object contain configuration aplications.
 * @return {object} Application configuration data.
 */
const config = {
  host: '127.0.0.1',
  port: 7000,
  clientHost: 'http://localhost:4200',
  apiKey: 'secret'
};

module.exports = config;