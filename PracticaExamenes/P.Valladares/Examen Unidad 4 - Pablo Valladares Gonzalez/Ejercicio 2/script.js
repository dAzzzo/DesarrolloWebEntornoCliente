//Cambiar estilo de la pagina y el boton
function cambiar() {
    if (document.getElementById("cuerpo").classList.contains("blanco")) {
        document.getElementById("cuerpo").classList.remove("blanco");
        document.getElementById("cuerpo").classList.add("oscuro");
        document.getElementById("cambiarEstilo").classList.remove("btn-dark");
        document.getElementById("cambiarEstilo").classList.add("btn-light");
    } else {
        document.getElementById("cuerpo").classList.remove("oscuro");
        document.getElementById("cuerpo").classList.add("blanco");
        document.getElementById("cambiarEstilo").classList.remove("btn-light");
        document.getElementById("cambiarEstilo").classList.add("btn-dark");
    }
}

//Script para el ejercicio

//Funcion que calcula que la potencia no sea negativa (Abajo de está, esta la del examen)
function potenciaRecursiva() {
    //Creamos las variables
    let numero = prompt("Introduce un numero");
    let exponente = prompt("Introduce el exponente");
    let potenciaPositiva = 1;
    let potenciaNegativa = 1;

    //Si el exponenete es mayor a 0
    if (exponente > 0) {
        //Hacemos la potencia
        for (let i = 0; i < exponente; i++) {
            potenciaPositiva *= numero;
        }
        //Devolvemos la potencia
        document.write("La potencia del numero " + numero + " con exponente " + exponente + " es: " + potenciaPositiva);

        //Si el exponente es negativo
    } else if (exponente < 0) {
        //Hacemos la potencia negativa
        for (let i = 0; i > exponente; i--) {
            potenciaNegativa *= -numero;
        }
        //Si es menor a 0, es decir negativo
        if (potenciaNegativa < 0) {
            //Volvemos a llamar a la funcion
            potenciaRecursiva();
        } else {
            //Si es positivo lo mostramos
            document.write(
                "La potencia del numero " + numero + " con exponente " + exponente + " es: " + potenciaNegativa
            );
        }
    } else {
        //Si el exponente es 0, devolvemos 1
        document.write("La potencia del numero " + numero + " con exponente " + exponente + " es: " + 1);
    }
}

//potenciaRecursiva();

//Funcion que solo admite exponente positivo
function potenciaRecursivaExamen() {
    //Creamos las variables
    let numero = prompt("Introduce un numero");
    let exponente = prompt("Introduce el exponente");
    let potenciaPositiva = 1;
    //Si el exponenete es mayor a 0
    if (exponente > 0) {
        //Hacemos la potencia
        for (let i = 0; i < exponente; i++) {
            potenciaPositiva *= numero;
        }
        //Devolvemos la potencia de forma bonita
        document.write("La potencia del numero " + numero + " con exponente " + exponente + " es: " + potenciaPositiva);

        //Si el exponente es negativo
    } else if (exponente < 0) {
        //Volvemos a llamar a la funcion
        potenciaRecursivaExamen();
    } else {
        //Si el exponente es 0, devolvemos 1
        document.write("La potencia del numero " + numero + " con exponente " + exponente + " es: " + 1);
    }
}

potenciaRecursivaExamen();
