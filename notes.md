# jsdocs crash course

## installation

npm install --save-dev jsdoc

## config file

If you do not create a config file it will use defaults
Otherwise you need to create:
jsdoc.json

## runnin with npm:

in package.json
"doc": "jsdoc -c jsdoc.json"

## checking types!

It is awesome! VS code can check with jsdoc if you assing correct type:
https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76

## creating custome template

Copy:
node_modules/jsdoc/templates/default

Into project root

We can modify the template inside the custom-template folder
