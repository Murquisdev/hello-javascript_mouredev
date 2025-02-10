/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
  a;
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
  a;
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
} finally {
  console.log("Este código se ejecuta aunque haya o no error");
}
// 3. Lanza una excepción genérica
let objeto;
try {
  objeto.saludar;
} catch (error) {
  console.log(error.message);
}

// 4. Crea una excepción personalizada
class ErrorConTexto extends Error {
  constructor(message, dividendo, divisor) {
    super(message);
    this.dividendo = dividendo;
    this.divisor = divisor;
  }
  printError() {
    console.log(
      `No se puede dividir entre cero: ${this.dividendo} / ${this.divisor}`
    );
  }
}

// 5. Lanza una excepción personalizada
let a = 10,
  b = 0;
try {
  if (b === 0) {
    throw new ErrorConTexto("No se puede dividir entre cero", a, b);
  }
  console.log(`${a}/${b} = ${a / b}`);
} catch (error) {
  error.printError();
}

// 6. Lanza varias excepciones según una lógica definida
// 7. Captura varias excepciones en un mismo try-catch
let c = "0";
try {
  if (c === 0) {
    throw new ErrorConTexto("No se puede dividir entre cero", a, c);
  }
  if (!Number.isInteger(a) || !Number.isInteger(c))
    throw new Error("Solo se permiten números enteros");
  console.log(`${a}/${c} = ${a / c}`);
} catch (error) {
  if ("printError" in error) error.printError();
  else console.log("Se ha produccido un error: ", error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let valores = [
  "10",
  "20",
  "5.5",
  "treinta",
  "ocho",
  { valor1: "valor1", valor2: 32 },
];
for (let valor of valores) {
  try {
    console.log(parseFloat(valor));
  } catch (error) {
    console.log("Se ha producido un error: ", error.message);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(objeto, propiedad) {
  if (!(propiedad in objeto))
    throw new Error(`La propiedad ${propiedad} no existe en el objeto`);

  return true;
}
let objeto2 = {
  valor1: "valor1",
  valor2: "valor2",
};
try {
  console.log(verificarPropiedad(objeto2, "valor3"));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(verificarPropiedad(objeto2, "valor2"));
} catch (error) {
  console.log(error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function reintentos(reintentos = 10) {
  let intento = 1;
  for (let i = 0; i < reintentos; i++) {
    try {
      return funcion;
    } catch (error) {
      console.log(`Intento ${intento}, error: ${error.message}`);
      intento++;
    }
  }
  return "Número máximo de intentos alcanzado, se para el proceso";
}
console.log(reintentos());
