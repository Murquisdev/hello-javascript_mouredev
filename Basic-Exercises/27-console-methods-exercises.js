/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function mostrarError() {
  console.error("Consola que muestra un error");
}
mostrarError();

// 2. Crea una función que utilice warn correctamente
function mostrarAviso() {
  console.warn("Consola que muestra un aviso");
}
mostrarAviso();
// 3. Crea una función que utilice info correctamente
function mostrarInfo() {
  console.info("Consola que muestra una información");
}
mostrarInfo();
// 4. Utiliza table
let personas = [
  {
    nombre: "Murquisdev",
    edad: 39,
  },
  { nombre: "Ana", edad: 30 },
];
console.table(personas);

// 5. Utiliza group
console.group("Personas");
for (let persona of personas) {
  console.info(persona);
}
console.groupEnd();

// 6. Utiliza time
console.time("Tiempo");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Tiempo");

// 7. Valida con assert si un número es positivo
let a = 5;
console.assert(a < 0, `${a} es positivo`);

// 8. Utiliza count
for (let i = 0; i < 10; i++) {
  console.count("Cuenta");
  if (i === 4) console.countReset("Cuenta");
}

// 9. Utiliza trace
function funcionA() {
  funcionB();
}
function funcionB() {
  console.trace("Rastrear ejecución");
}
funcionA();
// 10. Utiliza clear
console.clear();
