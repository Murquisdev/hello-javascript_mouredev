/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Para escribir un comentario en una sola línea es necesario utilizar las dos barras inclinadas de la tecla 7 //

// 2. Escribe un comentario en varias líneas

/* Para escribir un comentario en varias líneas es necesario utilizar
la barra inclinada de la tecla 7 y un asterisco y cerrar con un asterisco
y la barra inclinada del 7 otra vez */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let string = `Variable de tipo string`;
let number = 123;
let boolean = true;
let undefinedVar = undefined;
let nullVar = null;
let symbol = Symbol("symbol");
let bigInt = BigInt(123);

// 4. Imprime por consola el valor de todas las variables
console.log(string);
console.log(number);
console.log(boolean);
console.log(undefinedVar);
console.log(nullVar);
console.log(symbol);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof undefinedVar);
console.log(typeof nullVar);
console.log(typeof symbol);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

string = `nuevo valor de string`;
number = 456;
boolean = false;
undefinedVar = undefined; // Solo puede ser undefined
nullVar = null; // Solo puede ser null
symbol = Symbol(`nuevo symbol`);
bigInt = BigInt(456);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 789;
number = `ahora number es un string`;
boolean = `true`; // Es un string
undefinedVar = true;
nullVar = undefined;
symbol = "symbol";
bigInt = `123n`;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const stringConst = `Constante string`;
const numberConst = 123;
const booleanConst = true;
const undefinedConst = undefined;
const nullConst = null;
const symbolConst = Symbol(`symbol`);
const bigIntConst = BigInt(123);

// 9. A continuación, modifica los valores de las constantes

// stringConst = "nuevo valor";
// numberConst = 456;
// booleanConst = false;
// undefinedConst = undefined; // Solo puede ser undefined
// nullConst = null; // Solo puede ser null
// symbolConst = Symbol(`nuevo symbol`);
// bigIntConst = BigInt(456);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Las constantes no se pueden reasignar.
