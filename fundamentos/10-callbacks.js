//callbacks
//son funciones que se envian como parámetros y se ejecutan despues de un método.

let numeros = [37, 11, 2, 15, 26, 12, 52, 6, 24, 37];

let numerosOrdenados = numeros.sort(function (num1, num2) {
  return num1 - num2;
});

//filter
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
let pares = numeros.filter(function (num) {
  return num % 2 === 0;
});

//find
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
let alumnos = ["Lucas", "Pablo", "Fabrizio", "Jorge"];

let resultadoDeBusqueda = alumnos.find(function (alumno) {
  return alumno === "Mateo";
});

//map
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
let numerosDobles = numeros.map(function (num) {
  return num * 2;
});

//forEach
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.

alumnos.forEach(function (alumno) {
  let nombreMayuscula = alumno.toUpperCase();
  console.log(nombreMayuscula);
});

//Ejercicios

/* Tarea 1
-----------
Dado 3 arreglos de números unir todos en uno solo y ordenarlos de mayor a menor

*/

let numeros1 = [13, 456, 786, 23, 45];
let numeros2 = [67, 3, 5];
let numeros3 = [90, 1245, 56000];
function ejercicio1() {
  let numerosParaOrdenar = numeros1.concat(numeros2, numeros3);
  numerosParaOrdenar.sort(function (a, b) {
    return b - a;
  });
  console.log(numerosParaOrdenar);
}

/*
Tarea 2
---------
  Filtrar de un arreglo de personas todos los nombres que contengan la letra "m"
*/

let personas = [
  "Joaquín",
  "Daniel",
  "Magdalena",
  "Gonzalo",
  "Armando",
  "Samuel",
  "Valentina",
];

function obtenerNombreConLetra(letra) {
  let nombres = personas.filter(function (nombre) {
    return nombre.toUpperCase().includes(letra.toUpperCase());
  });

  return nombres;
}

console.log(obtenerNombreConLetra("m"));

/*
Tarea 3
----------
Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {
  let lenguajesOrdenados = [];
  lenguajesOrdenados = lenguajesOrdenados.concat(lenguajes);
  console.log(lenguajesOrdenados);

  lenguajesOrdenados.sort().map(function (lenguaje, index) {
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });
}
