/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Primera parte de la cadena. ",
  cadena2 = "Segunda parte de la cadena.";
console.log(cadena1 + cadena2);

// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadena2[0]);
console.log(cadena2[cadena2.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toUpperCase());
console.log(cadena1.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let cadenaMultilinea = `Primera línea.
Segunda línea.
Tercera línea.`;
console.log(cadenaMultilinea);

// 6. Interpola el valor de una variable en un string
let nombre = "Murquisdev";
console.log(`Hola, mi nombre es ${nombre}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadena1.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena1.includes("Primera"));

// 9. Comprueba si dos strings son iguales
console.log(cadena1 === cadena2);
console.log(cadena1 === cadena1);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena1.length === cadena2.length);
console.log(cadena1.length === cadena1.length);
