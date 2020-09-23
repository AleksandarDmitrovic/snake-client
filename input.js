const { stdin } = require('process');


let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8"); 
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = ('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') { // '\\q\n'
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up'); 
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === ' ') {
      connection.write('Say: yum');
    }
  });


module.exports = { setupInput };