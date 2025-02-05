/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let coche = {
  marca: "ford",
  puertas: 4,
  motor: "gasolina",
};
// 2. Accede y muestra su valor
console.log(coche.marca);
console.log(coche.puertas);
console.log(coche["motor"]);

// 3. Agrega una nueva propiedad
coche.extras = "climatizador";
console.log(coche);

// 4. Elimina una de las 3 primeras propiedades
delete coche.puertas;
console.log(coche);

// 5. Agrega una función e invócala
coche.arrancar = function () {
  console.log("Arrancar coche");
};
coche.arrancar();

// 6. Itera las propiedades del objeto
for (let propiedad in coche) {
  console.log(propiedad + ": " + coche[propiedad]);
}

// 7. Crea un objeto anidado
coche.caracteristicas = { cv: 100, peso: 1200, marchas: "manual" };
console.log(coche);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(coche.caracteristicas.cv);
console.log(coche.caracteristicas.peso);
console.log(coche.caracteristicas.marchas);

// 9. Comprueba si los dos objetos creados son iguales
let objeto1 = {
  propiedad1: "valor1",
  propiedad2: "valor2",
};
let objeto2 = {
  propiedad1: "valor1",
  propiedad2: "valor3",
};
let iguales = true;
for (let propiedad in objeto1) {
  if (objeto1[propiedad] !== objeto2[propiedad]) iguales = false;
}
if (iguales) console.log("Los dos objetos son iguales");
else console.log("Los dos objetos NO son iguales");

// 10. Comprueba si dos propiedades diferentes son iguales
let objeto3 = {
  propiedad1: "Texto",
  propiedad2: 3,
};
let objeto4 = {
  propiedad1: 3,
  propiedad2: "3",
};
console.log(objeto3.propiedad1 === objeto4.propiedad2);
console.log(objeto3.propiedad2 === objeto4.propiedad1);
