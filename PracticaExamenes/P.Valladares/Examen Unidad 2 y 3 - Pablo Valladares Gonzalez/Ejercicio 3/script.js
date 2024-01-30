//Creamos las variables
let lista = [];
let contador = 0;
let comprobar = 0;
let contadorBoo = 0;
let contadorNumero = 0;
let contadorTexto = 0;
let letras = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "ñ",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
];
do {
    //Reseteamos las variables de contadores a 0
    contadorBoo = 0;
    contadorNumero = 0;
    contadorTexto = 0;

    //Si ya se ha hecho el bucle, se mostrara ese mensaje
    if (contador > 0) {
        alert("No has introducido adecuadamente los datos");
    }

    //Añadimos los datos al array
    for (let i = 0; i < 6; i++) {
        lista[i] = prompt("Introduce el valor");
    }

    //Recorremos el array comprobando los datos
    for (let i = 0; i < 6; i++) {
        //Si es true o false, aumenta la variable de contadorBoo
        if (lista[i] == "true" || lista[i] == "false") {
            contadorBoo++;
            //Si al multiplicarlo por 0 da 0 y no NaN quiere decir que es un numero
        } else if (lista[i] * 0 == 0) {
            //Aumentamos la variable de contador
            contadorNumero++;
        } else {
            //Reseteamos el comprobador a 0
            comprobar = 0;
            //Hacemos un for que recorra nuestro array (diccionario antes creado)
            for (let j = 0; j < letras.length; j++) {
                //Si la primera letra concuerda con alguna de ellas y la palabra entera no es ni true ni false
                if (lista[i].charAt(0) == letras[j] && !(lista[i] == "true" || lista[i] == "false")) {
                    //Aumentamos el comprobador
                    comprobar++;
                }
            }
            //Si el comprobador es mas de 1, aumentamos el contador
            if (comprobar > 0) {
                contadorTexto++;
            }
        }
    }
    //Sumamos el contador para el feedback de que introduzcamos los datos de nuevo
    contador++;

    //Mientras que no itnroduzca 2 boolean, 2 numeros y 2 textos, se repetira
} while (!(contadorBoo == 2 && contadorNumero == 2 && contadorTexto == 2));

//Creamos la funcion para comprobar el mayor
function mayor() {
    //Creamos las dos variables
    let cadena1 = "";
    let cadena2 = "";

    //Hacemos un for para comprobar los datos
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < letras.length; j++) {
            if (lista[i].charAt(0) == letras[j] && !(lista[i] == "true" || lista[i] == "false")) {
                cadena2 = lista[i];
            }
            if (cadena1 == "") {
                cadena1 = cadena2;
            }
        }
    }

    //Mostramos los resultados segun se de
    if (cadena1.length > cadena2.length) {
        document.write("La cadena mayor es: " + cadena1);
    } else {
        document.write("La cadena mayor es: " + cadena2);
    }
    //Por estetica
    document.write("<br>");
}

mayor();

//Creamos la funcion para comprobar los booleans
function comprobarTrue() {
    //Creamos las variables para guardar los boolean
    let boolean1 = "";
    let boolean2 = "";
    //Hacemos el for para añadir los datos
    for (let i = 0; i < 6; i++) {
        if (lista[i] == "true" || lista[i] == "false") {
            boolean2 = lista[i];
        }
        if (boolean1 == "") {
            boolean1 = boolean2;
        }
    }
    //Comprobamos y segun resultado mostramos una cosa u otra
    if (boolean1 == "true" && boolean2 == "true") {
        document.write("La operacion and es true ");
        if (boolean1 == "true" || boolean2 == "true") {
            document.write("y la operacion or es true");
        } else {
            document.write("y la operacion or es true");
        }
    } else if (boolean1 == "true" || boolean2 == "true") {
        document.write("La operaicon and es false y la operacion or es true");
    } else {
        document.write("La operaicon and es false y la operacion or es false");
    }

    //Estetica
    document.write("<br>");
}

comprobarTrue();

//Creamos la funcion suma
function suma() {
    //Creamos las variables y asignamos valores
    let numero1 = "";
    let numero2 = "";
    for (let i = 0; i < 6; i++) {
        if (lista[i] * 0 == 0) {
            numero1 = numero2;
            numero2 = lista[i];
        }
    }

    //Hacemos la suma y la resta
    let suma = parseInt(numero1) + parseInt(numero2);
    let resta = parseInt(numero1) - parseInt(numero2);
    //Mostramos el mensaje
    document.write("La suma de los dos numeros es " + suma + " y la resta es " + resta);
    //Estetica
    document.write("<br>");
}

suma();

//Ordenamos (pero no funciona)
function ordenar() {
    let ordenado = lista.sort();
    document.write(ordenado);
    document.write("<br>");
}

ordenar();
