const { error } = require('console');
const net = require('net');

const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP, //<IP ADDRESS HERE> 'local host for local' 135.23.222.131
    port: PORT // 50541 local port  - 50542 lighthouse port
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AD");
    setTimeout(() => {
      conn.write("Say: mine");
    }, 3000);
    setTimeout(() => {
      conn.write("Say: yum");
    }, 7000);
  });

  conn.on('data', (data) => {
    console.log('you died cuz you idled');
    conn.end();
  });

  return conn;
};

module.exports = { connect };