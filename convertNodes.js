"use strict";

module.exports = function(ast) {

    let convertedAst = fileNode(ast);
    return convertedAst;
};


function fileNode(ast) {
    ast.range = [ast.start, ast.end];
    ast.program = programNode(ast.program);
    return ast;
}

function programNode(ast) {
    //ast.range = [ast.start, ast.end];
    ast.body.forEach( (node, index) => {
        switch (node.type) {
            case "VariableDeclaration":
                ast.body[index] = variableDeclarationNode(node);

        }
    });
    return ast;
}

function variableDeclarationNode(ast) {
    //ast.range = [ast.start, ast.end];
    if (ast.declarations) {
        ast.declarations.forEach( (node, index) => {
            if (node.type === "VariableDeclarator") {
                ast.declarations[index].range = [node.start, node.end];
                if (node.init && node.init.type === "ObjectExpression") {
                    ast.declarations[index].init = objectExpressionNode(node.init);
                }
            }
        });
    }
    return ast;
}

function objectExpressionNode(ast) {
    //ast.range = [ast.start, ast.end];
    ast.properties.forEach( (node, index) => {
        ast.properties[index] = propertyNode(node);
    });
    return ast;
}

function propertyNode(ast) {
    switch (ast.type) {
        case "ObjectProperty":
            ast.kind = "init";
            if (ast.value && ast.value.type === "ObjectExpression") {
                ast.value = objectExpressionNode(ast.value);
            }else {
                ast.value.type = "Literal"
                //ast.value.range = [ast.value.start, ast.value.end];
            }
            break;
        case "ObjectMethod":
            if (!ast.kind || ast.kind === "method") {
                ast.kind = "init";
            }
            ast.value = {
              type: "FunctionExpression",
              start: ast.start,
              end: ast.end,
              range: [ast.start, ast.end],
              id: ast.id,
              generator: ast.generator,
              expression: ast.expression,
              async: ast.async,
              params: ast.params,
              body: ast.body
            };
    }
    //ast.range = [ast.start, ast.end];
    ast.type = "Property";
    return ast;
}