/*
Crea una expresion regular que valida una hora en formato HH:MM
de 24 horas, donde HH representa las horas y los MM los minutos
*/

let expresionRegular = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
let horaSinParametro = new Date()

let hora = horaSinParametro.getHours();
let min = horaSinParametro.getMinutes();

console.log(hora + ":" + min);