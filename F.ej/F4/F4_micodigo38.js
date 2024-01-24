/*8a. Escriba una función de JavaScript para obtener la diferencia entre dos fechas en
días.
Funcion(fecha1, fecha2) Devuelve la diferencia de dias
*/


let fecha1 = prompt("Escriba la primera fecha(YYYY-MM-DD): ");
let fecha2 = prompt("Escriba la segunda fecha(YYYY-MM-DD): ");


function diferenciaFecha(fecha1, fecha2){


    //Creamos la fecha a milisegundo
let fechaMilisegundo1 = Date.parse(fecha1);
let fechaMilisegundo2 = Date.parse(fecha2);


//Calculamos la diferencia
let diferencia = Math.abs(fechaMilisegundo2-fechaMilisegundo1);




    let numDias = Math.floor(diferencia/(1000*60*60*24));
   
return numDias;
}


let numDias =  diferenciaFecha(fecha1, fecha2);


document.write("La diferencia entre las fechas es de " + numDias + " días.")





