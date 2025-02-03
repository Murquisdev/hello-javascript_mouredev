/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Murquisdev",
  imprimirNombre = true;
if (imprimirNombre) {
  console.log(myName);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let password = "1234",
  user = "Murquisdev";
if (password === "1234" && user === "Murquisdev") {
  console.log("Usuario y contraseña correctos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -1;
if (number > 0) {
  console.log("El número es positivo");
} else if (number === 0) {
  console.log("El número es cero");
} else {
  console.log("El número es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 17;
if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log(`No puedes votar, te faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let estado = edad >= 18 ? "Adulto" : "Menor";
console.log(estado);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "junio";

if (
  mes.toLowerCase() === "diciembre" ||
  mes.toLowerCase() === "enero" ||
  mes.toLowerCase() === "febrero"
) {
  console.log("Estamos en invierno");
} else if (
  mes.toLowerCase() === "marzo" ||
  mes.toLowerCase() === "abril" ||
  mes.toLowerCase() === "mayo"
) {
  console.log("Estamos en primavera");
} else if (
  mes.toLowerCase() === "marzo" ||
  mes.toLowerCase() === "abril" ||
  mes.toLowerCase() === "mayo"
) {
  console.log("Estamos en primavera");
} else if (
  mes.toLowerCase() === "junio" ||
  mes.toLowerCase() === "julio" ||
  mes.toLowerCase() === "agosto"
) {
  console.log("Estamos en verano");
} else {
  console.log("Estamos en otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (
  mes.toLowerCase() === "enero" ||
  mes.toLowerCase() === "marzo" ||
  mes.toLowerCase() === "mayo" ||
  mes.toLowerCase() === "julio" ||
  mes.toLowerCase() === "agosto" ||
  mes.toLowerCase() === "octubre" ||
  mes.toLowerCase() === "diciembre"
) {
  console.log(`El mes de ${mes} tiene 31 días`);
} else if (mes.toLowerCase() === "febrero") {
  console.log(`El mes de ${mes} tiene 28 días (o 29 si es bisiesto)`);
} else {
  console.log(`El mes de ${mes} tiene 30 días`);
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español";
switch (idioma.toLowerCase()) {
  case "inglés":
    console.log("Hello there!");
    break;
  case "español":
    console.log("Hola!");
    break;
  case "francés":
    console.log("Bonjour!");
    break;
  case "italiano":
    console.log("Ciao!");
    break;
  default:
    console.log("No reconozco el idioma, no te puedo saludar");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes.toLowerCase()) {
  case "diciembre" || "enero" || "febrero":
    console.log("Estamos en invierno");
    break;
  case "marzo" || "abril" || "mayo":
    console.log("Estamos en primavera");
    break;
  case "junio" || "julio" || "agosto":
    console.log("Estamos en verano");
    break;
  default:
    console.log("Estamos en otoño");
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes.toLowerCase()) {
  case "enero" ||
    "marzo" ||
    "mayo" ||
    "julio" ||
    "agosto" ||
    "octubre" ||
    "diciembre":
    console.log(`El mes de ${mes} tiene 31 días`);
    break;
  case "febrero":
    console.log(`El mes de ${mes} tiene 28 días`);
    break;
  default:
    console.log(`El mes de ${mes} tiene 30 días`);
}
