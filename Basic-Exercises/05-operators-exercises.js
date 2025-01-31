/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 2;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b);
console.log(a ** b);
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
a += b;
a -= b;
a *= b;
a /= b;
a %= b;
a **= b;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let c = 5,
  d = 7,
  e = "5";
console.log(c < d);
console.log(d > c);
console.log(c == e);
console.log(e == true);
console.log(c <= d);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(c > d);
console.log(d < c);
console.log(c === e);
console.log(e == false);
console.log(c >= d);

// 5. Utiliza el operador lógico and
console.log(c > d && c == e); // false

// 6. Utiliza el operador lógico or
console.log(c > d || c == e); // true

// 7. Combina ambos operadores lógicos
console.log((c > d && c == e) || c < d); // true

// 8. Añade alguna negación
console.log(!((c > d && c == e) || c < d)); // false
// 9. Utiliza el operador ternario
let f = c > d ? "C mayor que D" : "C menor que D";

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((c + d > c - d && c == e) || c < d); // true
