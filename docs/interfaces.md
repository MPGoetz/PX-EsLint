# Differences between Babylon6 and Estree AST
References:  
  * https://github.com/babel/babylon
  * https://github.com/estree/estree

## ObjectExpression

### ObjectProperty
**Babylon6:**
```js
interface ObjectProperty <: ObjectMember {
  type: "ObjectProperty";
  key: Literal | Identifier;
  shorthand: boolean;
  value: Expression;
}
```
**Estree:**
````js
interface Property <: Node {
    type: "Property";
    key: Literal | Identifier;
    value: Expression;
    kind: "init" | "get" | "set";
}
````

### ObjectMethod
**Babylon6:**
````js
interface ObjectMethod <: ObjectMember, Function {
  type: "ObjectMethod";
  kind: "get" | "set" | "method";
}
interface Function <: Node {
  id: Identifier | null;
  params: [ Pattern ];
  body: BlockStatement;
}
````
**Estree:**
````js
interface Property <: Node {
    type: "Property";
    key: Literal | Identifier;
    value: Expression;              // FunctionExpression
    kind: "init" | "get" | "set";
}
interface FunctionExpression <: Node {
    type: "FunctionExpression";
    id: Identifier | null;
    params: [ Pattern ];
    body: BlockStatement;
}
````


## Literals
**Babylon6:**
  * NumericLiteral, NullLiteral, StringLiteral, BooleanLiteral
  * RegExpLiteral
    
```js
interface NumericLiteral <: Literal {
   type: "NumericLiteral";
   value: number;
 }
interface RegExpLiteral <: Literal {
  type: "RegExpLiteral";
  pattern: string;
  flags: string;
}
```
**Estree:** 
  * Literal
  * RegExpLiteral
````js
interface Literal <: Expression {
    type: "Literal";
    value: string | boolean | null | number | RegExp;
}
interface RegExpLiteral <: Literal {
  regex: {
    pattern: string;
    flags: string;
  };
}
````