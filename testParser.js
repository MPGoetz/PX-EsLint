const babelParser = require('./babelParser');
const ast = require('./astSource');

let newAST = babelParser("const a = {\n" +
    "  b: {c: true},\n" +
    "  d() {return 4},\n" +
    "  get e() {return 6},\n" +
    "  f: true\n" +
    "};", ast);
console.log(JSON.stringify(newAST));