"use strict";

// TODO browserify cannot find these files
const babylonToEspree = require("babel-eslint/lib/babylon-to-espree");
const {
    parseSync: parse,
    tokTypes: tt,
    traverse,
    loadPartialConfig,
} = require("@babel/core");

module.exports = function(code, ast) {

    babylonToEspree(ast, traverse, tt, code);

    return ast;
};
