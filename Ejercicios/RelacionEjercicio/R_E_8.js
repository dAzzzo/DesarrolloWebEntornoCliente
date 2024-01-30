/*El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto
de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro
de un array de letras. El array de letras es:


var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar
un pequeño script que:- Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.


En primer lugar se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario
indicando que el número proporcionado no es válido y el programa no muestra más mensajes.


Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.


Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole
que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/




/*function buscarLetra(dni){


    //Array de las letras del dni
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


//Comprobamos que sean 8 numeros
if(/^\d{8}$/.test(dni)){
    // Convierte la entrada a un número entero
    let numeroDNI = parseInt(dni, 10);


    // Calcula el índice en el array de letras
    let indiceLetra = numeroDNI % 23;


    //Obtener la letra
    let letraFinal = letras[indiceLetra];
    return letraFinal;
}else {
    return "<br>Número de DNI no válido. Deben ser 8 dígitos numéricos.";
  }
}
*/

//Pedimos por pantalla el dni
let dni = prompt("Escriba los números de su DNI (8 números): ");

function buscarLetra(dni){

    //Array de las letras del dni
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

 
    if (dni > 0 && dni <= 99999999){
        document.write("El número es valido :)<br>");
    }else{
        document.write("El número NO es valido :(<br>");
    }

     // Convierte la entrada a un número entero
     let numeroDNI = parseInt(dni, 10);
   
     
    // Calcula el índice en el array de letras
    let indiceLetra = numeroDNI % 23;

    //Obtener la letra
    let letraFinal = letras[indiceLetra];
    return letraFinal;
    } 


let letraFinal = buscarLetra(dni);
document.write("El número aleatorio del array letras es: " + letraFinal);


document.write("<br>El DNI creado es: " + dni + letraFinal);





