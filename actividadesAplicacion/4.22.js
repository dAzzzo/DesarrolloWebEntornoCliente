// Escribe una funcion que indique si un num que recibe como parametro es multiplo de 10

let num = parseInt(prompt("Escriba un número y comprobaremos si es multiplo de 10: "));

function multiplo(num) {

    if ((num % 10) === 0) {
        document.write("Efectivamente, el número es multiplo de 10");
    } else {
        document.write("Mala suerte, sigue intentandolo...");
    }

}


document.write("El número elegido es: " + num +  "<br>");
multiplo(num);