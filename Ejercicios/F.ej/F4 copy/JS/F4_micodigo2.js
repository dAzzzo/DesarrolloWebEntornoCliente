/*4b. Escriba una función de JavaScript para obtener el nombre del mes a partir de
una fecha en particular.
Funcion( mes,año) Devuelve 30 o 31 dias
*/


function cantidadDias(mes, año) {

    if (mes < 1 || mes > 12) {
        return 'Mes no valido.';
    }

    let ultimoDiaDelMes = new Date(mes, año, 0).getDate();
    return ultimoDiaDelMes;
}

let mes = prompt('Escriba un mes ejemplo: octubre (1 = enero, 2 = febrero, ..., 12 = diciembre)'); 
let año = 2024;

let resultado = cantidadDias(mes, año);
document.write(resultado);