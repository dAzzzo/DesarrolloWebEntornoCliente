/*
6.
Se ingresan tres notas de un alumno, si el promedio es mayor o
igual a siete mostrar el mensaje ‘Promocionado’. Tener en cuenta
que para obtener el promedio debemos operar

suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir
inmediatamente el valor ingresado a entero podemos hacer:
nota1=prompt(‘Ingrese primer nota:’,”);
nota1=parseInt(nota1);
*/

/*
Prompt se utiliza para sacar un cuadro por pantalla que pregunte o 
haga algo
*/
let nota1 = "primero";
let primero = prompt(nota1);

let nota2 = "segundo";
let segundo = prompt(nota2);

let nota3 = "tercero";
let tercero = prompt(nota3);

document.write("El promedio es: " + (parseInt(primero) + parseInt(segundo) + parseInt(tercero))/3);