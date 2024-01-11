/* 
Solicitar con 6 elementos, dos valores booleanos, dos valores numéricos y dos cadenas de
caracteres.  Realizar un script que devuelva en la propia página web la siguiente información:
    - Si alguno de los elementos es igual a nulo deberemos pedir al usuario que vuelva a introducir todos los valores nuevamente.
    - Determinar cuál de los dos elementos de texto es mayor.
    - Determinar el resultado de dos operaciones lógicas realizadas con los elementos booleanos
    - Determinar el resultado de dos operaciones aritméticas realizadas con los elementos numéricos.
    - Crea un nuevo array que ordene los valores de forma que estén primero los dos booleanos, a continuación las dos cadenas y finalmente los dos números cada par de ellos ordenados de mayor a menor, y muéstralo por pantalla.
    
Nota: No asumir orden de valores.
*/

let boolean1, boolean2, num1, num2, string1, string2;

for (let i = 1; i <= 6; i++) {
    let valor = prompt("Introduzca el valor nº " + i + ".");
    // La función isNaN() devuelve true si el parámetro no es un número, luego !isNaN() es verdadero si el parámetro es un número
    if (!isNaN(valor)) {
        if (num1 == undefined) num1 = valor;
        else num2 = valor;
    }
    else {
        if (valor.toLocaleLowerCase() == "null") {
            alert("Los valores ya no son válidos. Vuelve a introducirlos");
            boolean1 = undefined;
            boolean2 = undefined;
            num1 = undefined;
            num2 = undefined;
            string1 = undefined;
            string2 = undefined;

            i = 0;
        }
        else if (valor.toLowerCase() != "true" && valor.toLowerCase != "false") {
            if (string1 == undefined) string1 = valor;
            else string2 = valor;
        }
        else {
            if (valor = "true") {
                if (boolean1 == undefined) boolean1 = true;
                else boolean2 = true;
            } else {
                if (boolean1 == undefined) boolean1 = false;
                else boolean2 = false;
            }
        }
    }
}

// Determinar cuál de los dos elementos de texto es mayor.
if (string1.length > string2.length) document.write("<p>La cadena " + string1 + " es la de mayor longitud.</p>");
else document.write("<p>La cadena " + string2 + " es la de mayor longitud.</p>");

// Determinar el resultado de dos operaciones lógicas realizadas con los elementos booleanos
document.write("<p>Resultado de la operación " + boolean1 + " && " + boolean2 + ": " + (boolean1 && boolean2) + ".</p>");
document.write("<p>Resultado de la operación " + boolean1 + " || " + boolean2 + ": " + (boolean1 || boolean2) + ".</p>");

// Determinar el resultado de dos operaciones aritméticas realizadas con los elementos numéricos.
document.write("<p>Multiplicación de los números: " + num1 + "*" + num2 + "= " + (num1 * num2) + "</p>");
document.write("<p>División de los números: " + num1 + "/" + num2 + "= " + (num1 / num2) + "</p>");

// Crea un nuevo array que ordene los valores de forma que estén primero los dos booleanos, a continuación las dos cadenas y finalmente los dos números cada par de ellos ordenados de mayor a menor, y muéstralo por pantalla
let arr = [];

if (boolean1 > boolean2) {
    arr.push(boolean1);
    arr.push(boolean2);
}
else {
    arr.push(boolean2);
    arr.push(boolean1);
}

if (string1 > string2) {
    arr.push(string1);
    arr.push(string2);
}
else {
    arr.push(string2);
    arr.push(string1);
}

if (num1 > num2) {
    arr.push(num1);
    arr.push(num2);
}
else {
    arr.push(num2);
    arr.push(num1);
}

document.write("<p>El array es: " + arr.toString() + ".");