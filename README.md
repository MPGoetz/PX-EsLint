# [PX19/20] EsLint extension

## Setup
The Babylon-To-Espree-Converter depends on Babel and Babel-eslint. Therefore, run the following command before running the code:
```
    npm install
```

For Babel-eslint, `babel/core@>=7.2.0` is required. In Lively4, an older version is currently used (probably `6.26.3`).
In this version you cannot specify the `range` in the parser options. 
Therefore, we need to add it in the Babel-eslint plugin manually.
In the file `babel-eslint/lib/babel-to-espree/toAST.js`, starting from line 25,
```js
        var astTransformVisitor = {
          noScope: true,
          enter(path) {
            var node = path.node;
        
            // private var to track original node type
            node._babelType = node.type;
```
add the following lines:
```js
    var astTransformVisitor = {
      noScope: true,
      enter(path) {
        var node = path.node;
    
        // private var to track original node type
        node._babelType = node.type;
        if (node.end) {
          node.range = [node.start, node.end];
        }
```

## Run the Converter
In `testParser.js` is an implementation of the `babelParser.js` given. You can run this file to test the converter.


## Bundle the Converter
The code is bundled with `browserify` and will be located in the build-folder. With `--standalone` it generates a UMD bundle with a given export name.
This bundle works with other module systems and sets the name given as a window global.
This way we can load the bundle as a global variable in the code-mirror later.

To bundle `babelParser.js`, run the following command. The name of the global variable of the bundle is `babelParser`.
```
npm run bundle
```

## Upgrading to Babel 7
The babelTransform which is used at the moment, correctly works with the babel 7 traverse function.
Therefore the convertNodes function can be omitted and you input the babel 7 traverse as well as babel types 
the same way it is done for babel 6. 

Furthermore you can check for a newer version of [babel-eslint](https://github.com/babel/babel-eslint/tree/master/lib/babylon-to-espree)
(which our ast conversion is based upon) for any possible improvements.
