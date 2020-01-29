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

    ast = addRanges(ast);

    return ast;
};

function addRanges(ast) {
    if (ast.body) {
        if(ast.body.length > 0) {
            ast.body.forEach((element, index) => {
                ast.body[index] = addRanges(element);
            })
        }else {
            ast.body = addRanges(ast.body);
        }
    }
    if(ast.declarations && ast.declarations.length > 0) {
        ast.declarations.forEach( (element, index) => {
            ast.declarations[index] = addRanges(element);
        })
    }
    if(ast.params && ast.params.length > 0) {
        ast.params.forEach( (element, index) => {
            ast.params[index] = addRanges(element);
        })
    }
    if(ast.id) {
        ast.id = addRanges(ast.id);
    }
    if(ast.init) {
        ast.init = addRanges(ast.init);
    }
    if(ast.arguments && ast.arguments.length > 0) {
        ast.arguments.forEach( (element, index) => {
            ast.arguments[index] = addRanges(element);
        })
    }
    if(ast.argument) {
        ast.argument = addRanges(ast.argument);
        ast.argument.left = addRanges(ast.argument.left);
        ast.argument.right = addRanges(ast.argument.right)
    }
    if(ast.expression) {
        ast.expression = addRanges(ast.expression);
    }
    if(ast.callee) {
        ast.callee = addRanges(ast.callee);
    }
    if(ast.object) {
        ast.object = addRanges(ast.object);
    }

    if(ast.start && ast.end) {
        ast.range = [ast.start, ast.end];
    }else if (!ast.range){
        ast.range = [0, 0];
    }
    return ast;
}
