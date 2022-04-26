//Ejemplo
let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

//Crear funciones que realicen las siguientes tareas:

//1- Mostrar una lista con los nombres completos en orden alfabético

//2- Crear tarjetas de presentación con los datos de los usuarios

//3- Agregar un usuario más al final de la lista

//4- Actualizar el nombre de un usuario

//5- Eliminar un usuario en particular

//6- Realizar búsqueda de usuarios cuyo apellido coincida con el termino a buscar

//Resolución de ejercicios
//--------------------------

//1
const listarUsuarios = function (array) {
  let usuarioOrdenado = array.map(function (usuario) {
    return `${usuario.last_name} ${usuario.first_name}`;

    // console.log(`${index + 1}-${usuario.first_name} ${usuario.last_name}`);
  });

  usuarioOrdenado.sort();

  for (let index = 0; index < usuarioOrdenado.length; index++) {
    console.log(`${index + 1} - ${usuarioOrdenado[index]}`);
  }
};

//2
const tarejatasPresentacion = function () {
  data.forEach(function (user) {
    document.write(`------Tarjeta de presentación------<br />`);
    document.write(`<b>Nombre:</b> ${user.first_name}<br />`);
    document.write(`<b>Apellido:</b> ${user.last_name}<br />`);
    document.write(`<b>Contacto:</b> ${user.email}<br /><br />`);
  });
};

//3
const agregarUsuario = function () {
  let idNuevo = data[data.length - 1].id + 1;

  let nombre = prompt("Ingrese el nombre del usuario");
  let apellido = prompt("Ingrese el apellido del usuario");
  let correo = prompt("Ingrese el correo del usuario");

  if (!nombre || !apellido || !correo) {
    return "Faltaron datos a cargar";
  }

  data.push({
    id: idNuevo,
    first_name: nombre,
    last_name: apellido,
    email: correo,
  });
};

//4
const actualizarNombre = function (id) {
  let info = data.findIndex(function (user) {
    return user.id === id;
  });

  if (info < 0) {
    return "El id ingresado no existe";
  }

  // console.log(info);

  let nombreNuevo = prompt(
    "Ingrese el nombre nuevo del usuario " + data[info].first_name
  );

  data[info].first_name = nombreNuevo;
};

//5

const BorrarUsuario = function (id) {
  let info = data.findIndex(function (user) {
    return user.id === id;
  });

  if (info < 0) {
    return "El id ingresado no existe";
  }

  console.log(info);

  let validar = confirm(
    `Esta seguro que quiere eliminar al usuario ${data[info].first_name} 🤔?`
  );

  if (validar) {
    data.splice(info, 1);
    alert(`El usuario con el id ${id} fue eliminado ✅`);
  }
};

//6
const filtrarUsuarios = function (termino) {
  let resultado = data.filter(function (user) {
    return user.first_name.toUpperCase().includes(termino.toUpperCase());
  });

  console.log(`Cantidad de registros encontrados: ${resultado.length}`);
  listarUsuarios(resultado);
};

//----POO------

/*
Una clase es un molde o plantilla para crear Objetos
*/

class Usuario {
  constructor(nombre, username, password, estado = true) {
    this.nombre = nombre;
    this.username = username;
    this.pass = password;
    this.estado = estado;
  }
  presentacion() {
    console.log("------Tarjeta de presentación------");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Nombre de usuario: ${this.username}`);
  }
}

let user1 = new Usuario("José Perez", "jperez", "12345678", true);

//Crear una nueva función dentro de una clase
Usuario.prototype.saludar = function () {
  console.log(`Hola! soy ${this.name}`);
};

class Administrador extends Usuario {
  constructor(nombre, username, password, estado = true, puesto) {
    super(nombre, username, password, estado);
    this.puesto = puesto;
  }

  cambiarEstado() {
    this.estado = !this.estado;
  }

  superPresentacion() {
    this.presentacion();
    console.log(`Puesto: ${this.puesto}`);
  }
}

/*
    Cuenta bancaria
    1-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
    - Una propiedad titular.
    - Una propiedad saldo, teniendo como valor inicial 0.
    - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
    - Un método extraer() que permita retirar la cantidad pasada como parámetro.
    - Un método informar() que retorne la información del estado de la cuenta. 
    - Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
    
    */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.informar();
    } else {
      console.warn("El valor ingresado es inválido");
    }
  }
  extraer(valor) {
    if (valor > this.saldo || valor < 0) {
      console.warn(
        "El valor ingresado es inválido o no dispone de saldo suficiente"
      );
    } else {
      this.saldo -= valor;
      this.informar();
    }
  }
  informar() {
    console.log("-----Estado de cuenta------");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo de la cuenta: $${this.saldo}`);
  }
}

