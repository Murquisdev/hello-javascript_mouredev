/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2403685765?t=00h08m45s
*/

// 1. Crea una función que retorne a otra función
function crearSaludo(saludo) {
  return function (nombre) {
    return saludo + ", " + nombre + "!";
  };
}

// Creamos dos funciones "saludadoras" diferentes
const saludarHola = crearSaludo("Hola");
const saludarAdios = crearSaludo("Adiós");

// Ahora podemos usar estas nuevas funciones
console.log(saludarHola("Ana"));
console.log(saludarAdios("Pedro"));
console.log(crearSaludo("Chao")("Bambino"));
console.log();

// 2. Implementa una función currificada que multiplique 3 números
function multiplicar(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const resultado1 = multiplicar(5);
console.log(resultado1(2)(3));
console.log(resultado1(4)(7));
const resultado2 = multiplicar(5)(5);
console.log(resultado2(4));
console.log(resultado2(8));
console.log();

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function exponencial(base, exponente) {
  if (base === 0) return 0;
  if (exponente === 0) return 1;
  return base * exponencial(base, exponente - 1);
}

console.log(exponencial(2, 2));
console.log(exponencial(5, 2));
console.log(exponencial(5, 3));
console.log();

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valorInicial) {
  let contador = valorInicial;

  function increment() {
    return ++contador; // Pre-incremento para retornar el valor actual
  }
  function decrement() {
    return --contador; // Pre-decremento para retornar el valor actual
  }
  function getValue() {
    return contador;
  }
  const operations = {
    increment: increment,
    decrement: decrement,
    getValue: getValue,
  };
  return operations;
}

let miContador = createCounter(1);
console.log(miContador);
console.log(miContador.increment());
console.log(miContador.getValue());
console.log(miContador.decrement());
console.log(miContador.getValue());
console.log();

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
  // .reduce: Método que reduce a un único valor los elementos del array
  // .reduce(callback, valor inicial del acumulador)
  //                                   -----------------Callback----------------, Valor inicial
  // const totalSum = numbers.reduce((acumulador, numero) => acumulador + numero, 0);
  let totalSum = 0;
  for (let number of numbers) {
    totalSum += number;
  }
  return multiplier * totalSum;
}
console.log(sumManyTimes(5, 1, 2, 3));
console.log();

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sum(numbers) {
  return numbers.reduce((acumulador, numero) => (acumulador += numero), 0);
}
function texto1(resultado) {
  console.log(`Suma procesada: ${resultado}`);
}
function procesarSuma(datos, callback) {
  const resultado = sum(datos);
  callback(resultado);
}

procesarSuma([1, 2, 3], texto1);
procesarSuma([1, 2, 3], (result) =>
  console.log(`Texto desde la arrow function: ${result}`)
);
console.log();

// 7. Desarrolla una función parcial
function multiplyPartial(a) {
  return function (b, c) {
    return a * b * c;
  };
}
const partialFive = multiplyPartial(5);
console.log(partialFive(2, 4));
console.log();

const multiplyPartialArrow = (a) => (b, c) => a * b * c;

const partialFiveArrow = multiplyPartialArrow(5);
console.log(partialFiveArrow(2, 4));
console.log();

// 8. Implementa un ejemplo que haga uso de Spread
const listNumbers = [1, 2, 3, 4, 5];
function sumarCincoValores(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(sumarCincoValores(...listNumbers));
console.log();

// 9. Implementa un retorno implícito
const sumTotal = (...numbers) =>
  numbers.reduce((acumulador, numero) => (acumulador += numero), 0);
console.log(sumTotal(1, 3, 4, 6, 10));
console.log();

// 10. Haz uso del this léxico
const propiedad = "Propiedad fuera del objeto";
const objeto = {
  propiedad: "Propiedad dentro el objeto",
  leerPropiedad: function () {
    console.log(this.propiedad);
    console.log(propiedad);
  },
};

objeto.leerPropiedad();
