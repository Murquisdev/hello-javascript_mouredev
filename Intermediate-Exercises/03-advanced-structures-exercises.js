/*
Clase 2 - Estructuras avanzadas (05/02/2025)
Vídeo: https://www.twitch.tv/videos/2403685940?t=00h15m32s
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const array1 = ["Rojo", "Verde", "Azul", "Violeta"];
const array1Map = array1.map((elemento) => elemento.toUpperCase());
console.log(array1Map);
const array1Filter = array1Map.filter((elemento) => elemento === "AZUL");
console.log(array1Filter);
const array1Reduce = array1Map.reduce(
  (acumulador, elemento) => `${acumulador} ${elemento}`
);
console.log(array1Reduce);
console.log();

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2Cubo = array2.map((elemento) => elemento ** 3);
console.log(array2Cubo);
const array2Filter = array2Cubo.filter((elemento) => elemento % 2 === 0);
console.log(array2Filter);
console.log();

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const array3 = ["Manzana", ["Naranja", ["Plátano"]]];
console.log(array3);
const array3Aplanado = array3.flat(3);
console.log(array3Aplanado);
const array3a = ["Fruta:Manzana", "Fruta:Naranja", "Fruta:Plátano"];
const array3aAplanadoMayus = array3a.flatMap((elemento) => elemento.split(":"));
console.log(array3aAplanadoMayus);
console.log();

// 4. Ordena un array de números de mayor a menor
const array4 = [3, 5, 1, 4, 24, 58, 34, 21];
const array4Sorted = array4.sort((a, b) => b - a);
console.log(array4Sorted);
console.log();

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const setA = new Set([1, 2, 3, 4, 5, 6]);
const setB = new Set([4, 5, 6, 7, 8, 9, 10]);
const SetUnion = new Set([...setA, ...setB]);
console.log(SetUnion);
const SetInterseccion = new Set(
  [...setA].filter((elemento) => setB.has(elemento))
);
console.log(SetInterseccion);
const SetDiffA = new Set([...setA].filter((elemento) => !setB.has(elemento)));
const SetDiffB = new Set([...setB].filter((elemento) => !setA.has(elemento)));
console.log(SetDiffA);
console.log(SetDiffB);
console.log();

// 6. Itera los resultados del ejercicio anterior
SetInterseccion.forEach((elemento) => console.log(elemento));
console.log();

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const mapaUsuarios = new Map();

mapaUsuarios.set("Marcos", { edad: 39, email: "murquisdev@gmail.com" });
mapaUsuarios.set("Laura", { edad: 27, email: "laura.gonzalez@ejemplo.com" });
// prettier-ignore
mapaUsuarios.set("Javier", {edad: 52,email: "javier.rodriguez@otroejemplo.com"});
mapaUsuarios.set("Sofía", { edad: 16, email: "sofia.perez@unmail.es" });

mapaUsuarios.forEach((valor, clave) =>
  console.log(`-${clave.toUpperCase()}: ${valor.edad} - ${valor.email}`)
);
console.log();

// 8. Dado el mapa anterior, crea un array con los nombres

const array8Nombres = Array.from(mapaUsuarios.keys());
console.log(array8Nombres);
console.log();

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
//prettier-ignore
const array9Email = Array.from(mapaUsuarios.values()) 
.filter(usuario => usuario.edad >= 18) 
.map(usuario => usuario.email);
console.log(array9Email);

const set9Email = new Set(array9Email);
console.log(set9Email);
console.log();

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const objeto10 = Object.fromEntries(mapaUsuarios);
console.log(objeto10);
//prettier-ignore
const mapa10 = new Map(Object.entries(objeto10)
    .map(([nombre, datos]) => [datos.email, { nombre: nombre, ...datos }]))

console.log(mapa10);
