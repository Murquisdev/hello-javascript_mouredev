/*
Clase 3 - Objetos y Clases avanzadas (12/02/2025)
Vídeo: https://www.twitch.tv/videos/2403685993?t=00h21m33s
*/

// 1. Agregega una función al prototipo de un objeto
let objeto1 = {
  propiedad1: "propiedad1",
  propiedad2: "propiedad2",
  funcion1() {
    console.log(this.propiedad1);
  },
};

objeto1.funcion2 = function () {
  console.log(this.propiedad2);
};
//Aquí se agrega solo a objeto1, no al prototipo
objeto1.funcion2();

//Si queremos agregar al prototipo hay que trabajar con una función constructora, para que todos los objetos
// tengan esa función
function MiObjeto(prop1, prop2) {
  this.propiedad1 = prop1;
  this.propiedad2 = prop2;
}

let objeto2 = new MiObjeto("valor1_2", "valor2_2");
MiObjeto.prototype.funcion2 = function () {
  console.log(this.propiedad2);
};

let objeto3 = new MiObjeto("valor1_3", "valor2_3");
objeto2.funcion2();
objeto3.funcion2();
console.log();

// 2. Crea un objeto que herede de otro
let objetoConHerencia = Object.create(objeto1);
objetoConHerencia.propiedad3 = "valor 3";
objetoConHerencia.funcion3 = function funcion3() {
  console.log(this.propiedad3);
};
objetoConHerencia.funcion3();
console.log();

// 3. Define un método de instancia en un objeto
// Resuelto en 1. Al agregar el método al prototipo del objeto, no al objeto creado

// 4. Haz uso de get y set en un objeto
let miObjeto = {
  _valorInterno: 0, // Usamos un prefijo _ para indicar que no se debe acceder directamente

  get valor() {
    console.log("Se está obteniendo el valor");
    return this._valorInterno;
  },

  set valor(nuevoValor) {
    console.log("Se está estableciendo el valor a:");
    if (typeof nuevoValor === "number" && nuevoValor >= 0) {
      return (this._valorInterno = nuevoValor);
    } else {
      console.error("El valor debe ser un número no negativo.");
    }
  },
};

console.log(miObjeto.valor); // JS llama internamente al método get()
miObjeto.valor = 10; // JS llama internamente al método set()
console.log(miObjeto.valor);
miObjeto.valor = -5; // Intenta establecer un valor inválido
console.log();

// 5. Utiliza la operación assign en un objeto
let entidad = { nombre: "Murquis" };
let entidadDatos = { edad: 39, email: "murquisdev@gmail.com" };
let entidadCompleta = Object.assign(entidad, entidadDatos);
console.log(entidadCompleta);
console.log();

// 6. Crea una clase abstracta
class Persona {
  constructor(name, edad) {
    if (new.target === Persona) {
      throw new Error("Persona es una clase abstracta, no se puede instanciar");
    }
    this.name = name;
    this.edad = edad;
  }
  mayorEdad() {
    throw new Error("Este método tiene que ser implementado en la subclase");
  }
}
class Alumno extends Persona {
  curso;
  mayorEdad() {
    return this.edad > 18 ? true : false;
  }
}

const alumno = new Alumno("Marcos", 17);
console.log(alumno instanceof Alumno);
console.log(alumno);
console.log(alumno.name);
console.log(alumno.edad);
console.log(alumno.curso);
alumno.curso = "JavaScript";
console.log(alumno.curso);
alumno.mayorEdad;
console.log();

// 7. Utiliza polimorfismo en dos clases diferentes
// Ya lo utilicé en el ejercicio anterior con la función mayorEdad

// 8. Implementa un Mixin
const aprobado = {
  aprobado(nota) {
    return nota > 4.99 ? true : false;
  },
};
Object.assign(Alumno.prototype, aprobado);
console.log(alumno.aprobado(8));
console.log();

// 9. Crea un Singleton
class Examen {
  constructor(name) {
    if (Examen.instance) {
      return Examen.instance;
    }
    this.name = name;
    Examen.instance = this;
  }
}
const examen1 = new Examen("examen1");
const examen2 = new Examen("examen2");
console.log(examen1.name);
console.log(examen2.name);

// 10. Desarrolla un Proxy
const proxyExamen = {
  get(objetivo, propiedad) {
    console.log(`Accediendo a ${propiedad}`);
    return objetivo[propiedad];
  },

  set(objetivo, propiedad, valor) {
    if (objetivo[propiedad] === undefined)
      console.log(`Modificando ${propiedad} 0 por ${valor}`);
    else
      console.log(
        `Modificando ${propiedad} ${objetivo[propiedad]} por ${valor}`
      );
    objetivo[propiedad] = valor;
  },
};

class Curso {
  nota;
  constructor(name) {
    this.name = name;
  }
}

const javaScript = new Proxy(new Curso("JavaScript"), proxyExamen);
console.log(javaScript.name);
javaScript.nota = 8;
javaScript.nota = 9;
console.log(javaScript.nota);
