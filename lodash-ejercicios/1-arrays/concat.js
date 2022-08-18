console.log("Concat: Concatenar arreglos o cadenas. ");
console.log("false === null, 0, '', undefined, NaN");

let valores = [
  1,
  2,
  { nombre: "Edward", edad: null },
  -10,
  false,
  "",
  ``,
  "JavaScript",
  [null, 0, "hola", "", undefined, false],
  null,
];

console.log("Cantidad de valores inicialmente: ", valores.length);
console.log(valores);

let resultado = _.compact(valores);
console.log("Cantidad de valores final: ", resultado.length);
console.log(resultado);

console.log("\n");
