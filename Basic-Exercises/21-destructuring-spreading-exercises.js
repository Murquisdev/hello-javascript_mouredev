/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let array = [1, 2, 3, 4, 5, 6];
let [valor1, valor2] = array;
console.log(valor1);
console.log(valor2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [valor3, valor4, valor5, valor6, valor7, valor8, valor9 = 7] = array;
console.log(valor3);
console.log(valor4);
console.log(valor5);
console.log(valor6);
console.log(valor7);
console.log(valor8);
console.log(valor9);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
  nombre: "Marcos",
  edad: 39,
  nick: "Murquisdev",
};

let { nombre, edad } = persona;
console.log(nombre);
console.log(edad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { nombre: nombre2, edad: edad2 } = persona;
console.log(nombre2);
console.log(edad2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
persona.datos = {
  primerDato: "dato1",
  segundoDato: "dato2",
  tercerDato: "dato3",
};
let {
  datos: { primerDato },
  datos: { segundoDato },
} = persona;
console.log(primerDato);
console.log(segundoDato);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayNuevo = [...array1, ...array2];
console.log(arrayNuevo);

// 7. Usa propagación para crear una copia de un array
let arrayCopia = [...arrayNuevo];
console.log(arrayCopia);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let obejeto1 = { propieda1: "valor1", propieda2: "valor2" };
let obejeto2 = { propieda3: "valor3", propieda4: "valor4" };
let objetoCombinado = { ...obejeto1, ...obejeto2 };
console.log(objetoCombinado);

// 9. Usa propagación para crear una copia de un objeto
let objetoCopiado = { ...objetoCombinado };
console.log(objetoCopiado);

// 10. Combina desestructuración y propagación
let [dato1, dato2, dato3, dato4, ...resto] = [...array];
console.log(dato1);
console.log(dato2);
console.log(dato3);
console.log(dato4);
console.log(resto);
