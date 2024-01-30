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

//Creamos los valores correspondientes sin inicializar
let boolean1, boolean2, num1, num2, string1, string2;

//Creamos un bucle para que aparezca 6 prompts, tambien se pueden poner manualmente
for (let i = 0; i < 6; i++) {
    let valor = prompt("Introduzca el valor nº " + i);

    //Utilizamos la funcion isNaN() si es un num y !isNaN() si no es num
    if (!isNaN(valor)) {
        //si num1 es undefined, significa que todavía no se le ha asignado un valor, luego cuando ya no sea undefined faltará asignarle un valor a num2
        if (num1 == undefined)
            num1 = valor;
        else
            num2 = valor;
    }
    // Entro en el else cuando el valor leído no pasa como número
    else {
        // Para mí, "nUlL" es null. Este criterio lo sigo con el resto de tipos de dato. Verifiico si el valor es null
        if (valor.toLowerCase() == "null") {
            alert("Los valores ya no son válidos. Vuelve a introducirlos.");
            // "Vacio" las variables de nuevo, asignándoles undefined
            boolean1 = undefined;
            boolean2 = undefined;
            num1 = undefined;
            num2 = undefined;
            string1 = undefined;
            string2 = undefined;
            // Regreso el contador i a 0, de manera que al finalizar esta iteración del bucle i sea igual a 1
            i = 0;

        }
        // Si es cadena y no es null, verifico si es distinta de true y false
        else if (valor.toLowerCase() != "true" && valor.toLowerCase() != "false") {
            //Volvemos a meter valor a string
            if (string1 == undefined)
                string1 = valor;
            else
                string2 = valor;
        }
        else {
            //ahora lo hacemos con los booleanos
            if (valor == "true") {
                if (boolean1 == undefined)
                    boolean1 = true;
                else
                    boolean2 = true;
            } else {
                if (valor == "false") {
                    if (boolean1 == undefined)
                        boolean1 = false;
                    else
                        boolean2 = false;
                }
            }

        }
    }

    /* Devolución de información */

    // Si alguno de los elementos es igual a nulo deberemos pedir al usuario que vuelva a introducir todos los valores nuevamente.
    // Ya está resuelta en el código anterior

    // Determinar cuál de los dos elementos de texto es mayor.
    if (string1.length > string2.length)
        document.write("<p>La cadena " + string1 + " es la de mayor longitud.</p>");
    else
        ("<p>La cadena " + string2 + " es la de mayor longitud.</p>");

// Determinar el resultado de dos operaciones lógicas realizadas con los elementos booleanos
document.write("<p>Resultado de la operación " + boolean1 + " && " + boolean2 + ": " + (boolean1 && boolean2) + ".</p>");
document.write("<p>Resultado de la operación " + boolean1 + " || " + boolean2 + ": " + (boolean1 || boolean2) + ".</p>");

// Determinar el resultado de dos operaciones aritméticas realizadas con los elementos numéricos.
document.write("<p>Múltiplicacion de los números: " + num1 + " * " + num2 + " = " + (num1 *  num2));
document.write("<p>División de los números: " + num1 + "/" + num2 + "=" + (num1 / num2));


// Crea un nuevo array que ordene los valores de forma que estén primero los dos booleanos, a continuación las dos cadenas y finalmente los dos números cada par de ellos ordenados de mayor a menor, y muéstralo por pantalla
// Creo el array
let arr = [];
// Condicional para insertar de manera ordenada los booleanos en el array, prácticamente inútil pero nuevamente no me arriesgo a desviarme del enunciado. Técnicamente, true > false dado que true = 1 o cualquier valor != 0, y false = 0
if (boolean1 > boolean2){
    arr.push(boolean1);
    arr.push(boolean2);
}else{
    arr.push(boolean2);
    arr.push(boolean1);
}
// Condicional para insertar de manera ordenada las cadenas en el array
if(string1.length>string2.length){
    arr.push(string1);
    arr.push(string2);
}else{
    arr.push(string2);
    arr.push(string1);
}
// Condicional para insertar de manera ordenada los valores numéricos
if (num1 > num2) {
    arr.push(num1);
    arr.push(num2);
}
else {
    arr.push(num2);
    arr.push(num1);
}
// Muestro en la página web el array
document.write("<p>El array es: " + arr.toString() + ".");

    }
