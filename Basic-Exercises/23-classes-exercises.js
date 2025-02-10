/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }
//   mostrarDatos(){
//     console.log(`El nombre es ${this.nombre} y la edad es ${this.edad}`);

//   }
// }
// let persona = new Persona(`Murquisdev`, 39);
// console.log(persona);

// 2. Añade un método a la clase que utilice las propiedades
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  mostrarDatos() {
    console.log(`El nombre es ${this.nombre} y la edad es ${this.edad}`);
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let persona = new Persona(`Murquisdev`, 39);
console.log(persona.nombre);
console.log(persona.edad);
persona.mostrarDatos();

// 4. Añade un método estático a la primera clase
class Saludos {
  static saludoEspañol() {
    console.log("Hola!");
  }
}

// 5. Haz uso del método estático
Saludos.saludoEspañol();

// 6. Crea una clase que haga uso de herencia
class Trabajador extends Persona {
  constructor(nombre, edad, puesto) {
    super(nombre, edad);
    this.puesto = puesto;
  }
  mostrarDatos() {
    console.log(
      `${this.nombre} trabaja como ${this.puesto} y tiene ${this.edad}`
    );
  }
}

let trabajador = new Trabajador("Murquisdev", 39, "programador");
console.log(trabajador);

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Animal {
  #name;
  #sound;
  constructor(name, sound) {
    this.#name = name;
    this.#sound = sound;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get sound() {
    return this.#sound;
  }
  set sound(sound) {
    this.#sound = sound;
  }
}

// 9. Utiliza los get y set y muestra sus valores
let perro = new Animal("perro", "guau");
console.log(perro.name);
console.log(perro.sound);
perro.sound = "Guau Guau";
console.log(perro.sound);

// 10. Sobrescribe un método de una clase que utilice herencia
trabajador.mostrarDatos();
