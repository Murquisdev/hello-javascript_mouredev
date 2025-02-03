/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "hurón", "conejo"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("tortuga");
animales.push("cobaya");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros
let miSetLibros = new Set([
  "Great Expectations",
  "Ready player one",
  "Ready player two",
  "El Hobbit",
  "Los pilares de la tierra",
]);
console.log(miSetLibros);

// 5. Añade dos más. Uno de ellos repetido
miSetLibros.add("La Iliada");
miSetLibros.add("La Iliada");
console.log(miSetLibros);

// 6. Elimina uno concreto a tu elección
miSetLibros.delete("Ready player two");
console.log(miSetLibros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let nombreMes = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
  [8, "agosto"],
  [9, "septiembre"],
  [10, "octubre"],
  [11, "noviembre"],
  [12, "diciembre"],
]);
console.log(nombreMes.entries());

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (nombreMes.has(5)) {
  console.log(nombreMes.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
nombreMes.set("verano", [6, 7, 8]);
console.log(nombreMes.entries());

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let nuevoArray = [1, 2, 3, 4, 5, 6];
let nuevoSet = new Set(nuevoArray);
let nuevoMap = new Map();
nuevoMap.set("nuevoSet", nuevoSet);

console.log(nuevoArray);
console.log(nuevoSet);
console.log(nuevoMap);
