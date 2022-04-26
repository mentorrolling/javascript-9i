//for

for (let i = 0; i < 10; i++) {
  //acciones
  console.log(i);
}

//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola la tabla

// let tabla = parseInt(prompt('Ingrese el npumero de la tabla a calcular'))

// if (isNaN(tabla)) {
//     console.error('DEbe enviar un número')
// } else {

// while (tabla !== NaN) {
//     // for (let i = 1; i <= 10; i++) {

//     //     // 2 x 1 = 2
//     //     //2 x 2 = 4
//     //     console.log(`${tabla} x ${i} = ${tabla * i}`)

//     // }

//     console.log(tabla)

//     tabla = parseInt(prompt('Ingrese el npumero de la tabla a calcular'))
// }
// }

// let tabla = prompt('Ingrese el numero de la tabla que desea calcular');

// while (tabla !== null || tabla !== "") {
//     tabla = parseInt(tabla);

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${tabla} x ${i} = ${tabla * i}`);
//     }
//     tabla = prompt('Ingrese el numero de la tabla que desea calcular');
// }

let tabla = parseInt(prompt("numero"));
while (tabla) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  tabla = parseInt(prompt("numero"));
}
console.error("Usuario cancelo o ingreso un dato inválido");
