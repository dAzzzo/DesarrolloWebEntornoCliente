/*4b. Escriba una función de JavaScript para obtener el nombre del mes a partir de
una fecha en particular.
Funcion( mes,año) Devuelve 30 o 31 dias
*/


function cantidadDias(mes, año) {
   
    //Creamos el array
    //Verdaderamente no hace falta realizar el array
   /* let meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];*/


        //Comprobamos la cantidad de dias
        if (mes < 1 || mes > 12) {
            return "Mes no válido";
        }
   
        let ultimoDiaDelMes = new Date(año, mes, 0).getDate();
       // let nombreMes = meses[mes - 1];
   
        return ultimoDiaDelMes;
    }
   
    // Ejemplo: octubre (1 = enero, 2 = febrero, ..., 12 = diciembre)
    let mes = prompt("Escriba un mes ejemplo: octubre (1 = enero, 2 = febrero, ..., 12 = diciembre)");
    let año = 2023;
   
    let resultado = cantidadDias(mes, año);
    document.write(resultado);
