//Le pedimos al usuario que introduzca la variable
let cantidad = prompt("Introduce el tamaño del dibujo:");

//Creamos la funcion
function pintar(cantidad) {
    //Creamos las variables necesarias
    let j = 0;
    let contador = 0;

    //Hacemos un bucle que recorra el numero de veces que se ha introducido
    for (let i = 0; i < cantidad; i++) {
        //Creamos la linea para añadir los textos para el console log
        //La reseteamos a "" ya que si no mantendra la informacion anterior
        let linea = "";
        //Convertimos a J en contador para que cada vez vaya haciendo uno menos
        j = contador;

        //Hacemos un bucle para añadir los espacios
        for (let x = 0; x < contador; x++) {
            document.write(" ");
            linea = " " + linea;
        }

        //Hacemos un bucle para añadir los *
        for (j; j < cantidad; j++) {
            document.write("*");
            linea = linea + "*";
        }

        //Mostramos los * con los espacios
        console.log(linea);
        //Hacemos br para que se ponga en otra linea
        document.write("<br>");
        //Subimos el contador para hacer que se escriban menos *
        contador++;
    }
}

//Hacemos la funcion
pintar(cantidad);
