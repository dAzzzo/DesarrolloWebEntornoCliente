//Ejercicio2

//Creamos un mapa con los nombres de las variables
let mapa = new Map([
  ["DWEC", " Desarrollo Web en Entorno Cliente<br>"],
  ["DIW", " Diseño Web<br>"],
  ["DWES", " Desarrollo Web en Entorno Servidor<br>"],
  ["ING", " Ingles<br>"],
  ["DAW", " Despliegue de Aplicaciones Web"],
]);

//Creamos una funcion para ver el modulo
function verModulo(mapa) {
  //Objeto de busqueda
  let buscador = new Map();

  //Mostramos el mapa
  for (let [siglas, nombre] of mapa) {
    document.write(siglas, nombre);
  }

  return buscador;
}
document.write("<br>");
// Convierte el Map a un array para mostrarlo
let buscador = verModulo(mapa);

// Convierte el Map a un array para mostrarlo
let ResultadoArray = Array.from(buscador);

//Creamo suna funcion que solo muestre la abreiviatura
function abreviatura(mapa) {
  //Objeto de busqueda
  let abrev = new Map();

  //Mostramos la abreviatura
  for (let [siglas, nombre] of mapa) {
    document.write("Las abeviaturas son: " + siglas + "<br>");
  }
  return abrev;
}
document.write("<br><br>");
// Convierte el Map a un array para mostrarlo
let abrev = abreviatura(mapa);

// Convierte el Map a un array para mostrarlo
let ResultadoAbrev = Array.from(abrev);

//Creamo suna funcion que solo muestre la abreiviatura
function Nombre(mapa) {
  //Objeto de busqueda
  let nom = new Map();

  //Mostramos la abreviatura
  for (let [siglas, nombre] of mapa) {
    document.write("Los nombres son: " + nombre);
  }
  return abrev;
}
document.write("<br>");
// Convierte el Map a un array para mostrarlo
let nom = Nombre(mapa);

// Convierte el Map a un array para mostrarlo
let ResultadoNom = Array.from(nom);

//Buscamos si esta DAW
function buscarDaw(mapa) {
  //Objeto de busqueda
  let estaDaw = new Map();

  //Coprobamos que este con un has
  for (let [siglas, nombre] of mapa) {
    if (!estaDaw.has("DAW")) {
      document.write("<br>Está DAW en el mapa");
    } else {
      document.write("No está Daw");
    }
  }
  return estaDaw;
}
document.write("<br>");
// Convierte el Map a un array para mostrarlo
let estaDaw = buscarDaw(mapa);

// Convierte el Map a un array para mostrarlo
let ResultadoDaw = Array.from(estaDaw);

//Buscamos si esta DAW
function cambiarDaw(mapa) {
  //Objeto de busqueda
  let cambiarMapa = new Map();

  if ("DAW" == true) {
    //Cambiamos el mapa
    cambiarMapa.set["DWEC", " Desarrollo Web en Entorno Cliente<br>"],
    cambiarMapa.set["DIW", " Diseño Web<br>"],
    cambiarMapa.set["DWES", " Desarrollo Web en Entorno Servidor<br>"],
    cambiarMapa.set["ING", " Ingles<br>"],
    cambiarMapa.set["DAW", " Despliegue de Aplicaciones Web"].set("DAW2", " Despliegue de Aplicaciones Web");
    
  }
  return cambiarMapa;
}

let cambiarMapa = cambiarDaw(mapa);

//Pasamos por pantalla el nuevo mapa
function nuevoMapa(cambiarMapa) {
  let creacionMapa = new Map();

  //Mostramos el mapa NNUEVO
  for (let [siglas, nombre] of cambiarMapa) {
    document.write(siglas, nombre);
  }
  return creacionMapa;
}

document.write("<br>");
// Convierte el Map a un array para mostrarlo
let creacionMapa = nuevoMapa(cambiarMapa);

// Convierte el Map a un array para mostrarlo
let ResultadoNuevoDaw = Array.from(cambiarMapa);

//Creamos un mapa con los nombres de las variables 2
let mapa2 = new Map([
    ["DWEC", " Desarrollo Web en Entorno Cliente<br>"],
    ["DIW", " Diseño Web<br>"],
    ["DWES", " Desarrollo Web en Entorno Servidor<br>"],
    ["ING", " Ingles<br>"],
    ["DAW2", " Despliegue de Aplicaciones Web"],
  ]);

  //Creamos una funcion para ver el modulo
function verModulo2(mapa2) {
    //Objeto de busqueda
    let buscador2 = new Map();
  
    //Mostramos el mapa
    for (let [siglas, nombre] of mapa2) {
      document.write(siglas, nombre);
    }
  
    return buscador2;
  }
  document.write("<br>");
  // Convierte el Map a un array para mostrarlo
  let buscador2 = verModulo(mapa2);
  
  // Convierte el Map a un array para mostrarlo
  let ResultadoArray2 = Array.from(buscador2);