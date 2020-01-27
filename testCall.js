const b2e_converter = require('./b2e_converter');
//const b2e_converter = require('build/b2e_converter');
const parse = require('babel-eslint/lib/parse')
const ast = require('./astSource');

let newAST = parse("var a = 3;", {});
newAST = b2e_converter("var a = 3;", ast)
console.log(newAST);