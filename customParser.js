const babylonToEspree = require("./babel-ast-to-espree-ast-converter");
const {tokTypes: tt, traverse} = require("@babel/core");

export function parse(
    code,
    options
) {
    return parseForESLint(code, options).ast;
}

export function parseForESLint(
    code,
    options,
) {
    if (!options || typeof options !== 'object') {
        options = {};
    }
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    // if sourceType is not provided by default eslint expect that it will be set to "script"
    if (options.sourceType !== 'module' && options.sourceType !== 'script') {
        options.sourceType = 'script';
    }
    if (typeof options.ecmaFeatures !== 'object') {
        options.ecmaFeatures = {};
    }

    // TODO hier müssen die Syntax plugins irgendwie geladen werden
    const syntaxPlugins = [];

    const parserOptions = {
            babelrc: false,
            plugins: [...syntaxPlugins],
            presets: [],
            filename: filename,
            sourceFileName: filename,
            moduleIds: false,
            sourceMaps: true,
            compact: false,
            comments: true,
            code: true,
            ast: true,
            resolveModuleSource: undefined
        }
    ;

    // TODO hier muss irgendwie babel geladen werden
    const { ast, services } = babel.transform(code, parserOptions);
    ast.sourceType = options.sourceType;

    babylonToEspree(ast, traverse, tt, code);

    const scopeManager = null;
    const visitorKeys = null;
    // const scopeManager = analyzeScope(ast, options);
    return { ast, services, scopeManager, visitorKeys };
}