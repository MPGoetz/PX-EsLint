/**
var a = 3;
function plus(x){
    return this + x;
}//a::plus(4);
//here is a comment
 */

module.exports = {
    "type": "File",
    "start": 0,
    "end": 82,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 6,
            "column": 19
        }
    },
    "program": {
        "type": "Program",
        "start": 0,
        "end": 82,
        "loc": {
            "start": {
                "line": 1,
                "column": 0
            },
            "end": {
                "line": 6,
                "column": 19
            }
        },
        "sourceType": "module",
        "body": [
            {
                "type": "VariableDeclaration",
                "start": 1,
                "end": 11,
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 0
                    },
                    "end": {
                        "line": 2,
                        "column": 10
                    }
                },
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "start": 5,
                        "end": 10,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 9
                            }
                        },
                        "id": {
                            "type": "Identifier",
                            "start": 5,
                            "end": 6,
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 4
                                },
                                "end": {
                                    "line": 2,
                                    "column": 5
                                }
                            },
                            "name": "a"
                        },
                        "init": {
                            "type": "Literal",
                            "start": 9,
                            "end": 10,
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 8
                                },
                                "end": {
                                    "line": 2,
                                    "column": 9
                                }
                            },
                            "value": 3,
                            "rawValue": 3,
                            "raw": "3"
                        }
                    }
                ],
                "kind": "var"
            },
            {
                "type": "FunctionDeclaration",
                "start": 13,
                "end": 51,
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 0
                    },
                    "end": {
                        "line": 5,
                        "column": 1
                    }
                },
                "id": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 26,
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 9
                        },
                        "end": {
                            "line": 3,
                            "column": 13
                        }
                    },
                    "name": "plus"
                },
                "generator": false,
                "expression": false,
                "async": false,
                "params": [
                    {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
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
                        "name": "x"
                    }
                ],
                "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 51,
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 16
                        },
                        "end": {
                            "line": 5,
                            "column": 1
                        }
                    },
                    "body": [
                        {
                            "type": "ReturnStatement",
                            "start": 33,
                            "end": 49,
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 2
                                },
                                "end": {
                                    "line": 4,
                                    "column": 18
                                }
                            },
                            "argument": {
                                "type": "BinaryExpression",
                                "start": 40,
                                "end": 48,
                                "loc": {
                                    "start": {
                                        "line": 4,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 17
                                    }
                                },
                                "left": {
                                    "type": "ThisExpression",
                                    "start": 40,
                                    "end": 44,
                                    "loc": {
                                        "start": {
                                            "line": 4,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 4,
                                            "column": 13
                                        }
                                    }
                                },
                                "operator": "+",
                                "right": {
                                    "type": "Identifier",
                                    "start": 47,
                                    "end": 48,
                                    "loc": {
                                        "start": {
                                            "line": 4,
                                            "column": 16
                                        },
                                        "end": {
                                            "line": 4,
                                            "column": 17
                                        }
                                    },
                                    "name": "x"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "ExpressionStatement",
                "start": 51,
                "end": 62,
                "loc": {
                    "start": {
                        "line": 5,
                        "column": 1
                    },
                    "end": {
                        "line": 5,
                        "column": 12
                    }
                },
                "expression": {
                    "type": "CallExpression",
                    "start": 51,
                    "end": 61,
                    "loc": {
                        "start": {
                            "line": 5,
                            "column": 1
                        },
                        "end": {
                            "line": 5,
                            "column": 11
                        }
                    },
                    "callee": {
                        "type": "BindExpression",
                        "start": 51,
                        "end": 58,
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 1
                            },
                            "end": {
                                "line": 5,
                                "column": 8
                            }
                        },
                        "object": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 52,
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 1
                                },
                                "end": {
                                    "line": 5,
                                    "column": 2
                                }
                            },
                            "name": "a"
                        },
                        "callee": {
                            "type": "Identifier",
                            "start": 54,
                            "end": 58,
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 4
                                },
                                "end": {
                                    "line": 5,
                                    "column": 8
                                }
                            },
                            "name": "plus"
                        }
                    },
                    "arguments": [
                        {
                            "type": "Literal",
                            "start": 59,
                            "end": 60,
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 9
                                },
                                "end": {
                                    "line": 5,
                                    "column": 10
                                }
                            },
                            "value": 4,
                            "rawValue": 4,
                            "raw": "4"
                        }
                    ]
                },
                "trailingComments": [
                    {
                        "type": "CommentLine",
                        "value": "here is a comment",
                        "start": 63,
                        "end": 82,
                        "loc": {
                            "start": {
                                "line": 6,
                                "column": 0
                            },
                            "end": {
                                "line": 6,
                                "column": 19
                            }
                        },
                        "range": [
                            63,
                            82
                        ]
                    }
                ]
            }
        ]
    },
    "comments": [
        {
            "type": "CommentLine",
            "value": "here is a comment",
            "start": 63,
            "end": 82,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 19
                }
            },
            "range": [
                63,
                82
            ]
        }
    ],
    "tokens": [
        {
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
            "start": 1,
            "end": 4,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 3
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
                "binop": null,
                "updateContext": null
            },
            "value": "a",
            "start": 5,
            "end": 6,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 5
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
            "start": 7,
            "end": 8,
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
            "value": 3,
            "start": 9,
            "end": 10,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 9
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
            "start": 10,
            "end": 11,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 9
                },
                "end": {
                    "line": 2,
                    "column": 10
                }
            }
        },
        {
            "type": {
                "label": "function",
                "keyword": "function",
                "beforeExpr": false,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null
            },
            "value": "function",
            "start": 13,
            "end": 21,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 8
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
                "binop": null,
                "updateContext": null
            },
            "value": "plus",
            "start": 22,
            "end": 26,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 9
                },
                "end": {
                    "line": 3,
                    "column": 13
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
            "start": 26,
            "end": 27,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 13
                },
                "end": {
                    "line": 3,
                    "column": 14
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
                "binop": null,
                "updateContext": null
            },
            "value": "x",
            "start": 27,
            "end": 28,
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
            "start": 28,
            "end": 29,
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
            "start": 29,
            "end": 30,
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
            "start": 33,
            "end": 39,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 8
                }
            }
        },
        {
            "type": {
                "label": "this",
                "keyword": "this",
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
            "value": "this",
            "start": 40,
            "end": 44,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 9
                },
                "end": {
                    "line": 4,
                    "column": 13
                }
            }
        },
        {
            "type": {
                "label": "+/-",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": true,
                "postfix": false,
                "binop": 9,
                "updateContext": null
            },
            "value": "+",
            "start": 45,
            "end": 46,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 14
                },
                "end": {
                    "line": 4,
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
                "binop": null,
                "updateContext": null
            },
            "value": "x",
            "start": 47,
            "end": 48,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 16
                },
                "end": {
                    "line": 4,
                    "column": 17
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
            "start": 48,
            "end": 49,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 17
                },
                "end": {
                    "line": 4,
                    "column": 18
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
            "start": 50,
            "end": 51,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 1
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
                "binop": null,
                "updateContext": null
            },
            "value": "a",
            "start": 51,
            "end": 52,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 1
                },
                "end": {
                    "line": 5,
                    "column": 2
                }
            }
        },
        {
            "type": {
                "label": "::",
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
            "value": "::",
            "start": 52,
            "end": 54,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 4
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
                "binop": null,
                "updateContext": null
            },
            "value": "plus",
            "start": 54,
            "end": 58,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 8
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
            "start": 58,
            "end": 59,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 9
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
            "start": 59,
            "end": 60,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 9
                },
                "end": {
                    "line": 5,
                    "column": 10
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
            "start": 60,
            "end": 61,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 10
                },
                "end": {
                    "line": 5,
                    "column": 11
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
            "start": 61,
            "end": 62,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 11
                },
                "end": {
                    "line": 5,
                    "column": 12
                }
            }
        },
        {
            "type": "CommentLine",
            "value": "here is a comment",
            "start": 63,
            "end": 82,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 19
                }
            },
            "range": [
                63,
                82
            ]
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
            "start": 82,
            "end": 82,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 19
                },
                "end": {
                    "line": 6,
                    "column": 19
                }
            }
        }
    ]
};