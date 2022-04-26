let nombre = "Eugenio";
let apellido = "Perez";
let frase = "          Bienvenido a la clase      ";

//concatenar texto
console.log(nombre, apellido);
console.log(nombre + " " + apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos de los String

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(apellido.length);
console.log(nombre.charAt(4));
console.log(apellido.substring(2, 3)); //parametros de substr (posicion, cantidad de caracteres a mostrar)

apellido.split("");
console.log(frase.trim());

//Tareas
//--------

//traer la última letra del apellido
// 1- ingreso el apellido
// 2 - calcular cantidad de caracteres
// 3 - obtener la letra llamando a la ultima posición

console.log(apellido.charAt(apellido.length - 1));

//Dada la siguiente palabra
let palabra = "marmota";

//pasarla a mayuscula
console.log(palabra.toUpperCase());
//pasarla a minuscula
console.log(palabra.toLowerCase());
//capitalizar la palabra
let primeraPalabra = palabra.charAt(0).toUpperCase();
let resto = palabra.substring(1);
//let palabraCapitalizada=primeraPalabra+resto
let palabraCapitalizada =
  palabra.charAt(0).toUpperCase() + palabra.substring(1);
console.log(palabraCapitalizada);