let cuenta001 = new Cuenta("Alex Villegas");

/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona {
  constructor(nombre, edad, sexo, peso, altura, nacimiento, dni = "") {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
    this.dni = dni;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.nacimiento >= 1930 && this.nacimiento <= 1948:
        console.log(
          `Perteneces a la generación Silent Generation y tu rasgo característico es la Austeridad 😐`
        );
        break;
      case this.nacimiento >= 1949 && this.nacimiento <= 1968:
        console.log(
          `Perteneces a la generación Baby Boom y tu rasgo característico es la Ambición 🤑`
        );
        break;
      case this.nacimiento >= 1969 && this.nacimiento <= 1980:
        console.log(
          `Perteneces a la generación X y tu rasgo característico es la Obseción por el éxito 😎`
        );
        break;
      case this.nacimiento >= 1981 && this.nacimiento <= 1993:
        console.log(
          `Perteneces a la generación Y (Millenials) y tu rasgo característico es la Frustración 😖`
        );
        break;
      case this.nacimiento >= 1994 && this.nacimiento <= 2010:
        console.log(
          `Perteneces a la generación Z (Centenials) y tu rasgo característico es la Irreverencia 😜`
        );
        break;

      default:
        console.log(
          `Perteneces a una generación nueva y tu rasgo característico está por descubrirse 🤔`
        );
        break;
    }
  }
  mostrarDatos() {
    //nombre, edad, dni, sexo, peso, altura, nacimiento
    console.log("------Datos personales------");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Dni: ${this.dni}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Año de nacimiento: ${this.nacimiento}`);
  }
  generarDni() {
    if (!this.dni) {
      for (let index = 0; index < 8; index++) {
        let numerito = Math.round(Math.random() * 9);
        this.dni += String(numerito);
      }
      console.log(`El DNI generado es: ${this.dni}`);
    } else {
      console.warn(`${this.nombre} ya posee un DNI`);
    }
  }
}

let pablo = new Persona("Pablo Marino", 38, "Masculino", 73, 1.71, 1982);

/*
3- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
  constructor(ISBN, titulo, autor, numpag) {
    this.isbn = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numpag = numpag;
  }
  get mostrarLibro() {
    return `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numpag} páginas `;

    // console.log(
    //   `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numpag} páginas `
    // );
  }
}

let libro1 = new Libro(
  "978-84-471-2512-8",
  "El asombroso Spiderman - volviendo a casa",
  "Jhon Romita JR",
  50
);
let libro2 = new Libro(
  "978-84-16152-53-7",
  "La muerte de Superman",
  "ECCEDICIONES.COM",
  62
);

const compararPaginas = function (libro1, libro2) {
  if (libro1.numpag > libro2.numpag) {
    let cantidadPaginaDif = libro1.numpag - libro2.numpag;
    return `El libro ${libro1.titulo} tiene ${cantidadPaginaDif} páginas más que el libro ${libro2.titulo}`;
  }

  if (libro1.numpag < libro2.numpag) {
    let cantidadPaginaDif = libro2.numpag - libro1.numpag;
    return `El libro ${libro2.titulo} tiene ${cantidadPaginaDif} páginas más que el libro ${libro1.titulo}`;
  }

  return `Ambos libros tienen la misma cantidad de páginas`;
};

/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(nombre): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(nombre): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.

*/

class Agenda {
  constructor(contactos = [], memoria = 10) {
    this.contactos = contactos;
    this.memoria = memoria;
  }
  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      return "No hay espacio en la agenda para más contactos";
    } else {
      let existe = this.existeContacto(contacto.nombre);
      if (!existe) {
        this.contactos.push(contacto);
        return "Se agregó contacto";
      } else {
        return "El contacto ya existe en la agenda";
      }
    }
  }
  existeContacto(nombre) {
    let validar = this.contactos.find(function (item) {
      return item.nombre.toUpperCase() === nombre.toUpperCase();
    });
    if (validar) {
      return true;
    } else {
      return false;
    }
  }
  listarContactos() {
    console.log("------Detalle de contactos------");
    this.contactos.forEach(function (contacto) {
      console.log(`Nombre: ${contacto.nombre}`);
      console.log(`Teléfono: ${contacto.telefono}`);
      console.log(`--------------------------------`);
    });
  }
  buscarContacto(nombre) {
    let validar = this.contactos.find(function (item) {
      return item.nombre.toUpperCase() === nombre.toUpperCase();
    });
    if (validar) {
      return `Teléfono: ${validar.telefono}`;
    } else {
      return `El contacto con el nombre ${nombre} no existe en la agenda`;
    }
  }
  eliminarContacto(nombre) {
    let index = this.contactos.findIndex(function (item) {
      return item.nombre.toUpperCase() === nombre.toUpperCase();
    });
    if (index >= 0) {
      let validar = confirm(
        `Está seguro que quiere eliminar a ${nombre} de su agenda?`
      );
      if (validar) {
        this.contactos.splice(index, 1);
        return "Registro eliminado de la agenda";
      }
    } else {
      return "No existe registro en la agenda";
    }
  }
  agendaLlena() {
    if (this.contactos.length < this.memoria) {
      return false;
    } else {
      return true;
    }
  }
  huecosLibres() {
    let espacio = this.memoria - this.contactos.length;
    if (espacio > 0) {
      return `Se pueden agregar ${espacio} registros más a la agenda`;
    } else {
      return "No queda espacio en la agenda, eliminé contactos viejos";
    }
  }
}
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

let maxi = new Contacto("Maximiliano Marino", 3815392733);
let jose = new Contacto("José Gonzalez", 3815403567);
let paula = new Contacto("Paula Fernandez", 3815403578);

let agenda2022 = new Agenda();

agenda2022.aniadirContacto(maxi);
agenda2022.aniadirContacto(jose);
agenda2022.aniadirContacto(paula);

const menuAgenda = function () {
  let opcion = 0;
  let nombre = "";
  do {
    opcion = Number(
      prompt(
        "Menú de opciones \n 1 - Agregar contacto a la agenda \n 2 - Listar contactos de la agenda\n 3 - Buscar contacto por nombre\n 4 - Borrar un contacto\n 5 - Chequear memoria de la agenda"
      )
    );

    switch (opcion) {
      case 1:
        let contacto = prompt("Ingrese el nombre del contacto");
        let telefono = prompt("Ingrese el teléfono");

        console.log(
          agenda2022.aniadirContacto(new Contacto(contacto, telefono))
        );

        break;
      case 2:
        console.clear();
        agenda2022.listarContactos();

        break;
      case 3:
        console.clear();
        nombre = prompt("Ingrese el nombre a buscar");
        console.log(agenda2022.buscarContacto(nombre));
        break;
      case 4:
        console.clear();
        nombre = prompt("Ingrese el nombre del contacto a borrar");
        console.log(agenda2022.eliminarContacto(nombre));
        break;
      case 5:
        console.log(agenda2022.huecosLibres());
        break;

      default:
        console.log("Gracias por usar el sistema de agenda 2022 😎");
        break;
    }
  } while (opcion);
};

menuAgenda();
