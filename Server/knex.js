var knexConf = require('./knexConf.js');
var knex = require('knex')(knexConf);

module.exports = knex;