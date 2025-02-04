/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let cont = 1;
let sum = 0;
while (cont <= 100) {
  sum += cont;
  cont++;
}
console.log(sum);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let indice = 1;
do {
  if (indice % 2 === 0) {
    console.log(indice);
  }
  indice++;
} while (indice <= 50);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Murquisdev", "Marcos", "Ana", "Maria", "Juan"];
for (let nombre of nombres) {
  console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Cadena de texto para contar vocales";
indice = 0;
cont = 0;
while (indice < texto.length) {
  if (
    texto[indice].toLowerCase() === "a" ||
    texto[indice].toLowerCase() === "e" ||
    texto[indice].toLowerCase() === "i" ||
    texto[indice].toLowerCase() === "o" ||
    texto[indice].toLowerCase() === "u"
  ) {
    cont++;
  }
  indice++;
}
console.log(
  `Hay ${cont} ${cont === 0 ? "vocales" : cont === 1 ? "vocal" : "vocales"}`
);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
cont = 1;
for (let numero of numeros) {
  cont *= numero;
}
console.log(cont);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
indice = 1;
do {
  console.log(`5 x ${indice} = ${5 * indice}`);
  indice++;
} while (indice <= 10);

// 8. Usa un bucle para invertir una cadena de texto
let cadenaInvertida = "";
let i = texto.length - 1;

for (let i = texto.length - 1; i >= 0; i--) {
  cadenaInvertida += texto[i];
}
console.log(cadenaInvertida);
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let numero1 = 1,
  numero2 = 2;
cont = 1;
let secuencia = "";
while (cont <= 10) {
  if (cont === 1 || cont === 2) secuencia += numero1 + ", ";
  else if (cont % 2 !== 0) {
    numero1 = numero1 + numero2;
    secuencia += numero1 + ", ";
  } else {
    numero2 = numero2 + numero1;
    secuencia += numero2 + ", ";
  }
  cont++;
}
let secuenciaFinal = secuencia.slice(0, -2);
console.log(secuenciaFinal);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayNumeros = [10, 15, 20, 11, 4, 35, 2, 50, 3, 4, 6, 75, 9];
let arrayNumerosMayoresDiez = [];
for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] > 10) arrayNumerosMayoresDiez.push(arrayNumeros[i]);
}
console.log(arrayNumeros);
console.log(arrayNumerosMayoresDiez);
