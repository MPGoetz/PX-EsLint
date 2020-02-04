const b2e_converter = require('./b2e_converter');
const parse = require('babel-eslint/lib/parse')
const ast = require('./ast_source');

let newAST = b2e_converter("var a = { b:3, c:4};", {})
console.log(JSON.stringify(newAST));