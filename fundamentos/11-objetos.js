let alumno = {
  nombre: "Pablo Marino",
  edad: 38,
  dni: "29640333",
  curso: "Fullstack",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

//obtener valores

alumno.nombre;

alumno["edad"];

//Agregar un nuevo atributo
alumno.domicilio = "Lomas de tafí";

//Modificar un valor
alumno.nombre = "Pablo Daniel Marino";

//Eliminar un valor
delete alumno.edad;

//for in
for (const atributo in alumno) {
  if (atributo !== "saludar") {
    console.log(`${atributo}: ${alumno[atributo]}`);
  }
}

/*
1- Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

*/

let persona = {
  nombre: "José Luis",
  edad: 34,
  genero: "masculino",
  obtDetalles: function () {
    for (const atributo in this) {
      if (atributo !== "obtDetalles") {
        console.log(`${atributo}: ${this[atributo]}`);
      }
    }
  },
};

/*
2- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

*/
let auto = {
  color: "red",
  marca: "Fiat",
  modelo: "Palio",
  annio: 2018,
  encendido: false,
  encenderApagar: function () {
    this.encendido = !this.encendido;
    if (this.encendido) {
      console.log("El vehículo está encendido");
    } else {
      console.log("El vehículo está apagado");
    }
  },
};

//Arreglo de objetos
let alumnos = [
  { nombre: "Julio", curso: "Fullstack" },
  { nombre: "Fabricio", curso: "Javascript" },
  { nombre: "Miguel", curso: "Fullstack" },
];
//recorrer el arreglo de objetos

alumnos.forEach(function (alumno) {
  console.log(`Nombre: ${alumno.nombre} - ${alumno.curso}`);
  console.log("----------------------------------");
});

for (let index = 0; index < alumnos.length; index++) {
  console.log(`Nombre: ${alumnos[index].nombre} - ${alumnos[index].curso}`);
}
