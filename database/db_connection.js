const { Client, Pool } = require('pg');

const pool = new Pool({
  user: 'annasarafanova',
  password: 'password',
  host: 'localhost',
  database: 'nba',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err, client) => {
  console.error('ERROR: ', err);
  process.exit(-1);
});

module.exports = pool;
