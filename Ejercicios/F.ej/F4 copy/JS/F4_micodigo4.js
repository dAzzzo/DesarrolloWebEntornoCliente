/*8a. Escriba una función de JavaScript para obtener la diferencia entre dos fechas en
días.
Funcion(fecha1, fecha2) Devuelve la diferencia de dias
*/


function diferenciaFecha(fecha1, fecha2){

    let fechaMilisegundo1 = Date.parse(fecha1);
    let fechaMilisegundo2 = Date.parse(fecha2);

    let diferencia = Math.abs(fechaMilisegundo2-fechaMilisegundo1);

    let numDias = Math.floor(diferencia/(1000*60*60*24));

    return numDias;
}

let fecha1 = prompt('Introduzca la primera fecha(YYYY-MM-DD):');
let fecha2 = prompt('Introduzca la segunda fecha(YYYY-MM-DD):');

let resultado = diferenciaFecha(fecha1, fecha2);
document.write(resultado);