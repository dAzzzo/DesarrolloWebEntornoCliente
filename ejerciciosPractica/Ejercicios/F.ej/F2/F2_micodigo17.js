/*
9. Escriba un programa JavaScript para calcular los días que quedan hasta la
próxima Navidad.
*/

let fecha = new Date();

let navidad = new Date('December 25, 2023 00:00:00');
let miliDia = 24*60*60*1000;


let numeroDias = Math. trunc((navidad - fecha)/miliDia);

document.write("Quedan " + numeroDias + " días");




