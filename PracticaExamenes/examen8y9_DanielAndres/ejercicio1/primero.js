/*
        Crea un archivo llamado primero.js que contenga dos metodos, uno de ellos
        debe pedir la edad al usuario tratamiento de excepciones (si el usuario no introduce un número). Y otro
        metodo que segun la edad calculara el año de nacimiento. Crea un segundo 
        archivo llamado segundo.js que utilice los dos metodos anteriores sin
        tener que implementarlos dentro de este y con el modo estricto. Además, en este
        tendrás un metodo que haga uso del metodo de peticion de la edad y que segun
        esta devuelva un booleano si el usuario ha nacido antes del año 2006, tratando los
        errores con excepciones. Se prooduzcan o no errores debes pasar a mostrar por consola un
        mensaje que diga que el programa ha termnado, utilizando la estructura correcta.
        */
let edad = parseInt(prompt("¿Podría darme su edad? (Tiene que ser un número positivo)"));

//Funcion que piode la edad del usuario, solo la recoge si es mayor de 0 o si no es númerico
export function edadUsuario() {
  if (edad < 0 || edad == isNaN) {
    error("Ese numero no vale");
  } else if (edad >= 0) {
    console.log(`Enhorabuena, tienes ` + edad + " años");
  }
}
edadUsuario();

//Funcion que comprueba tu año de nacimiento
export function anioNacimiento() {
  let fecha = parseInt(prompt("¿En que año estamos?"));
  let calculo = 0;
  calculo = fecha - edad;
  console.log("\nTu año de nacimiento es: " + calculo);
}
anioNacimiento();
