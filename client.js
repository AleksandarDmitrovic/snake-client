const { error } = require('console');
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '', //<IP ADDRESS HERE>
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });


  conn.on('data', (data) => {
    console.log('you died cuz you idled');
    conn.end();
  });

  return conn;
};

module.exports = { connect };