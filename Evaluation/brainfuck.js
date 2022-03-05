const Brainfuck = require('brainfuck-node');
const brainfuck = new Brainfuck();
 
let result = brainfuck.execute(process.argv[2], 'Hello World')
console.log(result)