const { stdin } = require('process');

const { movementCommands, messageCommands } = require('./constants');

let connection;
let moveCommand = function(key) {
  return movementCommands[key]
}
let messageCommand = function(key) {
  return messageCommands[key]
}
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
    let direction = moveCommand(key);
    let messages = messageCommand(key);
    if (key === '\u0003') { // '\\q\n'
      process.exit();
    } 
    if(direction) {
      connection.write(`Move: ${direction}`)
    }
    if (messages) {
      connection.write(`Say: ${messages}`);
    }
  });


module.exports = { setupInput };