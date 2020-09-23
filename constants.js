const IP = 'localhost';
const PORT = 50541;

const movementCommands = {
  'w': 'up',
  's': 'down', 
  "d": 'right',
  "a": 'left' 
}
const messageCommands = {
  ' ': 'Yum',
  '1': 'I\'m', 
  "2": 'a',
  "3": 'sssssssnnaaaaaake' 
}

module.exports = {
  IP,
  PORT,
  movementCommands,
  messageCommands
};