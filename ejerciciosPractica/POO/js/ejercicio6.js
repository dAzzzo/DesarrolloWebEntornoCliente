/*
Ejercicio: Validación y Formato de Fechas
Crea una expresión regular que valide una fecha en 
formato YYYY-MM-DD, donde YYYY representa el año, MM 
el mes y DD el día.

Obtén la fecha actual usando new Date(). Luego, 
extrae el año, el mes y el día de esta fecha.

Utiliza la expresión regular para validar si la 
fecha actual cumple con el formato YYYY-MM-DD. Si 
coincide, imprime un mensaje indicando que la fecha 
es válida. Si no coincide, imprime un mensaje de error.

Formatea la fecha actual en el formato YYYY-MM-DD y 
muestra este resultado por consola.
*/

let expresionRegular = /^\d{4}-\d{2}-\d{2}$/;

let fechaActual = new Date();
let year = fechaActual.getFullYear();
let month = ('O' + (fechaActual.getMonth() + 1)).slice(-2);
let day = ('O' + fechaActual.getDate()).slice(-2);

if(expresionRegular.test(`${year}-${month}-${day}`)){
    console.log("La fecha actual es válida :)");
}else{
    console.log("Error: La fecha actual no cumple con el formato esperado :(");
}

let fechaFormateada = `${year}-${month}-${day}`;
console.log("Fecha formateada: ", fechaFormateada);