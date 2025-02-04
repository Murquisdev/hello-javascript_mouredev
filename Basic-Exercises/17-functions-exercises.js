/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 5));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayNumeros = [20, 30, 55, 80, 95, 1, 33, 4];
const numMayor = (numeros) => {
  let numMayor = 0;
  for (let numero of numeros) {
    if (numMayor < numero) numMayor = numero;
  }
  return numMayor;
};
console.log(numMayor(arrayNumeros));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadena = "Esto es una cadena de texto";
const cuentaVocales = function (cadena) {
  let contVocales = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena[i].toLowerCase() === "a" ||
      cadena[i].toLowerCase() === "e" ||
      cadena[i].toLowerCase() === "i" ||
      cadena[i].toLowerCase() === "o" ||
      cadena[i].toLowerCase() === "u"
    ) {
      contVocales++;
    }
  }
  return contVocales;
};
console.log(cuentaVocales(cadena));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let arrayStrings = [
  "Esto es un string",
  "Otro string más",
  "Y no terminamos con los strings",
  "¿Cuantos strings tenemos?",
];
cadena.toUpperCase();
function cadenasAMayusculas(cadenas) {
  let arrayStringsMayusculas = [];
  cadenas.forEach((cadena) =>
    arrayStringsMayusculas.push(cadena.toUpperCase())
  );
  return arrayStringsMayusculas;
}
console.log(cadenasAMayusculas(arrayStrings));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function comprobarPrimo(numero) {
  for (i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(comprobarPrimo(3));
console.log(comprobarPrimo(9));
console.log(comprobarPrimo(17));
console.log(comprobarPrimo(97));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [7, 6, 3, 20, 43, 2, 56, 32, 57, 12, 3];
const elementosComunes = function (array1, array2) {
  let arrayComun = [];
  for (elemento of array1) {
    if (array2.includes(elemento) && !arrayComun.includes(elemento))
      arrayComun.push(elemento);
  }
  return arrayComun;
};
console.log(elementosComunes(array1, array2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumaPares = (array) => {
  let cont = 0;
  array.forEach((elemento) => {
    if (elemento % 2 === 0) cont += elemento;
  });
  return cont;
};
console.log(sumaPares(array1));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarCuadrado(array) {
  arrayElevado = [];
  for (elemento of array) {
    arrayElevado.push(elemento ** 2);
  }
  return arrayElevado;
}
console.log(array2);
console.log(elevarCuadrado(array2));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const invertirCadena = function (cadena) {
  let palabras = [];
  let cadenaInvertida = "";
  let palabra = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === " " && palabra !== "") {
      palabras.push(palabra);
      palabra = "";
    } else {
      palabra += cadena[i];
      if (i === cadena.length - 1) palabras.push(palabra);
    }
  }
  for (i = palabras.length - 1; i >= 0; i--) {
    if (i > 0) cadenaInvertida += palabras[i] + " ";
    else cadenaInvertida += palabras[i];
  }
  return cadenaInvertida;
};
console.log(invertirCadena(cadena));

// 10. Crea una función que calcule el factorial de un número dado
const factorial = (numero) => {
  let calc = 1;
  for (let i = 2; i <= numero; i++) {
    calc *= i;
  }
  return calc;
};
console.log(factorial(5));
