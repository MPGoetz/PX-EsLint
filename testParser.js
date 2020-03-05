const babelParser = require('./babel6Parser');
const ast = require('./astSource');
const t = require("babel-types");
const tt = require("babylon").tokTypes;
const traverse = require("babel-traverse").default;

let newAST = babelParser(ast, traverse, tt, t, "const a = {\n" +
    "  b: {c: true},\n" +
    "  d() {return 4},\n" +
    "  get e() {return 6},\n" +
    "  f: true\n" +
    "};");
console.log(JSON.stringify(newAST));

//node -e "var c = { window: {} }; require('vm').runInNewContext(require('fs').readFileSync('build/babel6Parser_bundle.js'), c); console.log(c)"