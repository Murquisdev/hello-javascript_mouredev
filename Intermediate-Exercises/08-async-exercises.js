/*
Clase 4 - Programación asíncrona (19/02/2025)
Vídeo: https://www.twitch.tv/videos/2403686047?t=00h22m48s
*/

// 1. Crea una función para saludar que reciba un nombre y un callback.
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function saludar(name, callback) {
  setTimeout(() => callback(name), 2000);
  //   setTimeout(callback, 2000, name); Así pasa name al callback directamente después de los 2 segundos
}
saludar("Murquis", (name) => console.log(`Hola, ${name}`));

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback).
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("Tareas completadas");
    });
  });
});

// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function verificarParImpar(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) resolve("Número par");
    else reject("Número impar");
  });
}
verificarParImpar(2)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));
verificarParImpar(3)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera task completada");
      resolve();
    }, 1000);
  });
}
function secondtask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda task completada");
      resolve();
    }, 2000);
  });
}
function thirdtask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tercera task completada");
      resolve();
    }, 1500);
  });
}
firstask()
  .then(secondtask)
  .then(thirdtask)
  .then(() => {
    console.log("Tasks completadas");
  });

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function esperar(ms, tarea) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${tarea} executetaks completada`);
      resolve();
    }, ms);
  });
}
async function executeTasks() {
  await esperar(1000, "Primera");
  await esperar(2000, "Segunda");
  await esperar(1500, "Tercera");
  console.log("ExecuteTasks completadas");
}
executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
  return new Promise((resolve, reject) => {
    if (id < 5) resolve({ id, nombre: "Usuario " + id });
    else reject("Usuario no encontrado");
  });
}

async function showUser(id) {
  try {
    const usuario = await getUser(id);
    console.log(usuario);
  } catch (error) {
    console.error("Error: ", error);
  }
}
showUser(4);
showUser(5);

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio") 1º
//    setTimeout(() => console.log("setTimeout ejecutado"), 0) 4º
//    Promise.resolve().then(() => console.log("Promesa resuelta")) 3º
//    console.log("Fin") 2º

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function promesaall1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promesaall1 completada");
      resolve("Resolución 1");
    }, 3000);
  });
}
function promesaall2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promesaall2 completada");
      resolve("Resolución 2");
    }, 4000);
  });
}
function promesaall3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promesaall3 completada");
      resolve("Resolución 3");
    }, 2000);
  });
}
promesaall1()
  .then(promesaall2)
  .then(promesaall3)
  .then(() => {
    console.log("Promesaall finalizado");
  });
Promise.all([promesaall1(), promesaall2(), promesaall3()]).then(
  (resultados) => {
    console.log("Todas las promesas.all resueltas");
    console.log("Resultados: ", resultados);
  }
);

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(segundos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tiempo finalizado");
      resolve();
    }, segundos * 1000);
  });
}
async function proceso(segundos) {
  console.log("Haciendo tareas");
  console.log("Llamo a waitSeconds");
  await waitSeconds(segundos);
}
proceso(3);

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

function checkBalance(saldoInicial) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(saldoInicial);
    }, 1000);
  });
}
function withdrawMoney(amount, saldoActual) {
  return new Promise((resolve, reject) => {
    console.log(`Retirando ${amount}€`);
    setTimeout(() => {
      if (saldoActual - amount >= 0) {
        const nuevoSaldo = saldoActual - amount;
        resolve(nuevoSaldo);
      } else {
        reject("Fondos insuficientes");
      }
    }, 2000);
  });
}

async function simulacionCajero(amount) {
  let saldo = await checkBalance(amount);
  console.log(`Saldo disponible: ${amount}€`);

  try {
    saldo = await withdrawMoney(300, saldo);
    console.log(`Operación exitosa, saldo disponible: ${saldo}`);
  } catch (error) {
    console.error("Error, ", error);
  }

  try {
    saldo = await withdrawMoney(300, saldo);
    console.log(`Saldo disponible: ${saldo}`);
  } catch (error) {
    console.error("Error, ", error);
  }
}

simulacionCajero(500);
