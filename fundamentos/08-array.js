//Array o arreglos
//lista

//mutacion de un arreglo
//métodos

let alumnos = ["Pablo", "Fabrizio", "Laura", "Gabriela"];

//acceder a un elemento dentro del arreglo
alumnos[2];
//obtener el ultimo elemento
alumnos[alumnos.length - 1];

//concatenar todos los elementos en un string
alumnos.join("-");

//Iterar o recorrer un arreglo
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Hola soy ${alumnos[i]}`);
}

//agregar elementos
alumnos.push("Jorge");
//Eliminar el último elemento
alumnos.pop();

//Añadir un elemento al principio
alumnos.unshift("Walter");
//Eliminar un elemento del principio
alumnos.shift();

//Encontrar el indice de un elemento
console.log(alumnos.indexOf("Pablo"));

//Encontrar un elemento
console.log(alumnos.includes("Laura"));

//Eliminar un elemento mediante su posicion
let pos = 1;
alumnos.splice(pos, 1);

//Eliminar varios elementos a partir de una posición
let alumnosEliminados = alumnos.splice(0, 3);

//reemplazar valores
alumnos.splice(0, 2, "Daniel", "Augusto");

//Agregar valores a partir de la posicion 1
alumnos.splice(1, 0, "Florinda", "Edmundo");

//Conactenar dos array
let comision = alumnas.concat(alumnos);

//Invierte el orden
alumnos.reverse();

//Ordenar elementos de un array
alumnos.sort();

//Ordenar números
let n = [10, 2, 45, 3, 1, 67, 92, 34];
n.sort(function (a, b) {
  return a - b;
});

//Extrae una porción del array sobre el que se llama y devuelve un nuevo array.
let alumnosEspeciales = alumnos.slice(1, 3); //posicion inicial y posicion final

let respuesta = ["🥚", "🐔"].sort();

/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra, última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a. Sacar toda esta información en consola
*/

let frase = "La sonrisa es la mejor respuesta para una mirada";
let palabras = frase.split(" ");

console.log(`Cantidad de palabras encontradas: ${palabras.length}`);
console.log(`Primera palabra: ${palabras[0]}`);
console.log(`Ultima palabra: ${palabras[palabras.length - 1]}`);
console.log(`Palabras colocadas en orden inverso: ${palabras.reverse()}`);
console.log(`Palabras ordenadas de a-z: ${palabras.sort()}`);
console.log(`Palabras ordenadas de z-a: ${palabras.sort().reverse()}`);

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si ese número se encuentra en la lista o no
*/

let lista = [23, 45, 78, 96, 150, 60];

let numero = parseInt(prompt("Ingrese un número"));

if (lista.includes(numero)) {
  console.log(`El número ${numero} se encuentra en la lista 🙂`);
} else {
  console.log(`El número ingresado no está en la lista 😞`);
}

/*Tarea 3:
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

- Imprime la clasificación actual
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

- Celia adelanta a Raúl
- Antonio es descalificado y se elimina del concurso
- Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
- Hay una nueva participante que pasa a encabezar la clasificación: Marta
- Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
*/

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
console.log(`Clasificación actual: ${clasificaciones}`);
//Celia adelanta a Raúl
clasificaciones[2] = "Celia";
clasificaciones[3] = "Raúl";
// clasificaciones.splice(2, 2, "Celia", "Raúl");

//Antonio es descalificado y se elimina del concurso
clasificaciones.pop();

//Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
clasificaciones.splice(1, 0, "Roberto", "Amaya");

//Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificaciones.unshift("Marta");

//Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
console.log(`Clasificación actualizada: ${clasificaciones}`);

/*Tarea 4: 
- Pedir por pantalla el nombre de 5 alumnos de la comisión. Usar ciclo while
- Guardarlos en un arreglo llamado rollingCoders
- Usando el arreglo mostrar en consola por cada uno un mensaje de bienvenida al mundo del desarrollo web.

*/

let rollingCoders = [];
let cantidad = 5;
while (cantidad > 0) {
  let nombre = prompt(
    "Ingrese el nombre del compañero o compañera de la comisión"
  );
  rollingCoders.push(nombre);
  cantidad--;
}

// for (let index = 0; index < 5; index++) {
// }

for (let index = 0; index < rollingCoders.length; index++) {
  console.log(
    `Hola ${rollingCoders[index]}!, Bienvenid@ al mundo del desarrollo web 💻`
  );
}
