# PX-EsLint

## TODOs
* gucken ob wir require auflösen können (browserifien würde das ganze auflösen, aber dann hätten wir es nicht mehr
 als eigene Datei)
* sourceType= module vielleicht ändern

## Setup
The Babylon-To-Espree-Converter depends on Babel and Babel-eslint. Therefore, run the following command:
```
    npm install
```

For Babel-eslint, `babel/core@>=7.2.0` is required. In Lively4, an older version is currently used (probably `6.26.3`).
In this version you cannot specify the `range` in the parser options. 
Therefore, we need to add it in the Babel-eslint plugin manually.
In the file `babel-eslint/lib/babel-to-espree/attachComments.js`, change the following line 57:
```
    ast.range[0] = ast.body[0].start;
```
to
```
    ast.range = new Array(2);
    ast.range[0] = ast.body[0].start;
    ast.range[1] = ast.body[0].end;
```

## Bundle the Converter
The bundle will be located in the build-folder. With `--standalone` it generates a UMD bundle with a given export name.
This bundle works with other module systems and sets the name given as a window global.
This way we can load the bundle as a global variable in the code-mirror later.
Run:
```
browserify b2e_converter.js -o build/b2e_converter.js --standalone babelToEspree
```
