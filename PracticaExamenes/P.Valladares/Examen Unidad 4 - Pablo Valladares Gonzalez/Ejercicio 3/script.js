//Cambiar estilo de la pagina y el boton
function cambiar() {
    if (document.getElementById("cuerpo").classList.contains("blanco")) {
        document.getElementById("cuerpo").classList.remove("blanco");
        document.getElementById("cuerpo").classList.add("oscuro");
        document.getElementById("cambiarEstilo").classList.remove("btn-dark");
        document.getElementById("cambiarEstilo").classList.add("btn-light");
    } else {
        document.getElementById("cuerpo").classList.remove("oscuro");
        document.getElementById("cuerpo").classList.add("blanco");
        document.getElementById("cambiarEstilo").classList.remove("btn-light");
        document.getElementById("cambiarEstilo").classList.add("btn-dark");
    }
}

//Script para el ejercicio

let cadena = prompt("Introduce la cadena");

//Creamos la funcion anonima
const delreves = function (cadena) {
    //Hacemos un bucle del reves
    for (let i = cadena.length; i >= 0; i--) {
        //Mostramos las letras segun el bucle del reves
        document.write(cadena.charAt(i));
    }
};

//Mostramos la funcion
delreves(cadena);
