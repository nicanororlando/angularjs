console.log("Chunk: Divide el array en 'n' veces que queramos");

numeros = [1, 2, 3, 4, 5, 6, 7];

console.log(numeros);

const division = 2;
const particiones = _.chunk(numeros, division);

console.log(particiones);
console.log("\n");
