"use strict";
const babylonToEspree = require("babel-eslint/lib/babylon-to-espree");
const babylonConverter = require('./convertNodes');
const {
    parseSync: parse,
    tokTypes: tt,
    traverse,
    loadPartialConfig,
} = require("@babel/core");

module.exports = function(code, ast) {

    ast = babylonConverter(ast);
    babylonToEspree(ast, traverse, tt, code);

    return ast;
};