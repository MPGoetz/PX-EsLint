"use strict";

const babylonToEspree = require("babel-eslint/lib/babylon-to-espree");
const {
    parseSync: parse,
    tokTypes: tt,
    traverse,
    loadPartialConfig,
} = require("@babel/core");

module.exports = function(code, options) {
    let opts = {
        plugins: options.plugins,
        sourceType: options.sourceType,
        filename: options.filePath,
        babelrc: options.babelrc,
        parserOpts: {
            allowImportExportEverywhere: options.allowImportExportEverywhere, // consistent with espree
            allowReturnOutsideFunction: true,
            allowSuperOutsideMethod: true,
            ranges: true,
            tokens: true,
            plugins: ["estree"],
        },
        caller: {
            name: "babel-eslint",
        },
    };

    let ast;

    try {
        ast = parse(code, opts);
    } catch (err) {
        if (err instanceof SyntaxError) {
            err.lineNumber = err.loc.line;
            err.column = err.loc.column;
        }

        throw err;
    }
    console.log(JSON.stringify(ast));
    babylonToEspree(ast, traverse, tt, code);

    return ast;
};
