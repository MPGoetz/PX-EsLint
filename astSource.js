/**
 const a = {
  b: {c: true},
  d() {return 4},
  get e() {return 6},
  f: true
};
 */

module.exports = {
    "type": "File",
    "start": 0,
    "end": 80,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 6,
            "column": 2
        }
    },
    "program": {
        "type": "Program",
        "start": 0,
        "end": 80,
        "loc": {
            "start": {
                "line": 1,
                "column": 0
            },
            "end": {
                "line": 6,
                "column": 2
            }
        },
        "sourceType": "module",
        "body": [
            {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 80,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 6,
                        "column": 2
                    }
                },
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "start": 6,
                        "end": 79,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 6
                            },
                            "end": {
                                "line": 6,
                                "column": 1
                            }
                        },
                        "id": {
                            "type": "Identifier",
                            "start": 6,
                            "end": 7,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 6
                                },
                                "end": {
                                    "line": 1,
                                    "column": 7
                                },
                                "identifierName": "a"
                            },
                            "name": "a"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "start": 10,
                            "end": 79,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 10
                                },
                                "end": {
                                    "line": 6,
                                    "column": 1
                                }
                            },
                            "properties": [
                                {
                                    "type": "ObjectProperty",
                                    "start": 14,
                                    "end": 26,
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 14
                                        }
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 14,
                                        "end": 15,
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 2
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 3
                                            },
                                            "identifierName": "b"
                                        },
                                        "name": "b"
                                    },
                                    "value": {
                                        "type": "ObjectExpression",
                                        "start": 17,
                                        "end": 26,
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 5
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 14
                                            }
                                        },
                                        "properties": [
                                            {
                                                "type": "ObjectProperty",
                                                "start": 18,
                                                "end": 25,
                                                "loc": {
                                                    "start": {
                                                        "line": 2,
                                                        "column": 6
                                                    },
                                                    "end": {
                                                        "line": 2,
                                                        "column": 13
                                                    }
                                                },
                                                "method": false,
                                                "shorthand": false,
                                                "computed": false,
                                                "key": {
                                                    "type": "Identifier",
                                                    "start": 18,
                                                    "end": 19,
                                                    "loc": {
                                                        "start": {
                                                            "line": 2,
                                                            "column": 6
                                                        },
                                                        "end": {
                                                            "line": 2,
                                                            "column": 7
                                                        },
                                                        "identifierName": "c"
                                                    },
                                                    "name": "c"
                                                },
                                                "value": {
                                                    "type": "BooleanLiteral",
                                                    "start": 21,
                                                    "end": 25,
                                                    "loc": {
                                                        "start": {
                                                            "line": 2,
                                                            "column": 9
                                                        },
                                                        "end": {
                                                            "line": 2,
                                                            "column": 13
                                                        }
                                                    },
                                                    "value": true
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "ObjectMethod",
                                    "start": 30,
                                    "end": 44,
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 16
                                        }
                                    },
                                    "method": true,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 30,
                                        "end": 31,
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 2
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 3
                                            },
                                            "identifierName": "d"
                                        },
                                        "name": "d"
                                    },
                                    "kind": "method",
                                    "id": null,
                                    "generator": false,
                                    "expression": false,
                                    "async": false,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "start": 34,
                                        "end": 44,
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 6
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 16
                                            }
                                        },
                                        "body": [
                                            {
                                                "type": "ReturnStatement",
                                                "start": 35,
                                                "end": 43,
                                                "loc": {
                                                    "start": {
                                                        "line": 3,
                                                        "column": 7
                                                    },
                                                    "end": {
                                                        "line": 3,
                                                        "column": 15
                                                    }
                                                },
                                                "argument": {
                                                    "type": "NumericLiteral",
                                                    "start": 42,
                                                    "end": 43,
                                                    "loc": {
                                                        "start": {
                                                            "line": 3,
                                                            "column": 14
                                                        },
                                                        "end": {
                                                            "line": 3,
                                                            "column": 15
                                                        }
                                                    },
                                                    "extra": {
                                                        "rawValue": 4,
                                                        "raw": "4"
                                                    },
                                                    "value": 4
                                                }
                                            }
                                        ],
                                        "directives": []
                                    }
                                },
                                {
                                    "type": "ObjectMethod",
                                    "start": 48,
                                    "end": 66,
                                    "loc": {
                                        "start": {
                                            "line": 4,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 4,
                                            "column": 20
                                        }
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 52,
                                        "end": 53,
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 6
                                            },
                                            "end": {
                                                "line": 4,
                                                "column": 7
                                            },
                                            "identifierName": "e"
                                        },
                                        "name": "e"
                                    },
                                    "kind": "get",
                                    "variance": null,
                                    "variancePos": 52,
                                    "id": null,
                                    "generator": false,
                                    "expression": false,
                                    "async": false,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "start": 56,
                                        "end": 66,
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 10
                                            },
                                            "end": {
                                                "line": 4,
                                                "column": 20
                                            }
                                        },
                                        "body": [
                                            {
                                                "type": "ReturnStatement",
                                                "start": 57,
                                                "end": 65,
                                                "loc": {
                                                    "start": {
                                                        "line": 4,
                                                        "column": 11
                                                    },
                                                    "end": {
                                                        "line": 4,
                                                        "column": 19
                                                    }
                                                },
                                                "argument": {
                                                    "type": "NumericLiteral",
                                                    "start": 64,
                                                    "end": 65,
                                                    "loc": {
                                                        "start": {
                                                            "line": 4,
                                                            "column": 18
                                                        },
                                                        "end": {
                                                            "line": 4,
                                                            "column": 19
                                                        }
                                                    },
                                                    "extra": {
                                                        "rawValue": 6,
                                                        "raw": "6"
                                                    },
                                                    "value": 6
                                                }
                                            }
                                        ],
                                        "directives": []
                                    }
                                },
                                {
                                    "type": "ObjectProperty",
                                    "start": 70,
                                    "end": 77,
                                    "loc": {
                                        "start": {
                                            "line": 5,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 5,
                                            "column": 9
                                        }
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 70,
                                        "end": 71,
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 2
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 3
                                            },
                                            "identifierName": "f"
                                        },
                                        "name": "f"
                                    },
                                    "value": {
                                        "type": "BooleanLiteral",
                                        "start": 73,
                                        "end": 77,
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 5
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 9
                                            }
                                        },
                                        "value": true
                                    }
                                }
                            ]
                        }
                    }
                ],
                "kind": "const"
            }
        ],
        "directives": []
    },
    "comments": [],
    "tokens": [
        {
            "type": {
                "label": "const",
                "keyword": "const",
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
            "value": "const",
            "start": 0,
            "end": 5,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 5
                }
            }
        },
        {
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
            "start": 6,
            "end": 7,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 6
                },
                "end": {
                    "line": 1,
                    "column": 7
                }
            }
        },
        {
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
            "start": 8,
            "end": 9,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            }
        },
        {
            "type": {
                "label": "{",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 10,
            "end": 11,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 10
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            }
        },
        {
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
            "value": "b",
            "start": 14,
            "end": 15,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 2
                },
                "end": {
                    "line": 2,
                    "column": 3
                }
            }
        },
        {
            "type": {
                "label": ":",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "start": 15,
            "end": 16,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 3
                },
                "end": {
                    "line": 2,
                    "column": 4
                }
            }
        },
        {
            "type": {
                "label": "{",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 17,
            "end": 18,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 5
                },
                "end": {
                    "line": 2,
                    "column": 6
                }
            }
        },
        {
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
            "value": "c",
            "start": 18,
            "end": 19,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 6
                },
                "end": {
                    "line": 2,
                    "column": 7
                }
            }
        },
        {
            "type": {
                "label": ":",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "start": 19,
            "end": 20,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 7
                },
                "end": {
                    "line": 2,
                    "column": 8
                }
            }
        },
        {
            "type": {
                "label": "true",
                "keyword": "true",
                "beforeExpr": false,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "true",
            "start": 21,
            "end": 25,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 9
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            }
        },
        {
            "type": {
                "label": "}",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 25,
            "end": 26,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 13
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            }
        },
        {
            "type": {
                "label": ",",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "start": 26,
            "end": 27,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 14
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        },
        {
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
            "value": "d",
            "start": 30,
            "end": 31,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 3,
                    "column": 3
                }
            }
        },
        {
            "type": {
                "label": "(",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 31,
            "end": 32,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 3
                },
                "end": {
                    "line": 3,
                    "column": 4
                }
            }
        },
        {
            "type": {
                "label": ")",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 32,
            "end": 33,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 5
                }
            }
        },
        {
            "type": {
                "label": "{",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 34,
            "end": 35,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 6
                },
                "end": {
                    "line": 3,
                    "column": 7
                }
            }
        },
        {
            "type": {
                "label": "return",
                "keyword": "return",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "return",
            "start": 35,
            "end": 41,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 7
                },
                "end": {
                    "line": 3,
                    "column": 13
                }
            }
        },
        {
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
            },
            "value": 4,
            "start": 42,
            "end": 43,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 14
                },
                "end": {
                    "line": 3,
                    "column": 15
                }
            }
        },
        {
            "type": {
                "label": "}",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 43,
            "end": 44,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 15
                },
                "end": {
                    "line": 3,
                    "column": 16
                }
            }
        },
        {
            "type": {
                "label": ",",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "start": 44,
            "end": 45,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 16
                },
                "end": {
                    "line": 3,
                    "column": 17
                }
            }
        },
        {
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
            "value": "get",
            "start": 48,
            "end": 51,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 5
                }
            }
        },
        {
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
            "value": "e",
            "start": 52,
            "end": 53,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 6
                },
                "end": {
                    "line": 4,
                    "column": 7
                }
            }
        },
        {
            "type": {
                "label": "(",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 53,
            "end": 54,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 7
                },
                "end": {
                    "line": 4,
                    "column": 8
                }
            }
        },
        {
            "type": {
                "label": ")",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 54,
            "end": 55,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 9
                }
            }
        },
        {
            "type": {
                "label": "{",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 56,
            "end": 57,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 10
                },
                "end": {
                    "line": 4,
                    "column": 11
                }
            }
        },
        {
            "type": {
                "label": "return",
                "keyword": "return",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "return",
            "start": 57,
            "end": 63,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 11
                },
                "end": {
                    "line": 4,
                    "column": 17
                }
            }
        },
        {
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
            },
            "value": 6,
            "start": 64,
            "end": 65,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 18
                },
                "end": {
                    "line": 4,
                    "column": 19
                }
            }
        },
        {
            "type": {
                "label": "}",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 65,
            "end": 66,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 19
                },
                "end": {
                    "line": 4,
                    "column": 20
                }
            }
        },
        {
            "type": {
                "label": ",",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "start": 66,
            "end": 67,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 20
                },
                "end": {
                    "line": 4,
                    "column": 21
                }
            }
        },
        {
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
            "value": "f",
            "start": 70,
            "end": 71,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 3
                }
            }
        },
        {
            "type": {
                "label": ":",
                "beforeExpr": true,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "start": 71,
            "end": 72,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 3
                },
                "end": {
                    "line": 5,
                    "column": 4
                }
            }
        },
        {
            "type": {
                "label": "true",
                "keyword": "true",
                "beforeExpr": false,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "true",
            "start": 73,
            "end": 77,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 5
                },
                "end": {
                    "line": 5,
                    "column": 9
                }
            }
        },
        {
            "type": {
                "label": "}",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "start": 78,
            "end": 79,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 1
                }
            }
        },
        {
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
            },
            "start": 79,
            "end": 80,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 1
                },
                "end": {
                    "line": 6,
                    "column": 2
                }
            }
        },
        {
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
            },
            "start": 80,
            "end": 80,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 2
                },
                "end": {
                    "line": 6,
                    "column": 2
                }
            }
        }
    ]
};