//Ejercicio 3
/*
Usando una funcion anonima, transforma una cadena de texto en su inversa
*/

//Creamos la funcion anonima sin meter nada en ()
let inversion = function () {
    //Dentro de la funcion creamos la palabra que vayamos a usar, ojo, tambien se podria usar un prompt
    let palabra = prompt("Escriba una palabra:");
    //Usamos split para separar la palabra en partes y despues un reverse para darle la vuelta
    let arrInverso = palabra.split("").reverse();
    //Lo escribimos por pantalla
    document.write("Este es el array dado la vuelta: ", arrInverso);
  };
  inversion();