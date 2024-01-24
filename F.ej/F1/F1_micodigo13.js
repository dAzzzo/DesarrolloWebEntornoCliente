/*5. Escribir un programa en el cual se ingresen cuatro números,
calcular e informar la suma de los dos primeros y el producto del
tercero y el cuarto.*/

/*
Prompt se utiliza para sacar un cuadro por pantalla que pregunte o 
haga algo
*/
let numero1 = "primero";
let primero = prompt(numero1);

let numero2 = "segundo";
let segundo = prompt(numero2);

let numero3 = "tercero";
let tercero = prompt(numero3);

let numero4 = "cuarto";
let cuarto = prompt(numero4);

document.write("La suma de los dos primero es " + (parseInt(primero) + parseInt(segundo))  + "<br>");
document.write("La suma de los dos primero es " + (tercero * cuarto));