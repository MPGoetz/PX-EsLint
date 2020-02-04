const b2e_converter = require('./babelParser');
const parse = require('babel-eslint/lib/parse')
const ast = require('./astSource');

let newAST = b2e_converter("var a = { b:3, c:4};", {ecmaFeatures: { jsx: true }})
console.log(JSON.stringify(newAST));