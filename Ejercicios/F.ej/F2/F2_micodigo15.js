/*Solicitar que se ingrese dos veces una clave. Mostrar un mensaje
si son iguales (tener en cuenta que para ver si dos variables
tienen el mismo valor almacenado debemos utilizar el operador
==)
*/

/*
Prompt se utiliza para sacar un cuadro por pantalla que pregunte o 
haga algo
*/
let clave1 = "primero";
let primero = prompt(clave1);

let clave2 = "segundo";
let segundo = prompt(clave2);

document.write(primero ==  segundo);