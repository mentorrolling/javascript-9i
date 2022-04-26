//REdondear un numero mas bajo
console.log(Math.floor(45.89));

//Redondear numero arriba
console.log(Math.round(45.52));

//Obtener el maximo de una lista de numeros
console.log(`El número máximo es: ${Math.max(56.5, 45, 90, 5, 1000)}`);

//Obtener el mínimo
console.log(`El número Mínimo es: ${Math.min(56.5, 45, 90, 5, 1000)}`);

let numero = "67.876533";
console.log(numero);
numero = parseInt(numero);
let decimal = "456.322456";
console.log(parseFloat(decimal));

//Elevar a la potencia
let base = numero;

let exponente = 2;

console.log(
  `El número ${base} elevado a la potencia ${exponente} es de ${Math.pow(
    base,
    exponente
  )}`
);

//Calcular raiz cuadrada
console.log(Math.sqrt(64));

//Número aleatorio
console.log(Math.round(Math.random() * 100) + 1);

//Obtener numero con dos decimales

decimal = parseFloat(decimal);

console.log(Math.round(decimal * 100) / 100);

//toFixed(2)
let decimalString = parseFloat(decimal.toFixed(3));

/*
Tarea 1
-------

- Obtener un número aleatorio entre 1 y 100

- Calcular su raiz cuadrada y mostrar en consola el resultado
- Elevarlo a la quinta potencia y mostrar en consola el resultado


Tarea 2
--------

- Según la siguiente lista de números 120,250,78,96,-38,45.72,1450,2380
- Mostrar en consola el menor 
- Mostrar en consola el mayor

Tarea 3
--------

- Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582
*/

//Tarea 1
let numrandom = Math.ceil(Math.random() * 50);
console.log("La raiz cuadrada de " + numrandom + " es " + Math.sqrt(numrandom));
console.log(
  `${numrandom} elevado a la quinta potencia es ${Matth.pow(numrandom, 5)}`
);

//Tarea 2
console.log(Math.min(120, 250, 78, 96, -38, 45.72, 1450, 2380));
console.log(Math.max(120, 250, 78, 96, -38, 45.72, 1450, 2380));

//Tarea 3
let nume1 = 45.895025;
let nume2 = 56.788789;
let nume3 = 78.413582;

nume1 = parseFloat(nume1).toFixed(2);
nume2 = parseFloat(nume2).toFixed(2);
nume3 = parseFloat(nume3).toFixed(2);
console.log(nume1);
console.log(nume2);
console.log(nume3);
console.log(Math.round(nume1));
console.log(Math.round(nume2));
console.log(Math.round(nume3));
