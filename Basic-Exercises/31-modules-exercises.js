/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function multiplicar(a, b) {
  return a * b;
}

// 2. Exporta una constante
export const G = 9.8;

// 3. Exporta una clase
export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// 4. Importa una función
import { add } from "../Basic/28-export-modules.js";
console.log(add(4, 3));

// 5. Importa una constante
import { PI } from "../Basic/28-export-modules.js";
console.log(PI);

// 6. Importa una clase
import { Circle } from "../Basic/28-export-modules.js";
const circle = new Circle(10);
console.log(circle.area().toFixed(2));

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// Hecho en el ejercicio 1, 2 y 3

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// Hecho en el ejercicio 4, 5 y 6

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
