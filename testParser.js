const b2e_converter = require('./babelParser');
const ast = require('./astSource');
const converter = require('./convertNodes');

//let convertedAST = converter(ast);
let newAST = b2e_converter("var", ast);
console.log(JSON.stringify(newAST));