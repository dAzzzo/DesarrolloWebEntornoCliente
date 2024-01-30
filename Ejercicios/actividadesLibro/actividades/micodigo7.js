
console.log("Menú abierto");

console.log("Introduzca el día de la semana: ")

//Escribimos el dia en el prompt
let  diaSemana = "Dia de la Semana";
let DiaSemana = prompt(diaSemana);

//Creamos el switch
switch (DiaSemana.toUpperCase()) {
    case `L`:
        console.log("Horario 1");
        break;
    case `M`:
        console.log("Horario 2");
        break;
    case `X`:
        console.log("Horario 3");
        break;
    case `J`:
        console.log("Horario 4");
        break;
    case `V`:
        console.log("Horario 5");
        break;
    case `S`:
        console.log("Horario 6");
        break;
    case `D`:
        console.log("Horario 7");
        break;
    default:
        console.log("Opción incorrecta");
}
console.log("Menú cerrado");