# AngularJS provides filters to transform data:

currency: Format a number to a currency format.
date: Format a date to a specified format.
filter: Select a subset of items from an array.
json: Format an object to a JSON string.
limitTo: Limits an array/string, into a specified number of elements/characters.
lowercase: Format a string to lower case.
number: Format a number to a string.
orderBy: Orders an array by an expression.
uppercase: Format a string to upper case.

Junto con el $index, este es el conjunto de variables inyectadas automáticamente en el scope local:

$index, numérico. Es el índice de la iteración.
$first, boleano, tendrá el valor true para el primer elemento de la iteración.
$middle, boleano, será true en los elementos que no sean primero o último.
$last, boleano, solo será true en el último elemento.
$even, boleano, será true en caso que ese elemento sea impar en la lista de repetición.
$odd, boleano, será true en caso que el elemento sea de índice par.
