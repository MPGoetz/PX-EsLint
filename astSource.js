module.exports = {
    "type": "File",
    "start": 0,
    "end": 10,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 10}},
    "range": [0, 10],
    "errors": [],
    "program": {
        "type": "Program",
        "start": 0,
        "end": 10,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 10}},
        "range": [0, 10],
        "sourceType": "script",
        "interpreter": null,
        "body": [{
            "type": "VariableDeclaration",
            "start": 0,
            "end": 10,
            "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 10}},
            "range": [0, 10],
            "declarations": [{
                "type": "VariableDeclarator",
                "start": 4,
                "end": 9,
                "loc": {"start": {"line": 1, "column": 4}, "end": {"line": 1, "column": 9}},
                "range": [4, 9],
                "id": {
                    "type": "Identifier",
                    "start": 4,
                    "end": 5,
                    "loc": {"start": {"line": 1, "column": 4}, "end": {"line": 1, "column": 5}, "identifierName": "a"},
                    "range": [4, 5],
                    "name": "a"
                },
                "init": {
                    "type": "Literal",
                    "start": 8,
                    "end": 9,
                    "loc": {"start": {"line": 1, "column": 8}, "end": {"line": 1, "column": 9}},
                    "range": [8, 9],
                    "value": 3,
                    "raw": "3"
                }
            }],
            "kind": "var"
        }]
    },
    "comments": [],
    "tokens": [{
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 0,
        "end": 3,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 3}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "a",
        "start": 4,
        "end": 5,
        "loc": {"start": {"line": 1, "column": 4}, "end": {"line": 1, "column": 5}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 6,
        "end": 7,
        "loc": {"start": {"line": 1, "column": 6}, "end": {"line": 1, "column": 7}}
    }, {
        "type": {
            "label": "num",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "value": 3, "start": 8, "end": 9, "loc": {"start": {"line": 1, "column": 8}, "end": {"line": 1, "column": 9}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 9, "end": 10, "loc": {"start": {"line": 1, "column": 9}, "end": {"line": 1, "column": 10}}
    }, {
        "type": {
            "label": "eof",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 10, "end": 10, "loc": {"start": {"line": 1, "column": 10}, "end": {"line": 1, "column": 10}}
    }]
}