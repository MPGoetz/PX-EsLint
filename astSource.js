/**
 var object = {
  get k() {return 3},
  foo: "bar",
  fizz: "buzz"
}
 */

module.exports = {
    "type": "File",
    "start": 0,
    "end": 63,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 5,
            "column": 1
        }
    },
    "program": {
        "type": "Program",
        "start": 0,
        "end": 63,
        "loc": {
            "start": {
                "line": 1,
                "column": 0
            },
            "end": {
                "line": 5,
                "column": 1
            }
        },
        "sourceType": "module",
        "body": [
            {
                "type": "VariableDeclaration",
                "start": 0,
                "end": 63,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 5,
                        "column": 1
                    }
                },
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "start": 4,
                        "end": 63,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 5,
                                "column": 1
                            }
                        },
                        "id": {
                            "type": "Identifier",
                            "start": 4,
                            "end": 10,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 10
                                },
                                "identifierName": "object"
                            },
                            "name": "object"
                        },
                        "init": {
                            "type": "ObjectExpression",
                            "start": 13,
                            "end": 63,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 5,
                                    "column": 1
                                }
                            },
                            "properties": [
                                {
                                    "type": "ObjectProperty",
                                    "start": 17,
                                    "end": 31,
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 16
                                        }
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 17,
                                        "end": 18,
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 2
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 3
                                            },
                                            "identifierName": "a"
                                        },
                                        "name": "a"
                                    },
                                    "value": {
                                        "type": "ObjectExpression",
                                        "start": 20,
                                        "end": 31,
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 5
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 16
                                            }
                                        },
                                        "properties": [
                                            {
                                                "type": "ObjectProperty",
                                                "start": 22,
                                                "end": 29,
                                                "loc": {
                                                    "start": {
                                                        "line": 2,
                                                        "column": 7
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
                                                    "start": 22,
                                                    "end": 23,
                                                    "loc": {
                                                        "start": {
                                                            "line": 2,
                                                            "column": 7
                                                        },
                                                        "end": {
                                                            "line": 2,
                                                            "column": 8
                                                        },
                                                        "identifierName": "a"
                                                    },
                                                    "name": "a"
                                                },
                                                "value": {
                                                    "type": "BooleanLiteral",
                                                    "start": 25,
                                                    "end": 29,
                                                    "loc": {
                                                        "start": {
                                                            "line": 2,
                                                            "column": 10
                                                        },
                                                        "end": {
                                                            "line": 2,
                                                            "column": 14
                                                        }
                                                    },
                                                    "value": true
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "ObjectProperty",
                                    "start": 35,
                                    "end": 45,
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 12
                                        }
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 35,
                                        "end": 38,
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 2
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 5
                                            },
                                            "identifierName": "foo"
                                        },
                                        "name": "foo"
                                    },
                                    "value": {
                                        "type": "StringLiteral",
                                        "start": 40,
                                        "end": 45,
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 7
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 12
                                            }
                                        },
                                        "extra": {
                                            "rawValue": "bar",
                                            "raw": "\"bar\""
                                        },
                                        "value": "bar"
                                    }
                                },
                                {
                                    "type": "ObjectProperty",
                                    "start": 49,
                                    "end": 61,
                                    "loc": {
                                        "start": {
                                            "line": 4,
                                            "column": 2
                                        },
                                        "end": {
                                            "line": 4,
                                            "column": 14
                                        }
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                        "type": "Identifier",
                                        "start": 49,
                                        "end": 53,
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 2
                                            },
                                            "end": {
                                                "line": 4,
                                                "column": 6
                                            },
                                            "identifierName": "fizz"
                                        },
                                        "name": "fizz"
                                    },
                                    "value": {
                                        "type": "StringLiteral",
                                        "start": 55,
                                        "end": 61,
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 8
                                            },
                                            "end": {
                                                "line": 4,
                                                "column": 14
                                            }
                                        },
                                        "extra": {
                                            "rawValue": "buzz",
                                            "raw": "\"buzz\""
                                        },
                                        "value": "buzz"
                                    }
                                }
                            ]
                        }
                    }
                ],
                "kind": "var"
            }
        ],
        "directives": []
    },
    "comments": [],
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
            "start": 0,
            "end": 3,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
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
                "binop": null
            },
            "value": "object",
            "start": 4,
            "end": 10,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 4
                },
                "end": {
                    "line": 1,
                    "column": 10
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
            "start": 11,
            "end": 12,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 11
                },
                "end": {
                    "line": 1,
                    "column": 12
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
            "start": 13,
            "end": 14,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
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
                "binop": null
            },
            "value": "a",
            "start": 17,
            "end": 18,
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
            "start": 18,
            "end": 19,
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
            "start": 20,
            "end": 21,
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
            "value": "a",
            "start": 22,
            "end": 23,
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
            "start": 23,
            "end": 24,
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
            "start": 25,
            "end": 29,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 10
                },
                "end": {
                    "line": 2,
                    "column": 14
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
            "start": 30,
            "end": 31,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 15
                },
                "end": {
                    "line": 2,
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
            "start": 31,
            "end": 32,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 16
                },
                "end": {
                    "line": 2,
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
            "value": "foo",
            "start": 35,
            "end": 38,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 2
                },
                "end": {
                    "line": 3,
                    "column": 5
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
            "start": 38,
            "end": 39,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 5
                },
                "end": {
                    "line": 3,
                    "column": 6
                }
            }
        },
        {
            "type": {
                "label": "string",
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
            "value": "bar",
            "start": 40,
            "end": 45,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 7
                },
                "end": {
                    "line": 3,
                    "column": 12
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
            "start": 45,
            "end": 46,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 12
                },
                "end": {
                    "line": 3,
                    "column": 13
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
            "value": "fizz",
            "start": 49,
            "end": 53,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 6
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
            "start": 53,
            "end": 54,
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
                "label": "string",
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
            "value": "buzz",
            "start": 55,
            "end": 61,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 14
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
            "start": 62,
            "end": 63,
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
            "start": 63,
            "end": 63,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 1
                },
                "end": {
                    "line": 5,
                    "column": 1
                }
            }
        }
    ]
};