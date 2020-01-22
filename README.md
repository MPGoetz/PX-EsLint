# PX-EsLint

## TODOs
* Die TODOs in customParser.js auflösen.
* gucken ob wir require auflösen können (browserifien würde das ganze auflösen, aber dann hätten wir es nicht mehr
 als eigene Datei)
* herausfinden, wie genau man an die BabelPlugins und babel.transform herankommt.

## Steps
* run "npm install --save-dev @babel/core" to get necessary babel files
* run "npm install eslint babel-eslint --save-dev" to get babel-eslint parser
* run "browserify b2e_converter.js -o build/b2e_converter.js -d" to bundle our converter
