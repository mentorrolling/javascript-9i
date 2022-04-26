//funciones
//Tareas

miFuncion();

//funciones declarativas
function miFuncion() {
  console.log("Hola Mundo");
}

let num1 = 34;
let num2 = 56;

function sumar(num1, num2) {
  console.log(num1 + num2);
}

// function calculadora(num1, num2, operacion) {
//   if (!num1 || !num2) {
//     return "Falta el valor";

//   }

//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return "Operacion inválida";
//   }
// }

function calculadora(num1 = 5, num2 = 10, operacion = "+") {
  if (!num1 || !num2) {
    return "Falta el valor";
  }

  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operacion inválida";
  }
}

// let resultado = calculadora();

function cubo(num) {
  return Math.pow(num, 3);
}

function doble(num) {
  return num * num;
}

let numeros = [23, 45, 2, 67];

function converCubo(array, funcion) {
  let numerosAlCubo = [];

  // for...of
  for (let n of array) {
    numerosAlCubo.push(funcion(n));
  }

  //   for (let i = 0; i < array.length; i++) {
  //     numerosAlCubo.push(funcion(array[i]));
  //   }

  return numerosAlCubo;
}

//funciones anónimas
const saludar = function () {
  console.log("Hola pibes");
};

saludar();

//scope------------------------------

const heroe = "Superman";

function saludarHeroe() {
  const heroe = "Batman";

  console.log(`Bienvenido ${heroe}`);
}

//Diferencias entre declarativas y anónimas
console.log(calcularDescuento(200, 15));
console.log(calcularDescuento2(200, 15));

function calcularDescuento(precio, descuento) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  return `El importe a abonar es de $${montoConDescuento}`;
}

const calcularDescuento2 = function (precio, descuento) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  return `El importe a abonar es de $${montoConDescuento}`;
};
//Otra diferencia es que a las funciones declarativas puedo asignarle un valor, pero a las anónimas no

/*
Tareas
-------

1- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


2- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

*/

//tarea 1
const examinarCadena = function (cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "El texto está en mayúsculas";
  }

  if (cadena === cadena.toLowerCase()) {
    return "El texto está en minúsculas";
  }

  return "El texto tiene mayúsculas y minúsculas";
};

//Tarea 2

const perimetroRectangulo = function (a, b) {
  return `El perímetro del rectángulo es ${2 * (a + b)}`;
};

let ladoA = prompt("Ingrese el valor del lado A del rectángulo");
let ladoB = prompt("Ingrese el valor del lado B del rectángulo");

console.log(perimetroRectangulo(ladoA, ladoB));
