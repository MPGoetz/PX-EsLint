"use strict";

const babylonToEspree = require("babel-eslint/lib/babylon-to-espree");
const parse = require("@babel/parser").parse;
const tt = require("@babel/parser").tokTypes;
const traverse = require("@babel/traverse").default;
const codeFrameColumns = require("@babel/code-frame").codeFrameColumns;

module.exports = function(code, options) {
    var opts = {
        codeFrame: options.hasOwnProperty("codeFrame") ? options.codeFrame : true,
        sourceType: options.sourceType,
        allowImportExportEverywhere: options.allowImportExportEverywhere, // consistent with espree
        presets: options.presets,
        allowReturnOutsideFunction: true,
        allowSuperOutsideMethod: true,
        ranges: true,
        tokens: true,
        plugins: (options.plugins ? options.plugins : []).concat([
            "estree",
        ]),
    };

    if( options.jsx) {
        opts.plugins.concat("jsx");
    }

    var ast;
    try {
        ast = parse(code, opts);
    } catch (err) {
        if (err instanceof SyntaxError) {
            err.lineNumber = err.loc.line;
            err.column = err.loc.column;

            if (opts.codeFrame) {
                err.lineNumber = err.loc.line;
                err.column = err.loc.column + 1;

                // remove trailing "(LINE:COLUMN)" acorn message and add in esprima syntax error message start
                err.message =
                    "Line " +
                    err.lineNumber +
                    ": " +
                    err.message.replace(/ \((\d+):(\d+)\)$/, "") +
                    // add codeframe
                    "\n\n" +
                    codeFrameColumns(
                        code,
                        {
                            start: {
                                line: err.lineNumber,
                                column: err.column,
                            },
                        },
                        { highlightCode: true }
                    );
            }
        }

        throw err;
    }

    babylonToEspree(ast, traverse, tt, code);

    return ast;
};
