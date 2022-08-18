console.log(
  "Compact: Para remover los valores null o equivalentes, no afecta a anidados."
);
console.log("false === null, 0, '', undefined, NaN");

let valores = [
  1,
  2,
  { nombre: "Edward", edad: null },
  -10,
  "",
  ``,
  "JavaScript",
  [null, 0, "hola", ""],
  null,
];

console.log("Cantidad de valores inicialmente: ", valores.length);
console.log(valores);

let resultado = _.compact(valores);
console.log("Cantidad de valores final: ", resultado.length);
console.log(resultado);

console.log("\n");
