// Programa una funcion que termine si un año que reciba como parametro es bisiesto

let anyo = parseInt(prompt("Escriba un año y diremos si es bisiesto o no: "));

// Un año es bisiesto si es divisible por 4, excepto aquellos años que son divisibles por 100 pero no por 400.

function bisisesto(anyo) {

    if ((anyo % 4 === 0 && anyo % 100 !== 0) || anyo % 400 === 0) {
        return true;
    } else {
        return false;
    }

}

document.write("El año elegido es: " + anyo + "<br>");


if (bisisesto(anyo)) {
    document.write("Efectivamente, el año es bisiesto");
} else {
    document.write("No, el año no es bisiesto");
}