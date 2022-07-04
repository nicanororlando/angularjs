# Yeoman proyect:

1. `npm install -g angular-generator`
2. `yo angular`: For creating the yeoman proyect with all dependencies.
3. `npm install`
4. `bower install`
5. `grunt serve`: Run the proyect.

Bower va a ser el encargado de manejar las dependencias.
En el bower.json vamos a tener el listado de las dependencias.

-Cuando se añade un modulo desde la terminal, debemos instalarlo con `bower` y luego esa dependencia se va a guardar en bower-components, en el .json, y en nuestro index.html para poder utilizarlo. Luego ese modulo lo tenemos que añadir al script app.js.

# Dependencias:

`bower install --save angular-ui-sortable jquery-ui`
`bower install --save angular-local-storage`
